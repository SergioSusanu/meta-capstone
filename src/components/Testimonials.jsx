import React from 'react'

const TestimonialData = [{
    id:1,
    name: "Maria Sanchez",
    stars: 4.5,
   
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},{},{},{}]

const Testimonials = () => {
  return (
        <section className='testimonials'>
            <div className="wrapper">
                <div className="row testimonials-header">
                    <h2>What people say about us!</h2>
                   
                </div>
                <div className="row testimonials-cards">
                    {/* {FoodItems.map((item) => {
                        return <FoodItemCard key={item.id} data={item} />
                    })} */}
                </div>
            </div>
      </section>
  )
}

export default Testimonials