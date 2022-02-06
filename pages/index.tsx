import type { NextPage } from 'next'
import Head from 'next/head'
import Appbar from "../components/Appbar"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Foot from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
import SkillList from "../components/SkillList"
import Skills from "../components/Skills"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anurag Pathak - Software Developer</title>
        <meta name="author" content="Anurag Pathak" />
        <meta name="description" content="Anurag Pathak, Android and MERN stack
         developer. DevOps enthusiast. B. Tech. NIT Silchar CSE (2024)." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Anurag, Pathak, Software, Developer, 
        Android, MERN, portfolio" />
        <meta property="og:type" content="profile" key="ogtype" />
        <meta property="og:title" content="Anurag Pathak - Software Developer"
          key="ogtitle" />
        <meta name="og:description" content="Anurag Pathak, Android and MERN stack
         developer. DevOps enthusiast. B. Tech. NIT Silchar CSE (2024)."
          key="ogdescription" />
        <meta property="og:site_name" content="Anurag Pathak" key="ogsitename" />
        <meta property="og:image" content="https://anuragpathak.netlify.app/ogimage.png"
          key="ogimage" />
        <meta property="og:image:width" content="644" />
        <meta property="og:image:height" content="388" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="AnuragThePathak" key="twhandle" />
      </Head>

      <header>
        <Appbar />
        <HeroSection />
      </header>

      <main>
        <Skills />
        <SkillList />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Foot />
    </div>
  )
}

export default Home
