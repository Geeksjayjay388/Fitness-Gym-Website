import { FaGoogle, FaApple } from 'react-icons/fa';

function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[url('https://images4.alphacoders.com/692/692043.jpg')] p-6">
      <div className="bg-white/80 shadow-lg rounded-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Create an Account 🚀</h1>

        {/* Registration Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center border-black">
          <div className="flex-grow border-t border-black" />
          <span className="px-3 text-sm">or sign up with</span>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center gap-3 border border-black rounded-lg px-4 py-2 hover:bg-gray-100 transition">
            <FaGoogle className="text-black text-xl" />
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 border border-black rounded-lg px-4 py-2 hover:bg-gray-100 transition">
            <FaApple className="text-black text-xl" />
            <span>Continue with Apple</span>
          </button>
        </div>

        {/* Footer Prompt */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}

export default Register;
