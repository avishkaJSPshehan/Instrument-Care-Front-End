import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Hero from '../Components/Common/Hero-section'
import FeatureCards from '../Components/Common/Cart'
import Services from '../Components/Common/Service'
import WhyUs from '../Components/Common/Why-Us'
import TestimonialSection from '../Components/Common/Testimonials'
import AppointmentSection from '../Components/Common/Appointment'
import Footer from '../Components/Common/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <FeatureCards/> */}
      <Services/>
      <WhyUs />
      <TestimonialSection />
      <AppointmentSection/>
      <Footer />
    </>
  )
}
