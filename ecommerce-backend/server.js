

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const productRouter = require('./router'); 

app.use('/api', productRouter); 


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

];

app.get('/products', (req, res) => {
  res.json(products);
});

const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
