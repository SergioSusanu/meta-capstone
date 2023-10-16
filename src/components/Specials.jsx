import React from 'react'
import FoodItemCard from './FoodItemCard'

const imagesPath = "./assets/images/"

const FoodItems = [{
    id: 1,
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img: imagesPath + "greeksalad.png",
},{
    id:2,
    name: "Bruschetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img: imagesPath + "bruschetta.png",
},{
    id:3,
    name: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: imagesPath + "lemondessert.png",
}]

const Specials = () => {
  return (
      <section className='specials'>
            <div className="wrapper">
                <div className="row specials-header">
                    <h2>This week's specials</h2>
                    <button>Online Menu</button>
                </div>
                <div className="row specials-cards">
                    {FoodItems.map((item) => {
                        return <FoodItemCard key={item.id} data={item} />
                    })}
                </div>
            </div>
      </section>
  )
}

export default Specials