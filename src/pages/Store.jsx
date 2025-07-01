import { FaDumbbell, FaFemale, FaBoxOpen } from 'react-icons/fa';
import Equipments from '../components/Equipments';
function Store() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('https://wallpapercave.com/wp/wp8834031.jpg')] bg-cover bg-center text-center py-64 mb-16 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">
            SHOPPING GYM, FITNESS & SPORT
          </h1>
          <p className="mt-6 text-2xl text-white font-semibold">
            Enjoy exclusive discounts when you use a promo code at checkout.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-0 pb-20">
        {[
          {
            title: "Men's Gear",
            icon: <FaDumbbell className="text-4xl text-blue-600 mx-auto mb-4" />,
            image:
              "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg=",
            description: "Top performance wear and equipment designed for the modern man’s workout routine.",
          },
          {
            title: "Women’s Essentials",
            icon: <FaFemale className="text-4xl text-pink-500 mx-auto mb-4" />,
            image:
              "https://www.auraleisure.ie/wp-content/uploads/2023/03/john-arano-h4i9G-de7Po-unsplash-1-scaled.jpg",
            description: "Stylish and supportive activewear that moves with confidence, strength, and grace.",
          },
          {
            title: "Accessories",
            icon: <FaBoxOpen className="text-4xl text-purple-500 mx-auto mb-4" />,
            image:
              "https://www.performbetter.com/product_images/uploaded_images/kettlebellsonrack-420x536.jpg",
            description: "From kettlebells to yoga mats—find must-have gear to elevate any workout session.",
          },
          
        ].map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              {card.icon}
              <h2 className="text-2xl font-bold mb-2 text-black">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <Equipments />
      </section>
    </main>
  );
}

export default Store;
