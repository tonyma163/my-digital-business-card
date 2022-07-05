import React from 'react'

//import other js page
import Info from "./Info.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"

export default function Card() {
  return (
    <div className="cardGroup">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}
