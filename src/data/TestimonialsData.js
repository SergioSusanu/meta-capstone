import {useContext} from 'react'
import {ImagesPathContext} from './InitialDataProvider'

const TestimonialsData = () => {

    const { imagesPath } = useContext(ImagesPathContext);

    const TestimonialItems = [
      {
        id: 1,
        name: "Tamika Jakcson",
        rating: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt",
        img: imagesPath + "test3.png",
      },

      {
        id: 2,
        name: "Anthony Clifton",
        rating: 4,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: imagesPath + "test2.png",
      },
      {
        id: 4,
        name: "Maria Sanchez",
        rating: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        img: imagesPath + "test1.png",
      },
      {
        id: 4,
        name: "Brandon Ming",
        rating: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: imagesPath + "test4.png",
      },
    ];

    return  TestimonialItems;
}


export default TestimonialsData