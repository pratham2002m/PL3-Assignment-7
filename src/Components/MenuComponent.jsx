import React, { Component } from 'react'
import DishdetailComponent from './DishdetailComponent'
import PavBhaji from './images/Pav-bhaji.jpg'
import Sushi from './images/Sushi.jpg'
import Kebab from './images/kebab.jpg'
import PadThai from './images/Pad-Thai.jpg'

export default class MenuComponent extends Component {
  render() {
    let dishes = [
      {
        id : 1,
        name: "Pav Bhaji",
        image: PavBhaji,
        description: "Pav Bhaji is a flavorsome and hearty meal that has a delicious blend of spicy mixed vegetables, served alongside soft butter toasted dinner rolls, crunchy onions and lemon wedges. ",
        comments: [
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
        ]
      },
      {
        id : 2,
        name: "Sushi",
        image: Sushi,
        description: "Prepared with vinegared rice and a wide range of ingredients including seafood, vegetables, and sometimes fruits. Sushi tastes best when served with wasabi, pickled ginger, and soy sauce. A popular garnish for this dish is Daikon radish. ",
        comments: [
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
        ]
      },
      {
        id : 3,
        name: "Kebab",
        image: Kebab,
        description: "A dish popular across the Middle East, Kebabs are originally from Turkey. They consist of ground meat or seafood, fruits, and vegetables in some cases and are cooked on a skewer with a big fire underneath, just like a barbeque on the grill. ",
        comments: [
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
        ]
      },
      {
        id : 4,
        name: "Pad Thai",
        image: PadThai,
        description: "A common street food dish all over Thailand, Pad Thai is a stir-fried rice dish accompanied with noodles. This healthy dish is made with stir-frying noodles with eggs and tofu.",
        comments: [
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
          {
            comment: "Indian street food is my favorite kind of food. It’s something that I can eat everyday and still not get bored of it. EVER. I can’t handle too much spice but somehow my tolerance level magically increases when I go to India and eat from those street vendors!",
            author: 'Vijay',
            date: 'Dec 03,2021'
          },
        ]
      },
      
    ]

    function renderDish(dishes) {
      return <>
      <div className='mt-5'>

      <h2 className='mb-5'>Welcome To Street Restaurant</h2>

        
        {dishes.map((dish,index) => (
         
            <div key={index}>
              <DishdetailComponent dish={dish}></DishdetailComponent>
            </div>
        ))
        }
    
      </div>
      </>
    }

    return (
      <div>
        <div>
          {renderDish(dishes)}
        </div>
      </div>
    )
  }
}

