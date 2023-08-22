import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = event.target;
    // If the input type is a checkbox, update the checked property
    const newValue = type === "checkbox" ? checked : value;
    console.log("CHANGING name", name);
    setFormState((prev) => ({ ...prev, [name]: newValue }));
  };

  return (
    <div className="">
      <div className="mb-4">
        <h4 className="font-bold">To Continue</h4>
        <p className="font-light text-subText text-xs">
          We need your Name & Email{" "}
        </p>
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border-grayfield border-2 rounded-md"
          value={formState.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border-grayfield border-2 rounded-md"
          value={formState.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="">
          <input
            type="checkbox"
            className="p-2 border-grayfield border-2 rounded-md"
            name="rememberMe"
            checked={formState.rememberMe}
            onChange={handleInputChange}
          />
          Remember me
        </label>
      </div>

      <div className="mb-4">
        <Link href="/Dashboard">
          <button
            className="w-full bg-blue-500 text-white p-2 rounded"
            // onClick={handleLogin}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
