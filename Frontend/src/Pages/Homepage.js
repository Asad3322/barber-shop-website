import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero"
import Footer from '../Components/Footer'
import Extraproducts from '../Components/Extraproducts'


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Extraproducts/>
        <Footer/>
    </div>
  )
}

export default Homepage