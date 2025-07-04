import { Link } from 'react-router-dom';
import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Navbar({cartCount}) {
  return (
    <nav className="bg-white shadow-sm">
      {/* Top Bar */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-6 py-4 gap-y-4 lg:gap-y-0">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10972/10972490.png"
            alt="FizGymBase Logo"
            className="h-10 w-10 object-cover"
          />
          <span className="text-3xl font-extrabold text-gray-900 tracking-tight">FizGymBase</span>
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-md bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search gyms, trainers, or locations..."
            className="w-full px-4 py-2 text-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition duration-300">
            Search
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6 text-gray-700 text-xl">
          <Link to="/cart" className="relative">
  <FaShoppingCart className="text-black hover:text-yellow-400 text-2xl" />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-2">
      {cartCount}
    </span>
  )}
</Link>

          <Link to="/profile" className="text-black hover:text-yellow-500 transition">
            <FaUserCircle />
          </Link>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="flex justify-center border-t border-gray-200 py-3 bg-white">
        <ul className="flex gap-10 text-base font-semibold text-gray-800 tracking-wide">
          {[
            { path: '/', label: 'Home' },
            { path: '/store', label: 'Store' },
            { path: '/blogs', label: 'Blogs' },
            { path: '/about', label: 'About' },
            { path: '/contact', label: 'Contact' },
          ].map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400"
              >
                <span className="pb-1 border-b-2 border-transparent group-hover:border-yellow-400 group-hover:scale-105 transition-all duration-300 ease-in-out">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Promotional Banner */}
      <section className="flex items-center justify-center p-4 bg-[url('https://img.freepik.com/premium-vector/abstract-geometric-blue-wide-background-banner-layout-design-blue-abstract-vector-long-banner-minimal-background-with-copy-space-text-modern-abstract-gradient-light-blue-banner-background_249611-12868.jpg')] bg-cover bg-center text-white text-sm md:text-base font-semibold tracking-wide mt-2">
        <p className="text-center font-bold">
          🎉 <span className="font-bold">Monthly+ Offer:</span> Get <span className="text-yellow-300">25% off</span> and unlock access to 1000+ gyms!
          <Link
            to="/offers"
            className="ml-4 inline-block bg-black text-white px-4 py-2 rounded-md font-bold hover:bg-white hover:text-black border border-black transition duration-300"
          >
            Find Out More
          </Link>
        </p>
      </section>
    </nav>
  );
}

export default Navbar;
