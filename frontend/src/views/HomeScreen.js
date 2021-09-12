import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
// import  products from '../products'
import  Product from '../components/Product'
const HomeScreen = () => {
const [products, setProducts] = useState([])
 useEffect(async() => {
    const {data} = await axios.get('http://localhost:5000/api/products')
setProducts(data)
    //  return () => {
    //      cleanup
    //  }
 }, [])
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
