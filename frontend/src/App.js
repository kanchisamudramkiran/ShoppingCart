import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './views/HomeScreen'
import ProductScreen from './views/ProductScreen'

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
  <Route path='/' component={HomeScreen} exact/>
  <Route path='/product/:id' component={ProductScreen}/>
  
      </Container>
    </main>
      <Footer />
    </Router>
  )
}

export default App;
