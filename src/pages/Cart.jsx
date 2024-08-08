import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carro de Compras</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <h3 className='cart-item-name'>{item.name}</h3>            
            <p>Precio: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            <p>Total: ${item.price * item.quantity}</p>
            
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total del pedido: ${totalPrice}</p>
        <Link to="/" className="button">
          Ir a Pagar
        </Link>
      </div>
    </div>
  );
};

export default Cart;
