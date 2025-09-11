import React from 'react'
import Layout from '@/components/Layout'
import HeroSection from '@/sections/HeroSection'
import RoomsSection from '@/sections/RoomsSection'
import ServicesSection from '@/sections/ServicesSection'
import GallarySection from '@/sections/GallarySection'
import AboutSection from '@/sections/AboutSection'
import ContactSection from '@/sections/ContactSection'
import Head from 'next/head'
const Home = () => {
  return (
     <Layout>
      <Head>
        <title>King Sukh Guest House</title>
        <meta 
          name="description" 
          content="Experience a comfortable, home-like stay at King Sukh Guest House. We offer clean rooms, great service, and a warm, welcoming atmosphere in Barhanti, West Bengal" 
        />
        <meta 
          name="keywords" 
          content="guest house Barhanti, hotel in Barhanti, affordable stay in Barhanti, king sukh guest house, accommodation Barhanti, budget hotel Barhanti, best guest house Barhanti" 
        />
      </Head>
      <HeroSection />
      <RoomsSection />
      <ServicesSection />
      <GallarySection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

export default Home