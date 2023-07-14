import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer, Header, QuoteHero } from "../components";

const RequestAQuote: NextPage = () => {
  return (
    <>
      <Head>
        <title>Request a quote | Sanchez Family Cleaning</title>
        <meta
          name="description"
          content="Love our services? Request a quote! It's free and easy. You're getting exellence with us."
        />
        <meta
          property="og:title"
          content="Request a quote | Sanchez Family Cleaning"
        />
        <meta
          property="og:url"
          content="https://sanchezfamilycleaning.com/request-a-quote"
        />
        <meta
          property="og:description"
          content="Love our services? Request a quote! It's free and easy. You're getting exellence with us."
        />
        <meta property="og:site_name" content="Sanchez Family Cleaning" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="Request a quote | Sanchez Family Cleaning"
        />
        <meta
          property="twitter:domain"
          content="https://sanchezfamilycleaning.com/request-a-quote"
        />
        <meta
          property="twitter:url"
          content="https://sanchezfamilycleaning.com/request-a-quote"
        />
        <meta name="twitter:title" content="Sanchez Family Cleaning" />
        <meta
          name="twitter:description"
          content="Love our services? Request a quote! It's free and easy. You're getting exellence with us."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <QuoteHero />
      </main>
      <Footer />
    </>
  );
};

export default RequestAQuote;
