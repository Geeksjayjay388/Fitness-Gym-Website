function About() {
  return (
    <main className="bg-gray-50 px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        💪 About us 💪 
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-black font-bold mb-10">
        At <span className="font-bold text-indigo-600">PulseFit</span>, we don’t just build muscles—we build confidence, community, and consistency. Our gym is more than a workout space: it's your second home, your motivational fuel station, and your personal growth playground. 🏋️‍♂️✨
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-all">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">🎯 Our Mission</h2>
          <p className="text-black font-bold">
            To empower individuals through elite fitness programs, personalized coaching, and an uplifting environment that sparks transformation.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-all">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">🧠 Our Values</h2>
          <ul className="  list-inside text-center font-bold text-black">
            <li>Dedication & Discipline</li>
            <li>Innovation in Training</li>
            <li>Inclusive Culture</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-all">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">🚀 Why Choose Us?</h2>
          <p className="text-black font-bold">
            PulseFit stands out with dynamic group classes, smart progress tracking, and a community that cheers you on every step of the way.
          </p>
        </div>
      </div>

      <p className="mt-12 text-gray-500 italic">
        “Every rep gets you closer to the version of yourself you've always imagined.” ✨
      </p>
    </main>
  );
}

export default About;
