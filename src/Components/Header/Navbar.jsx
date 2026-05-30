import React, { use }  from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';



const Navbar = () => {

 const {user} = use(AuthContext)
 console.log(user);

  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ১. লোগো সেকশন */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
              Shop<span className="text-gray-800">Bae</span>
            </Link>
          </div>

          {/* ২. সার্চ বার (Middle - ডেক্সটপের জন্য) */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 text-sm text-gray-800 placeholder-gray-400 pl-4 pr-10 py-2 rounded-lg border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {/* Search Icon SVG */}
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ৩. নেভিগেশন লিংক এবং ইউজার অ্যাকশন */}
          <div className="flex items-center gap-6">
            {/* মেনু লিংকসমূহ */}
            <div className="hidden sm:flex items-center gap-5 text-sm font-medium text-gray-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/products" className="hover:text-blue-600 transition-colors">Shop</Link>
              <Link to="/login" className="hover:text-blue-600 transition-colors">Login</Link>
              <Link to="/register" className="hover:text-blue-600 transition-colors">Register</Link>
            </div>

            {/* কার্ট আইকন (Cart with Badge) */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              {/* Shopping Cart SVG */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* কার্ট কাউন্ট ব্যাজ (ডামি সংখ্যা ৩ দেওয়া হয়েছে, পরে স্টেট দিয়ে চেঞ্জ করবে) */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
                3
              </span>
            </Link>

            {/* লগইন বাটন */}
            
             
                {
                  user ? <Link
                  to="/login"
                  className="   text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Logout
                </Link> 
                :
                <Link
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Login
                </Link>
                }
            
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;