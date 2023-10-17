import React from 'react'
import MopedIcon from './../assets/images/moped.svg'

const FoodItemCard = ({data}) => {
  return (
    <article className='food-item-card'>
       <img src={data.img} alt={data.description} />
       <div className='food-item-info'>
            <div className='food-item-meta'>
                <h3  className='primary-green'>{data.name}</h3>
                <span  className='secondary-peach'>${data.price}</span>
            </div>
            <div><p  className='primary-green'>{data.description}</p></div>
           <div> <a href=""  className='primary-green lead-text'>Order a delivery &nbsp;
              <img src={MopedIcon} />
            </a>
            </div>
       </div>
    </article>
  )
}

export default FoodItemCard