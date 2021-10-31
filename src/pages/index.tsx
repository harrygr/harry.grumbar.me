import Image from "next/image";
import Head from "next/head";

import bg from "./daniel-leone-g30P1zcOzXo-unsplash.jpg";
import { useThemeColor } from "../hooks/useThemeColor";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

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

      <SiteFooter className="text-white p-8 md:px-32" />

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
