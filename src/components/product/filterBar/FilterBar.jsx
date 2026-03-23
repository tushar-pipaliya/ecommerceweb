import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const FilterBar = ({ onFilterChange }) => {


  return (
    <div className='bg-white p-3 shadow-md rounded-lg mb-5 flex justify-between'>
      {/* SearchBar ne function pass karyu */}
      <div className="">
        <div className="relative flex items-center border border-gray-300 rounded-lg w-full max-w-[400px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 outline-none rounded-lg focus:ring-2 focus:ring-blue-500"

            onChange={(e) => onFilterChange('search', e.target.value)}
          />

        </div>
      </div>
      <div className=' flex gap-5'>
        <div>
          <select onChange={(e) => onFilterChange('category', e.target.value)}
            className=' flex items-center border outline-none  p-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500'

          >
            <option value="All Categories">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>

        </div>
        <div>
          <select onChange={(e) => onFilterChange('sort', e.target.value)}
            className=' flex items-center border outline-none  p-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500'
          >
            <option value="">Sort By</option>
            <option value="High">Price: Low to High</option>
            <option value="Low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>

  )
}

export default FilterBar