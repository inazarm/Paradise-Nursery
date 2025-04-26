import React from 'react';
import PlantCard from '../components/PlantCard';
import { useCart } from '../context/CartContext';
import '../styles/ProductListingPage.css';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 20,
    category: 'Air Purifying',
    image: '/images/snake-plant.jpeg',
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 25,
    category: 'Flowering',
    image: '/images/peace-lily.jpeg',
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 15,
    category: 'Hanging',
    image: '/images/spider-plant.jpg',
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 40,
    category: 'Large Plants',
    image: '/images/fiddle-leaf-fig.jpg',
  },
  {
    id: 5,
    name: 'Aloe Vera',
    price: 18,
    category: 'Medicinal',
    image: '/images/aloe-vera.jpg',
  },
  {
    id: 6,
    name: 'Pothos',
    price: 22,
    category: 'Vining Plants',
    image: '/images/pothos.jpeg',
  },
];

const ProductListingPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-page">
      <h2>Our Plants</h2>
      <div className="plant-grid">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
