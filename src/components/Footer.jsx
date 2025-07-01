import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About FizGymBase</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            FizGymBase connects fitness lovers with 1000+ gyms across the country.
            No contracts, no limits — just your workout, your way.
          </p>
        </div>

        {/* Locations */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Popular Locations</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Nairobi, Kenya</li>
            <li>Kampala, Uganda</li>
            <li>Dar es Salaam, Tanzania</li>
            <li>Accra, Ghana</li>
            <li>Cape Town, South Africa</li>
          </ul>
        </div>

        {/* Payments */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Visa / MasterCard</li>
            <li>Mpesa & Airtel Money</li>
            <li>PayPal</li>
            <li>Crypto (BTC / ETH)</li>
            <li>Bank Transfer</li>
          </ul>
        </div>

        {/* Support & Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Help & Support</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Contact Support</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400">📘</a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400">📸</a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-400">🐦</a>
          </div>
        </div>
      </section>

      
       <div className="flex pt-6 gap-4 justify-center">
  <Link to="/login">
    <button className="p-3 px-5 bg-white text-black border-2 border-black font-bold hover:text-white hover:bg-black">
      Log in
    </button>
  </Link>

  <Link to="/register">
    <button className="p-3 px-5 bg-white text-black border-2 border-black font-bold hover:text-white hover:bg-black">
      Register
    </button>
  </Link>
</div>

<div className="text-center mt-10 text-sm text-gray-400">
  &copy; {new Date().getFullYear()} FizGymBase. All rights reserved.
</div>
    </footer>
  );
}

export default Footer;
