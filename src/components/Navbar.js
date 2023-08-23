// components/Navbar.js
import React from "react";
import Avatar from "../../public/images/Avatar.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import AvatarGroup from "../../public/images/avatarGroup.svg";
const Navbar = () => {
  const selectorData = useSelector((state) => state.auth);
  console.log("Se;ectorData", selectorData);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-40">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            className="ml-4 px-3 py-1 rounded-lg border focus:outline-none focus:ring focus:border-blue-300 "
          />
        </div>
        <Image src={AvatarGroup} />
        <div className="flex items-center">
          {/* User profile name */}
          <div className="text-dark mr-4 font-medium">
            {" "}
            Hi {selectorData?.user?.fullName}
          </div>
          {/* User avatar */}
          <Image
            src={Avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
