import React from 'react'
import RestFoodImg from './../assets/images/restauranfood.png'
import { Button } from '@mui/material'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="wrapper">
            <div className="left">
                <h1>Little Lemon<br/><span>Chicago</span></h1>
                <p className='light-gray'>We are a family owned Mediterranean<br/> 
                restaurant focused on traditional<br/> recipes served with a modern twist.</p>
                <p>
                   <button className='primary-button'>Reserve a table</button>
                   <Button variant='contained'>Hello</Button>
                </p>
            </div>
            <div className="right">
                <img src={RestFoodImg} height="380px" width="auto"
                 alt="Waiter with fresh made Bruschetta's" />
            </div>
        </div>
    </section>
  )
}

export default Hero