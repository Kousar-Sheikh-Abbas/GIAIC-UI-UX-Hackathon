'use client'
import React from 'react'
import Placeholder from './Component/Placeholder'
import AboutUs from './Component/About'
import Foodcategory from './Component/Foodcategory'
import FeaturesSection from './Component/Users'
import OurMenu from './Component/Menu'
import MeetChefsTestimonials from './Component/Chefs'
import ActiveProcess from './Component/Section'
import BlogSection from './Component/Blog'


function page() {
  return (
    <div >
      <Placeholder />
      <AboutUs />
      <Foodcategory />
      <FeaturesSection />
      < OurMenu />
      < MeetChefsTestimonials />
      <ActiveProcess />
      <BlogSection />
    </div>
  )
}

export default page
