import React from 'react'
import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import RoomsSection from '@/components/RoomsSection'
import ServicesSection from '@/components/ServicesSection'
import GallarySection from '@/components/GallarySection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
const Home = () => {
  return (
     <Layout>
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