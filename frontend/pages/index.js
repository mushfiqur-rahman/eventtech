import Head from 'next/head'
import Main from "../components/Main";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/SkillDevelopment";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="facebook boosting, youtube boosting,google boosting, website develop, skill development, Jashore it park"></meta>
        <meta name="description" content="Innovative IT Solution..." />
        <meta property="og:title" content='software company' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.png" />
        <link rel='manifest' href='/manifest.json'/>
        <title>Event Tech</title>
      </Head>
        <Main/>
        <About />
        <Services/>
        <Portfolio />
        <Testimonial/>
    </div>
  )
}
