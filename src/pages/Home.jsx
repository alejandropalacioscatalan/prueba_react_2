import React from 'react';
import pizzasData from '../data/pizzas.json';
import PizzaCard from '../components/PizzaCard';

const Home = () => {
  const pizzas = pizzasData;

  return (
    <div className="home">
      <div className="hero">
        <img src="/src/assets/img/pizza-hero.jpg" alt="Pizza Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Pizzería Mamma Mia</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar.</p>
        </div>
      </div>
      <div className="pizza-container">
        <div className="pizza-list">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
