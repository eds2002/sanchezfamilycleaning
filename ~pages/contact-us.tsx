import Head from "next/head";
import React from "react";
import { ContactSection, Footer, Header } from "../components";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Sanchez Family Cleaning</title>
        <meta
          name="description"
          content="Questions about our services or us? Contact us, we are a click away."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pb-24 md:pb-0">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
