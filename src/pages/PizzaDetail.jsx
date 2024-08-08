import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import pizzasData from '../data/pizzas.json';
import { CartContext } from '../context/CartContext';

const PizzaDetail = () => {
  const { id } = useParams();
  const pizza = pizzasData.find((p) => p.id === id);
  const { addToCart } = useContext(CartContext);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} className="pizza-detail-image" />
      <div className="pizza-detail-info">
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>Precio: ${pizza.price}</p>
        <button className="button" onClick={() => addToCart(pizza)}>
          Añadir
        </button>
      </div>
    </div>
  );
};

export default PizzaDetail;
