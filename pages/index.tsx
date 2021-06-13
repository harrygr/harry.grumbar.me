import { Layout } from "../components/layout";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Harry Grumbar is a software engineer based in London, UK. Currently working at Bulb."
        ></meta>
      </Head>
      <div className="bg-gray-600 fixed z-[-1] h-screen w-screen">
        <div
          className="absolute inset-0 filter blur-2xl transform scale-150"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(75,116,123) 25%,rgb(103,144,150) 25% 50%,rgb(124,164,168) 50% 75%,rgb(139,180,184) 75% 100%),linear-gradient(90deg, rgb(35,58,63) 25%,rgb(41,66,71) 25% 50%,rgb(51,78,82) 50% 75%,rgb(72,97,98) 75% 100%)",
            backgroundPosition: "0 0 ,0 100%",
            backgroundSize: "100% 50%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Image
          alt="Mountains"
          src="/images/daniel-leone-g30P1zcOzXo-unsplash.jpg"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          className="text-transparent"
        />
      </div>

      <header className="space-y-4 w-full p-8 md:px-32 md:pt-16 text-white">
        <h1 className="text-4xl font-bold tracking-tighter drop-shadow">
          Harry Grumbar
        </h1>
        <p>
          Software Engineer based in London, UK. Currently working at{" "}
          <a
            href="https://bulb.co.uk"
            target="_blank"
            className="hover:text-gray-200 underline"
          >
            Bulb
          </a>
          .
        </p>
      </header>

      <footer className="w-full mt-auto text-sm flex justify-between fixed bottom-0 inset-x-0 p-8 md:px-32 pb-16 text-white">
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
          </ul>
        </nav>
        <p>&copy; 2020</p>
      </footer>
    </Layout>
  );
};

export default Home;
