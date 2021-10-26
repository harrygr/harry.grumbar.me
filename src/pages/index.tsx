import { Layout } from "../components/layout";
import Image from "next/image";
import Head from "next/head";

import bg from "./daniel-leone-g30P1zcOzXo-unsplash.jpg";
import { useThemeColor } from "../hooks/useThemeColor";
import { SiteNav } from "../components/SiteNav";

const Home = () => {
  useThemeColor("#65909b");

  return (
    <>
      <Head>
        <title>Harry Grumbar</title>
        <meta
          name="description"
          content="Harry Grumbar is a software engineer based in London."
        ></meta>
      </Head>

      <header className="w-full p-8 md:px-32 md:pt-16 text-white sm:flex flex-row-reverse justify-between">
        <SiteNav className="sm:ml-6 sm:flex sm:justify-end mb-6" />
        <div className="space-y-4 ">
          <h1 className="text-4xl font-bold tracking-tighter drop-shadow">
            Harry Grumbar
          </h1>
          <p>Software Engineer based in London.</p>
        </div>
      </header>

      <footer className="w-full mt-auto text-sm flex justify-between xfixed xbottom-0 xinset-x-0 p-8 md:px-32 pb-12 text-white">
        <nav>
          <ul className="space-x-4">
            <li className="inline-block">
              <a href="https://twitter.com/harrygrumbar" target="_blank">
                Twitter
              </a>
            </li>
            <li className="inline-block">
              <a href="https://github.com/harrygr" target="_blank">
                Github
              </a>
            </li>
            <li className="inline-block">
              <a href="mailto:harry@grumbar.me" target="_blank">
                Email
              </a>
            </li>
            <li className="inline-block">
              <a href="/cv.html" target="_blank">
                CV
              </a>
            </li>
          </ul>
        </nav>
        <p>&copy; 2020</p>
      </footer>

      <div className="bg-gray-600 fixed z-[-1] h-full w-full">
        <Image
          alt="Mountains"
          src={bg}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          placeholder="blur"
          className="text-transparent"
        />
      </div>
    </>
  );
};

export default Home;
