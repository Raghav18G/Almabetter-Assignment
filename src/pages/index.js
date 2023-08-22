import Link from "next/link";
import HomepageImage from "../../public/images/homepage.svg";
import Image from "next/image";
import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" h-screen w-full bg-white flex justify-evenly items-center ">
      <div className="">
        <Image src={HomepageImage} />
      </div>
      <div className="h-auto border-gray border-4 p-24  rounded-3xl w-5/12">
        <ul className="flex ">
          <li
            className={`mr-4 cursor-pointer ${
              activeTab === "login" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => handleTabChange("login")}
          >
            Login
          </li>

          <li
            className={`cursor-pointer ${
              activeTab === "signup" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => handleTabChange("signup")}
          >
            Sign Up
          </li>
        </ul>
        <hr className="w-2/3 m-4" />
        {activeTab === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default HomePage;
