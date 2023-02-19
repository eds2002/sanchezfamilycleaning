import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return <Component {...pageProps} />;
}

export default MyApp;
