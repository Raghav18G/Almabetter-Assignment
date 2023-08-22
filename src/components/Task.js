// src/components/Task.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ task }) => {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { id: task.id, content: task.content },
  });

  return (
    <div ref={ref} className="bg-white p-2 mb-2 rounded-md shadow-md">
      {task.content}
    </div>
  );
};

export default Task;