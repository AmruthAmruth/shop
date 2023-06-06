import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Rowpost from '../Components/Rowpost/Rowpost'
import Footer from '../Components/Footer/Footer'
import Cart from '../Components/Cart/Cart'
import { CartProvider } from 'react-use-cart'
import Contact from '../Components/Contact/Contact'

function Home() {
  return (
    <div>
      <Navbar/>
      <CartProvider>
      <Rowpost/>
      <Cart/>
      </CartProvider>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
