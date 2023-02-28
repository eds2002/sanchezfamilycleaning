import type { NextPage } from "next";
import Head from "next/head";
import {
  Footer,
  Hero,
  AboutUs,
  Services,
  Motives,
  ContactUs,
  HomeTestimonials,
} from "../components";
import NumbersSection from "../components/Sections/home/NumbersSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Sanchez Family Cleaning</title>
        <meta
          name="description"
          content="Professional cleaners based in New Jersey."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <Hero />
        <NumbersSection />
        <AboutUs />
        <Services />
        <Motives />
        <ContactUs />
        <HomeTestimonials />
        <GridLines />
      </main>
      <Footer />
    </>
  );
};
function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="grid w-full h-full grid-cols-1 px-4 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        <div className="border-dotted border-x border-gray-500/10" />
        <div className="border-r border-dotted border-gray-500/10" />
        <div className="hidden border-r border-dotted border-gray-500/10 lg:block" />
        <div className="hidden border-r border-dotted border-gray-500/10 lg:block" />
      </div>
    </div>
  );
}

export default Home;
