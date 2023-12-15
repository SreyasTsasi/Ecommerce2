// server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const productRouter = require('./router'); // Import the router

app.use('/api', productRouter); // Use the router with '/api' as a base path

// Example product data (Replace this with your actual product data)
const products = [
    {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    image: 'https://example.com/product1.jpg'
},
  {
      id: 2,
      name: 'Product 2',
      image: "./src/images/Ecommerc.jpg",
    price: 29.99,
  },
  // Add more products as needed
];

app.get('/products', (req, res) => {
  res.json(products);
});

const PORT = 5000; // Choose any port you prefer
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
