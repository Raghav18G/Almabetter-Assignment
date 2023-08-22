// src/components/Column.js
import React from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";

const Column = ({ title, tasks, onDrop, count }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: onDrop,
  });

  return (
    <div
      ref={drop}
      className="bg-columnBg h-80vh rounded-md shadow-md w-60 mx-12 p-4 overflow-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray"
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-green-dark w-4 p-2">{count}</p>
      </div>

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
