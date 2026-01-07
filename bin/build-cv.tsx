import * as fs from "fs";
import * as path from "path";
import puppeteer from "puppeteer";

import { execa } from "execa";

type Process = {
  stop: () => Promise<unknown>;
  port: number;
};

const wait = (ms: number) =>
  new Promise((r) => {
    setTimeout(r, ms);
  });

const port = 4006;
const startApp = async () => {
  console.log("Starting app server...");
  const server = execa("react-router-serve", ["./build/server/index.js"], {
    env: {
      PORT: port.toString(),
      BASE_URL: `http://localhost:${port}`,
    },
  });

  return await new Promise<Process>((resolve, reject) => {
    server.catch((error) => reject(error));

    if (server.stdout === null) {
      return reject("Failed to start server.");
    }

    server.stdout.on("data", (stream: Buffer) => {
      if (stream.toString().includes(port.toString())) {
        console.log(stream.toString());
        return resolve({
          stop: async () => {
            if (server.killed) {
              return;
            }
            console.log("Killing app server...");
            server.kill("SIGKILL");
            await wait(2000);
          },
          port,
        });
      }
    });
  });
};

const main = async () => {
  console.log("📇 Building CV...");

  const outputDirectory = path.resolve(import.meta.dirname, "../public");
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  console.log("⚙️  Rendering PDF");

  const app = await startApp();

  const pdf = await buildPdf(`http://localhost:${port}`).catch(
    async (error) => {
      console.error("Failed to build PDF");
      await app.stop();

      throw error;
    }
  );
  const pdfLocation = path.resolve(outputDirectory, "cv.pdf");
  fs.writeFileSync(pdfLocation, pdf);
  console.log(`PDF file built: file://${pdfLocation}`);

  await app.stop();
};

const buildPdf = async (server: string) => {
  const url = new URL("/cv", server);

  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-web-security",
    ],
  });
  const page = await browser.newPage();
  await page.goto(url.toString(), { waitUntil: "networkidle2" });
  await page.evaluateHandle("document.fonts.ready");
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
