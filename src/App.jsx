import React from 'react'
import { Route, Routes } from 'react-router-dom' 
import Header from './components/header/Header'
import LayOut from './components/layout/LayOut'
// import Product from './components/product/Product'
import ViewDetails from './components/viewDetails/ViewDetails' // ViewDetails import કરો
import AddToCart from './components/addToCart/AddToCart'
import AllProduct from './components/product/allproduct/AllProduct'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LayOut />} />
        <Route path='/product' element={ <AllProduct />} />
        <Route path='/addtocart' element={<AddToCart/>}/>
        <Route path="/view-details/:id" element={<ViewDetails />} />
      </Routes>
    </div>
  )
}

export default App