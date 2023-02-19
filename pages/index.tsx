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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Sanchez Family Cleaning</title>
        <meta
          name="description"
          content="Professional cleaners based in New Jersey."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Motives />
        <ContactUs />
        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;
