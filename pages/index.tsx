import { Layout } from "../components/layout";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <div className="bg-gray-600 fixed  z-[-1] h-screen w-screen">
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
      <div className="min-h-screen p-8 pb-16 md:px-32 md:pt-16 text-white flex flex-col">
        <header className="space-y-4 w-full">
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
        <main className="w-full"></main>
        <footer className="w-full mt-auto text-sm flex justify-between">
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
      </div>
    </Layout>
  );
};

export default Home;
