import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/src/assets/img/pizza-icon.png" alt="Pizzería Mamma Mia" />
        Pizzería Mamma Mia
      </Link>
      <Link to="/cart" className="navbar-cart">
        <img src="/src/assets/img/cart-icon.png" alt="Carrito de Compras" />
        <span>${totalPrice}</span>
      </Link>
    </nav>
  );
};

export default Navbar;

