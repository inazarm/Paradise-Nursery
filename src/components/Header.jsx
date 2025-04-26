import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();
  const location = useLocation();

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Paradise Nursery</h1>
      <nav style={styles.nav}>
        {location.pathname !== '/' && (
          <Link to="/" style={styles.link}>Home</Link>
        )}
        {location.pathname !== '/products' && (
          <Link to="/products" style={styles.link}>Products</Link>
        )}
        {location.pathname !== '/cart' && (
          <Link to="/cart" style={styles.link}>
            <FaShoppingCart />
            <span style={styles.cartCount}>{cartCount}</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  logo: {
    margin: 0,
    fontSize: '24px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    position: 'relative',
  },
  cartCount: {
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
    position: 'absolute',
    top: '-10px',
    right: '-10px',
  },
};

export default Header;
