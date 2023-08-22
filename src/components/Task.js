// src/components/Task.js
import React from "react";
import Image from "next/image";
import { useDrag } from "react-dnd";

const Task = ({ task }) => {
  const [, ref] = useDrag({
    type: "TASK",
    item: { id: task.id, content: task.content },
  });

  return (
    <div
      ref={ref}
      className="bg-white p-2 mb-2 rounded-md shadow-md gap-y-4 cursor-pointer"
    >
      <h4 className="font-bold font-xl">{task.header}</h4>
      <p className="font-sm">{task.body}</p>
      <Image src={task.avatar} className="pt-2" />
    </div>
  );
};

export default Task;
