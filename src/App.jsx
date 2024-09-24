import './App.css'
import Products from './components/shopping/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProdDesc from './components/shopping/ProdDesc'
// import Header from './components/shopping/Header'
import Footer from './components/shopping/Footer'
import Cart from './gdgc/Cart'

function App() {

  return (
    <div>
      {/* <h1>Welcome to React</h1>
      <Products/> */}
      {/* <Router> */}
        {/* <Header/> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<Products/>} /> */}
          {/* <Route path='/products/:id' element={<ProdDesc/>} /> */}
        {/* </Routes> */}
        {/* <Footer/> */}
      {/* </Router> */}
      <Cart/>
    </div>
  )
}

export default App
