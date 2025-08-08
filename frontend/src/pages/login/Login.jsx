import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router";
import useLogin from "../../hooks/useLogin"; 

const Login = () => {
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password); // fixed call and spelling
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 sm:px-6 md:px-8">
      <div
        ref={cardRef}
        className="bg-white/20 backdrop-blur-lg shadow-xl rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-black mb-4 sm:mb-6">
          Login
        </h1>

        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-black text-sm mb-1">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black text-sm sm:text-base"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-black text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-black text-sm sm:text-base"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 hover:text-white hover:bg-gray-600 text-black py-2 sm:py-2.5 rounded-lg transition duration-200 text-sm sm:text-base"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign In"
            )}
          </button>

          <p className="text-xs sm:text-sm text-center text-black mt-2">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-gray-800 underline hover:text-gray-900"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
