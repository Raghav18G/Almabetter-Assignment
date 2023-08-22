// pages/login.js
import AuthLayout from '@/components/AuthLayout';
import React, { useState } from 'react';
import imgfav from "../../public/favicon.ico"

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <AuthLayout imgSrc={imgfav}>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
        <div className="mb-4">
          <ul className="flex">
            <li
              className={`mr-4 cursor-pointer ${
                activeTab === 'login' ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => handleTabChange('login')}
            >
              Login
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === 'signup' ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => handleTabChange('signup')}
            >
              Sign Up
            </li>
          </ul>
        </div>
        {activeTab === 'login' ? (
          <div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
            </div>
            <div className="mb-4">
              <button
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Sign up form content */}
          </div>
        )}
      </div>
    </AuthLayout>
  );
};

export default Login;
