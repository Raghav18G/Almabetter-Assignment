import React from "react";
import KanbanBoard from "./KanbanBoard";
import AddTaskDrawer from "./AddTaskDrawer";
import Navbar from "./Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-3xl mt-8 ml-4">Projects</h1>
      <KanbanBoard />
    </div>
  );
};

export default Projects;
