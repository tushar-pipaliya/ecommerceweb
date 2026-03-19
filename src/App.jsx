import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayOut from './components/mainLayOut/MainLayOut'
import Header from './components/header/Header'
import LayOut from './components/layout/LayOut'
import Product from './components/product/Product'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LayOut />} />
        <Route path='product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
