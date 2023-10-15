import React from 'react'
import Hero from './Hero'
import Specials from './Specials'

const Main = () => {
  return (
    <main>
        <Hero />
        <Specials />
          <section className='testimonials'>
                Testimonials
        </section>
           <section className='testimonials'>
                About
        </section>
    </main>
  )
}

export default Main