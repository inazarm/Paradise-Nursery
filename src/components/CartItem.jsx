import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
