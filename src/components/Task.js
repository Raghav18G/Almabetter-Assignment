// src/components/Task.js
import React, { useState } from "react";
import Image from "next/image";
import { useDrag } from "react-dnd";
import Popup from "./Popup";

const Task = ({ task }) => {
  const [, ref] = useDrag({
    type: "TASK",
    item: { id: task.id, content: task.content },
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div
        ref={ref}
        className="bg-white p-2 mb-2 rounded-md shadow-md gap-y-4 cursor-pointer"
        onClick={openPopup}
      >
        <h4 className="font-bold font-xl">{task.header}</h4>
        <p className="font-sm">{task.body}</p>
        <Image src={task.avatar} className="pt-2" />
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="bg-white  mb-2 rounded-md  gap-y-4 cursor-pointer">
          <h4 className="font-bold font-3xl">{task.header}</h4>
          <p className="font-xl">{task.body}</p>
          <Image src={task.avatar} className="pt-2" />
        </div>
      </Popup>
    </div>
  );
};

export default Task;
