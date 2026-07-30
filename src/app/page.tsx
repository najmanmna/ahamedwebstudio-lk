import React from 'react';

import Hero from "@/components/Hero";
import OnlineStorePromoBanner from '@/components/OnlineStorePromoBanner';
import Work from '@/components/Work';
import HowItWorks from '@/components/Howitworks';
import About from '@/components/About';
import GoogleReviews from '@/components/GoogleReviews';
import CTA from '@/components/Cta';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OnlineStorePromoBanner />
      <Work />
      <HowItWorks />
      <About />
      <GoogleReviews />
      <CTA />
      <Footer />
    </div>
  );
}