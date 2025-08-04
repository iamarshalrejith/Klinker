import GenderCheckbox from "./GenderCheckbox"; 
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Signup = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div
        ref={cardRef}
        className="bg-white/20 backdrop-blur-lg shadow-xl rounded-xl p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Sign Up
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-black text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black"
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black"
              placeholder="yourUsername"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black"
              placeholder="••••••••"
            />
          </div>

          {/* Gender selection */}
          <GenderCheckbox />
          

          <button
            type="submit"
            className="w-full bg-gray-400 hover:bg-gray-500 text-black py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-black mt-2">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-gray-400 hover:underline hover:text-gray-900"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
