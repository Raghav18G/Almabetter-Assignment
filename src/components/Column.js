// src/components/Column.js
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";
import AddTaskDrawer from "./AddTaskDrawer";
import Popup from "./Popup";

const Column = ({ title, tasks, onDrop, count, addTasks, ID }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: onDrop,
  });

  const [isOpen, setIsOpen] = useState(false);
  console.log("KEY in COLUMN", ID);

  const openDrawer = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeDrawer = (e) => {
    e.preventDefault;
    setIsOpen(false);
  };

  return (
    <div
      ref={drop}
      className="bg-columnBg h-80vh rounded-md shadow-md w-60 mx-12 p-4 overflow-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray"
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-green-dark w-4 p-2">{count}</p>
      </div>
      <button
        onClick={openDrawer}
        className="text-green-dark bg-green-light w-full p-2 rounded-md mb-4"
      >
        {" "}
        + Add
      </button>

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}

      {isOpen && (
        <div>
          <AddTaskDrawer
            isOpen={isOpen}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
            addTasks={addTasks}
            key={ID}
          />
        </div>
      )}
    </div>
  );
};

export default Column;
