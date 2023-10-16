import React from 'react'
import MopedIcon from './../assets/images/moped.svg'

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
            <button>Order a delivery &nbsp;
              <img src={MopedIcon} />
            </button>
       </div>
    </article>
  )
}

export default FoodItemCard