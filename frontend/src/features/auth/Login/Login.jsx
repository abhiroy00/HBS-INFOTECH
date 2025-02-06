import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoginMutation } from '../Login/authApi';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Use RTK Query hook for login mutation
  const [login, { isLoading, error: apiError }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login begins
    setError(""); // Reset error state
    setSuccess(""); // Reset success state

    try {
      const credentials = { email, password };
      const response = await login(credentials).unwrap(); // Execute login mutation

      // If login is successful, store the token and navigate
      localStorage.setItem("authToken", response.token);
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/CourseMain"), 1500); // Redirect after delay
    } catch (err) {
      setError(apiError?.data?.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false when login is done
    }
  };

  return (
    <div className="w-full max-w-md p-6 space-y-4 rounded-xl m-auto bg-white dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
      <form noValidate="" onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-violet-600"
            required
            aria-label="Email"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-violet-600"
            required
            aria-label="Password"
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-md bg-violet-600 text-white disabled:opacity-50"
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
      <div className="flex items-center pt-3 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          {/* Google Icon */}
        </button>
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          {/* Twitter Icon */}
        </button>
        <button aria-label="Log in with GitHub" className="p-3 rounded-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          {/* GitHub Icon */}
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account? <Link to="/register" className="underline dark:text-gray-200">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
