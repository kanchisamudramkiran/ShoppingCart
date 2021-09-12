const express = require('express')
const products = require('./data/products')

const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/',(req,res) =>{
    res.send('API is running.....')
})


app.get('/api/products',(req,res) =>{
  res.json(products);
})


app.get('/api/products/:id',(req,res) =>{
    const product = products.find(p=> p._id === req.params.id)
  
    res.json(product);
  })
  

app.listen(5000, console.log('Server is running on port 5000'))