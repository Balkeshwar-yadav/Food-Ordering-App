import React from 'react'
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Foods from './components/Foods'
import Contact from './components/Contact'
import Cart from './components/Cart'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/foods' element={<Foods></Foods>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
   </Router>
  )
}

export default App