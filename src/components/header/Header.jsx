import React, { useContext } from 'react' // 1. useContext import karo
import { Link, NavLink } from 'react-router-dom' // Check: react-router-dom hovu joie
import LocalMallIcon from '@mui/icons-material/LocalMall'
import Badge from '@mui/material/Badge' // 2. Badge import karo
import { CartContext } from '../../contexts/ContextData' // 3. Context import karo

const links = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/product' },
]

function Header() {
  // 4. Context mathi cartItems melvo
  const { cartItems } = useContext(CartContext);

  const totalBadgeCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (

    <header className="flex items-center justify-between py-5 px-8 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">ShoppingZone</Link>
      </div>

      <div className="flex gap-6 font-medium">
        {links.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Shopping Mall Icon sathe Count Badge */}
      <NavLink 
        to="/addtocart"
        className={({ isActive }) => 
          isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
        }
      >
        {/* 5. Badge ma cartItems.length muki do */}
        <Badge badgeContent={totalBadgeCount} color='primary'>
          <LocalMallIcon className="cursor-pointer" />
        </Badge>
      </NavLink>
    </header>
  )
}

export default Header