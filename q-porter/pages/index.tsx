import type { NextPage } from 'next';
import Head from 'next/head';
import Tag from '../components/Tag';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Pricing from '../components/Pricing';
import Testimonies from '../components/Testimonies';
import Action from '../components/Action';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import CustomCursor with no SSR to avoid hydration issues
const CustomCursor = dynamic(() => import('../components/CustomCursor'), {
  ssr: false,
});

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <>
      <Tag />
      <Head>
        <title>Q-Porter – Hybrid Quantum AI for Port and Airport Logistics</title>
        <meta content="Q-Porter delivers hybrid quantum-classical AI solutions that optimize port and airport logistics, reducing delays and improving throughput with cutting-edge quantum algorithms." name="description" />
        <meta property="og:url" content="https://q-porter.com" />
        <meta property="og:description" content="Q-Porter's hybrid quantum-classical AI optimizes port and airport logistics, delivering measurable efficiency gains through advanced algorithms." />
        <meta property="og:title" content="Q-Porter - Quantum AI for Logistics Optimization" />
        <meta property="og:image" content="/images/q-port-logo.svg" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full leading-normal text-gray-600 cursor-none">
        <CustomCursor />
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/splash.jpeg')",
            zIndex: -1,
          }}
        />
        <Header showNavigation={false}/>
        <Landing />
        <Features />
        <Demo />
        {/* <Pricing />
        <Testimonies /> */}
        <Action />
        <Footer />
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
