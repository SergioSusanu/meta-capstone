import React from 'react'
import RestFoodImg from './../assets/images/restauranfood.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="wrapper">
            <div className="left">
                <h1>Little Lemon<br/>Chicago</h1>
                <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a table</button>
            </div>
            <div className="right">
                <img src={RestFoodImg} alt="Waiter with fresh made Bruschetta's" />
            </div>
        </div>
    </section>
  )
}

export default Hero