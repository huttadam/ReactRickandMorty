import React from 'react'

let available_drinks = ["beer", "soda", "juice", "yogurt-variety", "coffee"]

function RandomNumber() {
  return Math.floor(Math.random() * 1000);
}

function drinks(arr) {
  let randomDrink = Math.floor(arr.length * Math.random())
  return arr[randomDrink];
}

let someCoolNavbar = <nav>
    <h1>あそぶ</h1>
    <h3> 
      <nav>
        <button>Home</button>
        <button>About</button>
        <button>Career</button>
        <button>Blog</button>
      </nav>
    </h3>
</nav>

let someCoolFooter = <footer>
    <h4>Copyright {new Date().getUTCFullYear()}</h4>
</footer>

const Stuff = () => {
  return (
  <div className="App" style ={{backgroundColor: 'purple', color: 'white', fontFamily: "fantasy" }}>
  {someCoolNavbar}
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
  {someCoolFooter}
</div>
    
  )
}


export default Stuff
