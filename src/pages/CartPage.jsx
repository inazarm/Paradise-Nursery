import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, cartTotal, cartCount } = useCart();

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <Link to="/products" className="continue-btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <p>Total Items: {cartCount}</p>
            <p>Total Cost: ${cartTotal.toFixed(2)}</p>
            <div className="cart-buttons">
              <Link to="/products" className="continue-btn">Continue Shopping</Link>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
