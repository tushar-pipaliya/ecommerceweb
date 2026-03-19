import React from 'react'
import FilterBar from './filterBar/FilterBar'
import AllProduct from './allProduct/AllProduct'

function Product() {
  return (
    <div className=' bg-gray-50 '>
    <div className='max-w-7xl mx-auto px-4"'>
      <h2 className="text-3xl font-bold text-center pt-3 text-gray-800 mb-8 ">Our Products</h2>

      <AllProduct />
    </div>
    </div>

  )
}

export default Product
