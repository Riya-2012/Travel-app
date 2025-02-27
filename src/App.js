import React, { useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Recomend from './components/Recomend';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import scrollreveal from "scrollreveal";
import { DiVim } from 'react-icons/di';
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recomend />
      <Testimonial />
      <Footer />
      <ScrollToTop />
    </div>
  );
    



}
