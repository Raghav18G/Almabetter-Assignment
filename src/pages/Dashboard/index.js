import KanbanBoard from "@/components/KanbanBoard";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex bg-primary w-full overflow-hidden">
      {" "}
      <div className="w-1/6">
        {" "}
        <Sidebar />
      </div>
      <div className="w-5/6">
        {" "}
        <Projects />
      </div>
    </div>
  );
};

export default Dashboard;
