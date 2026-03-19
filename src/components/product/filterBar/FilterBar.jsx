import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const FilterBar = ({ onSearch, onCategory }) => {

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value)

  }


  const handleChange = (event) => {
    setCategory(event.target.value);
    onCategory(event.target.value)
  }
  console.log(category, 'category')
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
            placeholder="Search products..."
            value={search}
            className="w-full pl-10 pr-4 py-2 outline-none rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className=''>
        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
          className=' flex items-center border outline-none  p-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500'
        >
          <option>All Categories</option>
          <option value={"men's clothing"}>Men's clothing</option>
          <option value={"jewelery"}>Jewelery</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"women's clothing"}>women's clothing</option>
        </select>
      </div>
    </div>

  )
}

export default FilterBar
