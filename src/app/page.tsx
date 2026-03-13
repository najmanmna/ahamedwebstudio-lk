import React from 'react';

import Hero from "@/components/Hero";
import Work from '@/components/Work';
import HowItWorks from '@/components/Howitworks';
import Packages from '@/components/Packages';
import About from '@/components/About';
import CTA from '@/components/Cta';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <HowItWorks />
      <Packages />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}