import React from "react";
import KanbanBoard from "./KanbanBoard";
import AddTaskDrawer from "./AddTaskDrawer";
import Navbar from "./Navbar";
import Filter from "../../public/images/Filter.svg";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl mt-8 ml-4 ">Projects</h1>
        <div className="flex  mx-4 gap-x-2">
          <Image src={Filter} />
          <span className="text-dark text-lg cursor-pointer"> Filter</span>
        </div>
      </div>

      <KanbanBoard />
    </div>
  );
};

export default Projects;
