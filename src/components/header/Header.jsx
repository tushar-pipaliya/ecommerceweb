import React from 'react'
import { Link, NavLink } from 'react-router'
import LocalMallIcon from '@mui/icons-material/LocalMall'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/product' }
]

function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-8 bg-white shadow-sm">
      <div className="text-2xl font-bold text-blue-600"><Link to="/">ShoppingZone</Link></div>

      <nav className="flex gap-6 font-medium">
        {links.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <LocalMallIcon className="cursor-pointer text-gray-700" />
    </header>
  )
}

export default Header