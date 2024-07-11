// app/Components/Homepage/Homepage.js
import Head from 'next/head';
import Aboutme from '../Aboutme';
import Nav from '../Nav/Nav';
import Skills from '../Skills/Skills';
import Certificates from '../Certificates/Certificates';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact ';
// import Nav from '../Nav/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benjamin's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex md:justify-start justify-center">
        <div className="w-full md:w-2/5">
          <Aboutme />
          <Skills />
          <Certificates />
          <Projects />
          <Contact/>
        </div>
        <div className="w-1/2 fixed right-0 top-0 h-screen">

        <Nav />
        </div>
      </main>
    </div>
  );
}
