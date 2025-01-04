import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, setIsAdmin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add actual authentication logic here
    setIsAuthenticated(true);
    setIsAdmin(credentials.email === "admin@example.com");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-600 w-full max-w-4xl rounded-lg shadow-lg flex">
        {/* Left Side - Login Form */}
        <div className="w-1/2 bg-white p-10 rounded-l-lg">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 placeholder-gray-500 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email address"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 placeholder-gray-500 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex items-center justify-center bg-blue-600 rounded-r-lg">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/account-login-protection-illustration-download-in-svg-png-gif-file-formats--security-secure-pack-files-folders-illustrations-7271014.png" // Replace with the correct path to your image
            alt="Illustration"
            className="h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
