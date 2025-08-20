import { Alert, Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Please fill out all fields.")
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-15 flex items-center justify-center px-4">
      {/* Container */}
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Praveen's
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-5 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            consequuntur, similique rem sapiente id omnis facere autem corporis
            delectus impedit, incidunt reiciendis tempora debitis labore!
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
            Create an Account
          </h2>

          <form
            className="flex flex-col gap-6 w-full max-w-lg mx-auto" 
            onSubmit={handleSubmit}
          >
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="block w-full h-14 px-5 text-lg text-gray-900 border border-gray-300 
                           rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full h-14 px-5 text-lg text-gray-900 border border-gray-300 
                           rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@gmail.com"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full h-14 px-5 text-lg text-gray-900 border border-gray-300 
                           rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            {/* Button */}
            <Button
              className="bg-gradient-to-br from-purple-600 to-pink-500 h-12 text-lg"
              pill
              type="submit" disabled={loading}
            >
              {
                loading ? (
                  <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                  </>
                ) : 'Sign Up'
              }
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5 justify-center">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SignUp;
