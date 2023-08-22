// components/Sidebar.js
import React from "react";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
import Home from "../../public/images/Overview.svg";
import Stats from "../../public/images/Stats.svg";

import Projects from "../../public/images/Projects.svg";
import Chat from "../../public/images/Chat.svg";
import Calendar from "../../public/images/Calendar.svg";
import Settings from "../../public/images/Settings.svg";
import LogOut from "../../public/images/LogOut.svg";
import { useDispatch } from "react-redux";
import { clearUser } from "@/redux/auth/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside className="bg-white  h-screen text-dark p-4 border-r-[3px] border-gray  ">
      <div className="fixed">
        {" "}
        <Image src={Logo} />
      </div>
      <div className="flex-col space-y-36">
        <div className="mt-16">
          <ul className="space-y-2 flex-row items-left m-4 text-content">
            <li className="flex mt-8 text-xl gap-4">
              <Image src={Home} />
              <a href="#" className="hover:text-dark ml-4 my-2 ">
                Overview
              </a>
            </li>
            <li className="flex mt-8 text-xl gap-4">
              <Image src={Stats} />
              <a href="#" className="hover:text-dark ml-4 my-2">
                Stats
              </a>
            </li>
            <li className="flex mt-8 text-xl gap-4">
              <Image src={Chat} />
              <a href="#" className="hover:text-dark  ml-4 my-2">
                Chat
              </a>
            </li>
            <li className="flex mt-8 text-xl gap-4">
              <Image src={Projects} />
              <a href="#" className="hover:text-dark  ml-4 my-2">
                Projects
              </a>
            </li>
            <li className="flex mt-8 text-xl gap-4">
              <Image src={Calendar} />
              <a href="#" className="hover:text-dark  ml-4 my-2">
                Calendar
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="space-y-2 flex-row items-left m-4 text-content">
            <li className="flex mt-8 text-xl gap-4">
              <Image src={Settings} />
              <a href="#" className="hover:text-dark ml-4 my-2 ">
                Settings
              </a>
            </li>
            <li
              className="flex mt-8 text-xl gap-4"
              onClick={() => {
                dispatch(clearUser());
              }}
            >
              <Image src={LogOut} />
              <a href="#" className="hover:text-dark ml-4 my-2">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
