import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

export const recipecontext  = createContext(null);
const Recipeprovider = (props) => {
    const [data,setdata]  = useState([
{
  id: 1,
  title: "Classic Margherita Pizza",
  chef:"ram",
  ingr: [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste"
  ],
  inst: [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
  ],

desc:"Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
  url: "https://cdn.dummyjson.com/recipe-images/1.webp",
 category:"Dinner"
},
{
    id: 2,
    title: "Spicy Korean Fire Noodles",
    chef: "Jisoo Kim",
    ingr: [
      "Instant ramen noodles",
      "Korean chili paste (gochujang)",
      "Soy sauce",
      "Sugar",
      "Garlic",
      "Green onions",
      "Boiled egg"
    ],
    inst: [
      "Boil the noodles until cooked.",
      "In a pan, mix gochujang, soy sauce, sugar, and garlic.",
      "Add cooked noodles and stir-fry for 2-3 minutes.",
      "Top with chopped green onions and a boiled egg.",
      "Serve immediately."
    ],
    desc: "A viral spicy Korean ramen dish with bold flavors and simple steps.",
    url: "https://cdn.dummyjson.com/recipe-images/2.webp",
    category: "dinner"
  },
  {
    id: 3,
    title: "Dalgona Coffee",
    chef: "Amrita Singh",
    ingr: [
      "2 tbsp instant coffee",
      "2 tbsp sugar",
      "2 tbsp hot water",
      "Milk",
      "Ice cubes"
    ],
    inst: [
      "Whip coffee, sugar, and hot water until light and fluffy.",
      "Add ice cubes to a glass and pour in cold milk.",
      "Spoon whipped coffee mixture on top.",
      "Stir before drinking and enjoy."
    ],
    desc: "The internet-famous whipped coffee sensation from quarantine days.",
    url: "https://cdn.dummyjson.com/recipe-images/3.webp",
    category: "breakfast"
  },
  {
    id: 4,
    title: "Butter Garlic Naan Tacos",
    chef: "Raghav Mehta",
    ingr: [
      "Mini naan breads",
      "Garlic butter",
      "Paneer or chicken tikka",
      "Onions",
      "Mint chutney",
      "Yogurt sauce"
    ],
    inst: [
      "Heat naan breads and brush with garlic butter.",
      "Place tikka filling inside each naan.",
      "Top with onions, chutney, and yogurt sauce.",
      "Fold and serve like tacos."
    ],
    desc: "A fusion street-food hit combining Indian naan with taco fun.",
    url: "https://cdn.dummyjson.com/recipe-images/4.webp",
    category: "dinner"
  },
  {
    id: 5,
    title: "Mini Pancake Cereal",
    chef: "Sara Khan",
    ingr: [
      "Pancake batter",
      "Butter",
      "Syrup or honey",
      "Fresh fruits",
      "Milk (optional)"
    ],
    inst: [
      "Make tiny pancakes using a squeeze bottle on a pan.",
      "Cook until golden and set aside.",
      "Serve in a bowl with syrup and fruits.",
      "Add milk for cereal-style experience."
    ],
    desc: "Fun-sized mini pancakes served in a cereal bowl — viral breakfast trend.",
    url: "https://cdn.dummyjson.com/recipe-images/5.webp",
    category: "breakfast"
  },
  {
    id: 6,
    title: "Tandoori Maggi",
    chef: "Vikrant Chauhan",
    ingr: [
      "Maggi noodles",
      "Tandoori masala",
      "Butter",
      "Onions",
      "Capsicum",
      "Cheese (optional)"
    ],
    inst: [
      "Cook Maggi noodles with a little less water.",
      "Sauté onions and capsicum in butter.",
      "Add tandoori masala and cooked noodles.",
      "Mix well and serve hot with cheese topping."
    ],
    desc: "A spicy street-style twist to regular Maggi noodles with tandoori flair.",
    url: "https://cdn.dummyjson.com/recipe-images/6.webp",
    category: "breakfast"
  }
    ]);
useEffect(()=>{
setdata(JSON.parse(localStorage.getItem("recipes"))||[]);
},[])
  return (
    <recipecontext.Provider value={ [data,setdata] }>
{props.children}

    </recipecontext.Provider>
  )
}

export default Recipeprovider
