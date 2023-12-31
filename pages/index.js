import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Client";
import Testimonial from "../components/SkillDevelopment";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="facebook boosting, youtube boosting,google boosting, software development in jashore,skill development,basis, Jashore it park,ecab,digital bangladesh,digital jashore,digital marketing in jashore,ইভেন্টটেক,কেনারহাট"
        ></meta>
        <meta name="description" content="Innovative IT Solution..." />
        <meta property="og:title" content="software company" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="robots" content="follow, index" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My page title" key="title" />
        <meta content="#FFFFFF" name="theme-color" />
        <meta content="" name="msapplication-TileColor" />
        <meta content="MUSHFIQ" name="author" />
        <meta content="Event Tech BD" name="application-name" />
        <title>Event Tech</title>
      </Head>
      <Main />
      <About />
      <Services />
      <Testimonial />
      <Portfolio />
    </>
  );
}
