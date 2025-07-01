import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function Equipments() {
  const [equipments] = useState([
    
  {
    id: 1,
    name: 'Adjustable Dumbbells',
    image: 'https://hips.hearstapps.com/hmg-prod/images/bowflex-schlinger-6786dbe18ccd4.png?crop=1.00xw:0.959xh;0,0.0163xh&resize=980:*',
    rating: 4,
    description: 'Durable, space-saving dumbbells perfect for strength training at home.',
    price: '$60.00',
  },
  {
    id: 2,
    name: 'Flat Weight Bench',
    image: 'https://www.afrofit.co.ke/cdn/shop/files/rn-image_picker_lib_temp_124a18a1-2728-4cd2-9e4c-ed3bbfc75347.jpg?v=1749189458',
    rating: 5,
    description: 'Heavy-duty bench for all your pressing and core workouts.',
    price: '$120.00',
  },
  {
    id: 3,
    name: 'Resistance Bands Set',
    image: 'https://www.atreq.com/cdn/shop/products/ATREQProResistanceTubeSet.jpg?v=1604996822',
    rating: 4,
    description: 'Multi-band set with various tension levels — perfect for travel workouts.',
    price: '$25.00',
  },
  {
    id: 4,
    name: 'Kettlebell Set',
    image: 'https://www.performancehealth.com/media/catalog/product/k/e/kettleworx_family_2000px.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
    rating: 4,
    description: 'Heavy-duty kettlebells for cardio and resistance training.',
    price: '$48.00',
  },
  {
    id: 5,
    name: 'Pull-Up Bar',
    image: 'https://m.media-amazon.com/images/I/61yH0upO42L._UF1000,1000_QL80_.jpg',
    rating: 5,
    description: 'Door-mounted pull-up bar to build upper body strength at home.',
    price: '$35.00',
  },
  {
    id: 6,
    name: 'Medicine Ball 10lb',
    image: 'https://www.smai.com/cdn/shop/files/WallBall10LB1.jpg?v=1743742670',
    rating: 4,
    description: 'Textured grip med ball for explosive core and conditioning exercises.',
    price: '$39.99',
  },
  {
    id: 7,
    name: 'Foam Roller',
    image: 'https://cdn.webshopapp.com/shops/281654/files/463273064/500x500x2/yoga-grid-foam-roller.jpg',
    rating: 5,
    description: 'High-density roller for muscle recovery, mobility, and self-massage.',
    price: '$20.00',
  },
  {
    id: 8,
    name: 'Adjustable Jump Rope',
    image: 'https://rdxsports.com/cdn/shop/products/c5_skipping_jump_rope_7_f3345c95-8564-4790-a073-e01fde469382.jpg?v=1700133452',
    rating: 4,
    description: 'Fast-turning jump rope with length adjustment for any athlete.',
    price: '$18.00',
  },
  {
    id: 9,
    name: 'Yoga Mat',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREv9EEaQ9nWChjtWGtMinYw1I4j9yyvaTWuw&s',
    rating: 5,
    description: 'Non-slip yoga mat with extra padding and eco-friendly design.',
    price: '$20.00',
  },
  {
    id: 10,
    name: 'Battle Ropes',
    image: 'https://as2.ftcdn.net/v2/jpg/03/21/02/41/1000_F_321024184_qQP8tQJB67aawU0CSgsm1qSjhCDVPNR6.jpg',
    rating: 4,
    description: 'Power ropes for full-body high-intensity workouts and grip training.',
    price: '$70.00',
  },
  {
    id: 11,
    name: 'Ab Wheel Roller',
    image: 'https://thecosybeddingkenya.co.ke/wp-content/uploads/2020/05/Powerstretch-AB-Wheel-Roller-Exercise-Fitness8.jpg',
    rating: 4,
    description: 'Strengthen your core and build stability with this compact roller.',
    price: '$22.00',
  },
  {
    id: 12,
    name: 'Adjustable Bench',
    image: 'https://www.afrofit.co.ke/cdn/shop/files/rn-image_picker_lib_temp_124a18a1-2728-4cd2-9e4c-ed3bbfc75347.jpg?v=1749189458',
    rating: 5,
    description: 'Incline/flat bench built for serious lifters — rock-solid construction.',
    price: '$185.00',
  },
  {
    id: 13,
    name: 'Barbell with Plates',
    image: 'https://www.thestrength.co/cdn/shop/products/Photo-Jun-03_-22-59-02.jpg?v=1676616602&width=1946',
    rating: 5,
    description: 'Olympic barbell + rubber bumper plates for heavy lifts.',
    price: '$299.00',
  },
  {
    id: 14,
    name: 'Squat Rack Cage',
    image: 'https://www.fringesport.com/cdn/shop/files/Squat-Cage-Garage-Series-Fringe-Sport-389335297_1800x1800.jpg?v=1732127278',
    rating: 5,
    description: 'Sturdy cage for squats, bench press, and pull-ups — compact and safe.',
    price: '$320.00',
  },
  {
    id: 15,
    name: 'Sandbag Trainer',
    image: 'https://hyperwear.com/cdn/shop/products/hyperwear-workout-sandbags-sandbell-system-736466.jpg?v=1742924933&width=1958',
    rating: 4,
    description: 'Variable-weight sandbag for functional strength and endurance workouts.',
    price: '$55.00',
  },
  {
    id: 16,
    name: 'Gym Timer Clock',
    image: 'https://www.factoryfast.com.au/cdn/shop/files/ac2cd41a9637dccc239e7666f6ea45f8.jpg?v=1747715686',
    rating: 5,
    description: 'Interval timer with remote for AMRAPs, EMOMs, and circuits.',
    price: '$99.00',
  },
  {
    id: 17,
    name: 'Powerlifting Belt',
    image: 'https://images-cdn.ubuy.co.in/650925f19da1de35396f95eb-power-dragon-powerlifting-belt-with.jpg',
    rating: 5,
    description: 'Thick leather lifting belt that supports your core under heavy loads.',
    price: '$45.00',
  },
  {
    id: 18,
    name: 'Wrist Wraps',
    image: 'https://m.media-amazon.com/images/I/71PPGkD13HL.jpg',
    rating: 4,
    description: 'Elastic wraps stabilize your wrists during presses and lifts.',
    price: '$15.00',
  },
  {
    id: 19,
    name: 'Gym Chalk Block',
    image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/9670503/1.jpg?4134',
    rating: 4,
    description: 'Get that friction boost with magnesium chalk for better grip.',
    price: '$8.00',
  },
  {
    id: 20,
    name: 'Speed Ladder',
    image: 'https://www.atreq.com/cdn/shop/products/SpeedLadder.jpg?v=1584980232',
    rating: 4,
    description: 'Agility training ladder for footwork drills, speed, and coordination.',
    price: '$19.00',
  },


     
  ]);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Equipments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {equipments.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h2>
            <div className="flex items-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mr-1 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
            </div>
            <p className="text-gray-600 mb-1">{item.description}</p>
            <p className="text-lg font-bold text-green-700 mb-4">{item.price}</p>
            <button className="w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Equipments;
