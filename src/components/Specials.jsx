import React, {useContext} from 'react'
import FoodItemCard from './FoodItemCard'
import SpecialsData from '../data/SpecialsData'


const Specials = () => {

   const FoodItems = SpecialsData();



  return (
      <section className='specials'>
            <div className="wrapper">
                <div className="row specials-header">
                    <h2 className='primary-green'>This week's specials</h2>
                    <button className='primary-button'>Online Menu</button>
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