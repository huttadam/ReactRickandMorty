import React from 'react'

let available_drinks = ["beer", "soda", "juice", "yogurt-variety", "coffee"]

function RandomNumber() {
  return Math.floor(Math.random() * 1000);
}

function drinks(arr) {
  let randomDrink = Math.floor(arr.length * Math.random())
  return arr[randomDrink];
}


const Stuff = () => {
  return (
    <>
    <p>Hello world!</p>
    <p>Todays magic number is {RandomNumber()}</p>
    <ul>
      {available_drinks.map((drink) => {
        return <li key = {"id-"+drink}>
          {drink}
        </li>
      })}
    </ul>
    {drinks(available_drinks)}
  </>
    
  )
}


export default Stuff
