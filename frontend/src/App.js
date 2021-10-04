import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './views/HomeScreen'
import ProductScreen from './views/ProductScreen'
import CartScreen from './views/CartScreen'
import LoginScreen from './views/LoginScreen'
import RegisterScreen from './views/RegisterScreen'
import ProfileScreen from './views/ProfileScreen'
import ShippingScreen from './views/ShippingScreen'
// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });

 const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
      <h1>Welcome to Shopping cart</h1>
  {/* <HomeScreen/> */}
  <Route path='/product/:id' component={ProductScreen}/>
  <Route path='/shipping' component={ShippingScreen} />
  <Route path='/cart/:id?' component={CartScreen}/>
  <Route path='/login' component={LoginScreen} exact/>
  <Route path='/register' component={RegisterScreen} exact/>
  <Route path='/profile' component={ProfileScreen} exact/>
  {/* <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          /> */}
          <Route path='/' component={HomeScreen} exact/>
  
      </Container>
    </main>
      <Footer />
    </Router>
  )
}

export default App;
