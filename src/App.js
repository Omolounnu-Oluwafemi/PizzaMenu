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
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <main className='menu'>
      <h2> OUR Menu</h2>
      { numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All from one stone oven, all organic, all delicious
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ) )}
        </ul>
      </>
      ): (
        <p> we are still working on our Menu. Please come back later" </p>
          )}
    </main>
  );
};
function Pizza({pizzaObj}) {

  if (pizzaObj.soldOut) return null;
  
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
        <footer className='footer'> 
        { isOpen ? <Order closeHour={closeHour} openHour={openHour}/>
           : (
            <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00 </p>
          )
        };
        </footer>
  )
}

function Order({closeHour, openHour}) {
  return (
    <div className='order'>
        <p> We are open from {openHour}:00 to {closeHour}:00. Come visit us or order online </p>
        <button className='btn'>Order</button>
    </div> 
  )
}

export default App;
