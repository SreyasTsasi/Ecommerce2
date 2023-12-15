const express = require('express');
const router = express.Router();

// Example product data (Replace this with your actual product data)
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    image: ''
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    image: 
  },
  // Add more products as needed
];

router.get('/products', (req, res) => {
  res.json(products);
});

module.exports = router;
