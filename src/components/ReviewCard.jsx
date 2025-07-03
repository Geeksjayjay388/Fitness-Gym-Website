import React, { useState } from "react";

function ReviewCard() {
  const [reviews, setReviews] = useState([
  {
    photo: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    name: "Flex Freeman",
    stars: 5,
    text: "Best gym in town! My biceps grew faster than my Wi-Fi. 💪📶",
    date: "July 3, 2025",
  },
  {
    photo: "https://cdn.pixabay.com/photo/2017/10/10/00/49/female-2835524_1280.jpg",
    name: "Lana Lunges",
    stars: 4,
    text: "Clean, spacious, and those squat racks? 🏋️‍♀️ Chef's kiss.",
    date: "July 2, 2025",
  },
  {
    photo: "https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png",
    name: "Cardio Carl",
    stars: 3,
    text: "Treadmills are great, but I still can't outrun my poor diet. 🍕🏃‍♂️",
    date: "July 1, 2025",
  },
  {
    photo: "https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg",
    name: "Zoe Zen",
    stars: 5,
    text: "The yoga room feels like a slice of paradise. 🧘🌸",
    date: "June 30, 2025",
  },
  {
    photo: "https://cdn.pixabay.com/photo/2021/03/27/19/25/alone-boy-6129399_1280.jpg",
    name: "Bulk Barry",
    stars: 5,
    text: "Finally a place where protein shakes flow like waterfalls. 🥤🏋️",
    date: "June 29, 2025",
  },
  {
    photo: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    name: "Mia Machines",
    stars: 4,
    text: "Machines are top-tier. I don’t know what they do but they look cool. 🤖😅",
    date: "June 28, 2025",
  },
  {
    photo: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
    name: "Ned Napper",
    stars: 2,
    text: "Accidentally walked into the spin class. Thought I was being punished. 😵‍💫🚲",
    date: "June 27, 2025",
  },
]);


  return (
    <main className="p-4 bg-white px-30 min-h-screen grid grid-cols-5 gap-2">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white h-80 w-70 rounded-3xl shadow-xl p-4">
          {/* Photo */}
          <div className="flex justify-center mb-2">
            <img
              src={review.photo}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          {/* Name */}
          <div className="text-center mb-2">
            <h2 className="text-lg font-bold">{review.name}</h2>
          </div>

          {/* Stars */}
          <div className="flex justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < review.stars ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>

          {/* Review Text */}
          <div className="font-bold text-gray-700 text-center">
            <p>{review.text}</p>
            <p className="text-xs text-gray-500 mt-10">{review.date}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default ReviewCard;
