import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
// import  products from '../products'
import  Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
 const dispatch = useDispatch();
//  const [products, setProducts] = useState([])
 const productList = useSelector(state => state.productList)
 const {loading, error, products} = productList;
 useEffect(() => {
    dispatch(listProducts())
 }, [dispatch])

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
        {loading ? (<Loader />) : error ?(  <Message variant='danger'>{error}</Message>) :  (   <Row> 
            {products.map((product) => (

<Col key={product} sm={12} md={6} lg={4} xl={3}>
<Product product={product} />
</Col>
))} 
   </Row>)
      }  </div>
    )
}

export default HomeScreen
