import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import eyeIcon from '../assets/icons/eye.png';
import cartIcon from '../assets/icons/shopping-cart.png';
import iconItem from '../assets/icons/pizza-icon-item.png';
import './PizzaCard.css'; // Importa el archivo CSS

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <hr />
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index} className="pizza-card-ingredients">
            <img src={iconItem} alt="icon item" className="ingredient-icon" /> {ingredient}
          </li>
        ))}
      </ul>
      <hr />
      <h2>${pizza.price}</h2>
      <div className="button-container">
        <Link to={`/pizza/${pizza.id}`} className="button">
          Ver más <img src={eyeIcon} alt="eye icon" className="button-icon" />
        </Link>
        <button className="button" onClick={() => addToCart(pizza)}>
          Añadir <img src={cartIcon} alt="cart icon" className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
