import React from 'react'
import StarIcon from './../assets/images/star.svg'

const TestimonialCard = ({data}) => {

  let Stars =[];

  for (let index = 0; index < data.rating; index++) {
    Stars.push(<img src={StarIcon} />)
  }

  return (
    <article className='testimonial-card'>
       <img src={data.img} alt={data.name} width="150px" height="150px"/>
       <div className='testimonial-info'>
            <div className='testimonial-meta'>
                <h3 className='lead-text primary-green'>{data.name}</h3>
                <div className='rating-container'>
                  {Stars}
                </div>
            </div>
            <p className=' primary-green'>"{data.description}"</p>
       </div>
    </article>
  )
}

export default TestimonialCard