import KanbanBoard from "@/components/KanbanBoard";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex bg-primary">
      {" "}
      <Sidebar />
      <Projects />
    </div>
  );
};

export default Dashboard;
