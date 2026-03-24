import React from 'react'
import { Route, Routes } from 'react-router-dom' // ખાતરી કરો કે react-router-dom છે
import Header from './components/header/Header'
import LayOut from './components/layout/LayOut'
import Product from './components/product/Product'
import ViewDetails from './components/viewDetails/ViewDetails' // ViewDetails import કરો

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LayOut />} />
        <Route path='/product' element={<Product />} />

        <Route path="/view-details/:id" element={<ViewDetails />} />
      </Routes>
    </div>
  )
}

export default App