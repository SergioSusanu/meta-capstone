import React from 'react'

const FoodItemCard = ({data}) => {
  return (
    <article className='food-item-card'>
       <img src={data.img} alt={data.description} />
       <div className='food-item-info'>
            <div className='food-item-meta'>
                <h3>{data.name}</h3>
                <span>${data.price}</span>
            </div>
            <p>{data.description}</p>
            <button>Order a delivery</button>
       </div>
    </article>
  )
}

export default FoodItemCard