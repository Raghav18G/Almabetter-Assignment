import React, { useState } from "react";

const Signup = () => {
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
        <input
          type="text"
          name="fullName"
          placeholder="Email"
          className="w-full p-2 border-grayfield border-2 rounded-md"
          value={formState.fullName}
          onChange={handleInputChange}
        />
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
            className="mr-2"
            name="rememberMe"
            checked={formState.rememberMe}
            onChange={handleInputChange}
          />
          Remember me
        </label>
      </div>

      <div className="mb-4">
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          // onClick={handleLogin}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signup;
