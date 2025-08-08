import GenderCheckbox from "./GenderCheckbox";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
  const cardRef = useRef(null);
  const { signup, loading } = useSignup();

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

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 sm:px-6 md:px-8">
      <div
        ref={cardRef}
        className="bg-white/20 backdrop-blur-lg shadow-xl rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-black mb-4 sm:mb-6">
          Sign Up
        </h1>

        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-black text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black text-sm sm:text-base"
              placeholder="e.g. Jane Doe"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black text-sm sm:text-base"
              placeholder="yourUsername"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black text-sm sm:text-base"
              placeholder="••••••••"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black text-sm sm:text-base"
              placeholder="••••••••"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender selection */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <button
            type="submit"
            className="w-full bg-gray-400 hover:text-white hover:bg-gray-600 text-black py-2 sm:py-2.5 rounded-lg transition duration-200 text-sm sm:text-base"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-xs sm:text-sm text-center text-black mt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-800 underline hover:text-gray-900"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
