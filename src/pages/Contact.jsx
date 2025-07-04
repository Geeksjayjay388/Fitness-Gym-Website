import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[url('https://c4.wallpaperflare.com/wallpaper/317/334/429/working-out-exercise-barbell-gyms-wallpaper-preview.jpg')] bg-cover bg-center bg-no-repeat h-72 w-screen flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold bg-black/50 px-6 py-2 rounded-lg">
          📞 Get in Touch
        </h1>
      </section>

      {/* Contact Info */}
      <section className="bg-black py-16 px-4 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">CONTACT US</h2>
          <p className="text-gray-400 mt-2">
            We're here to answer your questions and keep your fitness journey rolling 💥
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition duration-300">
            <MdPhone className="text-4xl mx-auto mb-4 text-indigo-400" />
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="mt-2 text-gray-300">+123 456 789</p>
          </div>

          {/* Email */}
          <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition duration-300">
            <MdEmail className="text-4xl mx-auto mb-4 text-indigo-400" />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="mt-2 text-gray-300">fitBaseGym@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition duration-300">
            <MdLocationOn className="text-4xl mx-auto mb-4 text-indigo-400" />
            <h3 className="text-xl font-bold">Location</h3>
            <p className="mt-2 text-gray-300">123 Gym Street, Fitness City</p>
          </div>
        </div>

        <p className="mt-12 text-center text-gray-500 italic">
          "Sweat, smile, and reach out—your transformation starts here." 💪
        </p>
      </section>
    </main>
  );
}

export default Contact;
