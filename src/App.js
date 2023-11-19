import './App.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
  <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
  </div>
  );
}
function Header() {
  return (
    <header className='header'>
    <h1>My Fast Pizza Shop</h1>
    </header>
  )
}
const Menu = () =>{
  return (
    <main className='menu'>
      <h2>Menu</h2>
    <div className='pizzas'>
    <Pizza 
    name={pizzaData[0].name}
    ingredients={pizzaData[0].ingredients}
    price={pizzaData[0].price}
    photoName={pizzaData[0].photoName}
    soldOut={pizzaData[0].soldOut}
    />
    <Pizza
     name={pizzaData[1].name}
     ingredients={pizzaData[1].ingredients}
     price={pizzaData[1].price}
     photoName={pizzaData[1].photoName}
     soldOut={pizzaData[1].soldOut}
    />
    <Pizza
     name={pizzaData[2].name}
     ingredients={pizzaData[2].ingredients}
     price={pizzaData[2].price}
     photoName={pizzaData[2].photoName}
     soldOut={pizzaData[2].soldOut}
    />
      <Pizza
     name={pizzaData[3].name}
     ingredients={pizzaData[3].ingredients}
     price={pizzaData[3].price}
     photoName={pizzaData[3].photoName}
     soldOut={pizzaData[3].soldOut}
    />
      <Pizza
     name={pizzaData[4].name}
     ingredients={pizzaData[4].ingredients}
     price={pizzaData[4].price}
     photoName={pizzaData[4].photoName}
     soldOut={pizzaData[4].soldOut}
    />
      <Pizza
     name={pizzaData[5].name}
     ingredients={pizzaData[5].ingredients}
     price={pizzaData[5].price}
     photoName={pizzaData[5].photoName}
     soldOut={pizzaData[5].soldOut}
    />
    </div>
    </main>
  );
};
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}/>
      <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
      <span>{props.soldOut}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      {isOpen && (
        <footer className='footer'> 
          <p>{new Date().toLocaleTimeString()}. We are currently Open</p>
        </footer>
      )}
    </div> 
  )
}

export default App;
