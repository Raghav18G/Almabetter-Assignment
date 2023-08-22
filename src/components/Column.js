// src/components/Column.js
import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';

const Column = ({ title, tasks, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: onDrop,
  });

  return (
    <div ref={drop} className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;