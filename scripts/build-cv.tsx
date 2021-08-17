import * as fs from "fs";
import * as path from "path";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import puppeteer from "puppeteer";
import { App } from "../cv/App";

const main = async () => {
  console.log("📇 Building CV...");

  const renderedApp = ReactDOMServer.renderToStaticMarkup(<App />);
  const template = fs.readFileSync(
    path.resolve(__dirname, "../cv", "template.html")
  );

  const outputDirectory = path.resolve(__dirname, "../cv/public");
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  console.log("⚙️  Rendering to HTML");
  const output = template.toString().replace("{{content}}", renderedApp);
  const htmlLocation = path.resolve(outputDirectory, "cv.html");
  fs.writeFileSync(htmlLocation, output);
  console.log(`HTML file built: file://${htmlLocation}`);

  console.log("⚙️  Rendering PDF");
  const pdf = await buildPdf(output);
  const pdfLocation = path.resolve(outputDirectory, "cv.pdf");
  fs.writeFileSync(pdfLocation, pdf);
  console.log(`PDF file built: file://${pdfLocation}`);
};

const buildPdf = async (html: string) => {
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-web-security",
    ],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle2" });
  const pdf = await page.pdf({
    format: "a4",
    printBackground: true,
    scale: 0.85,
    margin: { top: 40, right: 40, bottom: 40, left: 40 },
  });

  await browser.close();

  return pdf;
};

main()
  .then(() => {
    console.log("Done!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
