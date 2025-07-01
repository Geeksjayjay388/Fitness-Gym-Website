import { FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa';

function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-[url('https://wallpapercave.com/wp/wp12424948.jpg')] bg-cover bg-center px-6 relative">
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60  bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="text-center space-y-8 z-10 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Work Out Your Way
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-white">
          Thousands of gyms. Zero contracts. Endless possibilities.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-[300px]">
            <input
              type="text"
              maxLength={8}
              placeholder="Enter postcode or location"
              className="w-full px-10 py-3 rounded-lg border border-gray-300 shadow focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white"
            />
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-300">
            <FaSearchLocation />
            Find Gyms
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
