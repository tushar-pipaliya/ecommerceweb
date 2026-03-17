import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Header() {
  return (
    <>
     <header className="flex items-center justify-between py-5 px-8 bg-white shadow-sm">

    <div className="text-xl font-bold text-blue-600">ShopZone</div>

    <nav className="flex gap-6 text-gray-600 font-medium">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">Products</a>
    </nav>

      <LocalMallIcon/>
  </header>
    </>
  )
}

export default Header
