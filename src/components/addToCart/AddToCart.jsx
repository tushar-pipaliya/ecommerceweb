import React, { useContext } from 'react';
import { CartContext } from '../../contexts/ContextData';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function AddToCart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 border-b pb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300">
            <p className="text-xl text-gray-400">Tamaru cart khali chhe. Shopping sharu karo!</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side: Items List */}
            <div className="flex-grow space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-24 h-24 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="ml-6 flex-grow">
                    <h4 className="font-bold text-gray-800 text-lg line-clamp-1">{item.title}</h4>
                    <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider">{item.category}</p>
                    <p className="text-xl font-black text-gray-900 mt-1">₹{item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      > <RemoveIcon fontSize="small" /> </button>
                      
                      <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      > <AddIcon fontSize="small" /> </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:w-80 h-fit sticky top-24">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
                <div className="space-y-4 border-b pb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Items</span>
                    <span className="font-bold">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-500 font-bold">FREE</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-6">
                  <span className="text-lg font-bold text-gray-800">Total Pay</span>
                  <span className="text-2xl font-black text-blue-600">₹{totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95 transition-all">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddToCart;