import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className="flex items-center justify-center h-screen bg-white">
      <div className="max-w-screen-md px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight lg:mb-6 md:text-2xl xl:text-4xl ">
          Sanchez Family Cleaning
        </h1>
        <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight lg:mb-6 md:text-5xl xl:text-6xl ">
          Under Maintenance
        </h2>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl ">
          We&apos;re under construction, we can&apos;t wait to show you what
          we&apos;re working on.
        </p>
      </div>
    </section>
  );
}

export default MyApp;
