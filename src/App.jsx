import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Carts } from './pages/Carts'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/carts' element={<Carts />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
