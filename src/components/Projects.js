import React from "react";
import KanbanBoard from "./KanbanBoard";
import AddTaskDrawer from "./AddTaskDrawer";

const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-8 ml-4">Projects</h1>
      <KanbanBoard />
    </div>
  );
};

export default Projects;
