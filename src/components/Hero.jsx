import React from 'react'
import RestFoodImg from './../assets/images/restauranfood.png'
import { Button } from '@mui/material'
import CommonButton from './common/CommonButton'
import GridWrapper from './common/GridWrapper'

const Hero = () => {
  return (
    <section className='hero'>
        <GridWrapper>
            <div className="left">
                <h1>Little Lemon<br/><span>Chicago</span></h1>
                <p className='light-gray'>We are a family owned Mediterranean<br/> 
                restaurant focused on traditional<br/> recipes served with a modern twist.</p>
                <p>
                   {/* <button className='primary-button'>Reserve a table</button> */}
                  <CommonButton>Reserve a table</CommonButton>
                </p>
            </div>
            <div className="right">
                <img src={RestFoodImg} height="380px" width="auto"
                 alt="Waiter with fresh made Bruschetta's" />
            </div>
        </GridWrapper>
    </section>
  )
}

export default Hero