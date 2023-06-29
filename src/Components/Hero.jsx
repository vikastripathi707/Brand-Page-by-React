import React from 'react'
import "../Components/Hero.css"
const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="https://i.ibb.co/qnxTZ3q/amazon.png" alt="amazon" border="0" />
           <img src="https://i.ibb.co/V9mXkM6/flipkart.png" alt="flipkart" border="0" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://i.ibb.co/C6d1FJV/hero-image.png" alt="hero-im" border="0" />
      </div>
    </main>
  )
}

export default Hero
