
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cors from 'cors'
// import products from './data/products'
// const products = require('./data/products')

dotenv.config()
connectDB()

const app = express()


app.use(cors({
  origin: '*'
}));

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)
app.use(errorHandler)

app.use((err,req,res,next) =>{

const statusCode = res.statusCode === 200?500 : res.statusCode

res.statusCode(statusCode)
res.json({
  message: err.message,
  stack: process.env.NODE_ENV === 'production'?null:err.stack
})
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/',(req,res) =>{
    res.send('API is running.....')
})



  

app.listen(5000, console.log('Server is running on port 5000'))