import {useContext} from 'react'
import { ImagesPathContext } from "../data/InitialDataProvider";

const SpecialsData = () => {

     const { imagesPath } = useContext(ImagesPathContext);

const FoodItems = [
  {
    id: 1,
    name: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img: imagesPath + "greeksalad.png",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img: imagesPath + "bruschetta.png",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: imagesPath + "lemondessert.png",
  },
];

  return  FoodItems;
}

export default SpecialsData