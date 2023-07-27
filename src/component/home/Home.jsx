import React from 'react'
import './home.css'
import Banner from './Banner'
import Product from './Product'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Product />
       <Footer/>
    </div>
  )
}

export default Home