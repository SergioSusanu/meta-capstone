import React from 'react'
import FoodItemCard from './FoodItemCard'

const imagesPath = "./assets/images/"

const FoodItems = [{
    id: 1,
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img: imagesPath + "greeksalad.png",
},{id:2},{id:3}]

const Specials = () => {
  return (
      <section className='specials'>
            <div className="wrapper">
                <div className="row">
                    <h2>This week's specials</h2>
                    <button>Online Menu</button>
                </div>
                <div className="row">
                    {FoodItems.map((item) => {
                        return <FoodItemCard key={item.id} data={item} />
                    })}
                </div>
            </div>
      </section>
  )
}

export default Specials