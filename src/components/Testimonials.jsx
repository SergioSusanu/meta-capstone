import React from 'react'
import TestimonialsData from '../data/TestimonialsData'
import TestimonialCard from './TestimonialCard';


const Testimonials = () => {
    const TestimonialItems = TestimonialsData();
  return (
        <section className='testimonials'>
            <div className="wrapper">
                <div className="row testimonials-header">
                    <h2>What people say about us!</h2>                
                </div>
                <div className="row testimonials-cards">
                    {TestimonialItems.map((item) => {
                        return <TestimonialCard key={item.id} data={item} />
                    })}
                </div>
            </div>
      </section>
  )
}

export default Testimonials