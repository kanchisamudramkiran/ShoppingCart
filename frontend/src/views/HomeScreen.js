import axios from 'axios'
import React,{useState, useEffect, useDispatch} from 'react'
import {Row, Col} from 'react-bootstrap'
// import  products from '../products'
import  Product from '../components/Product'

import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
 const dispatch = useDispatch();
 const [products, setProducts] = useState([])
 useEffect(() => {

 }, [])

// const [products, setProducts] = useState([])
//  useEffect(async() => {
//     const {data} = await axios.get('http://localhost:5000/api/products')
// setProducts(data)
   
//  }, [])
    return (
        <div>
            <h1>
                Latest Products
            </h1>
            <Row> 
            {products.map((product) => (

<Col key={product} sm={12} md={6} lg={4} xl={3}>
<Product product={product} />
</Col>
))} 
   </Row>
        </div>
    )
}

export default HomeScreen
