// components/Card.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Card = ({ text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`bg-white rounded p-2 mb-2 shadow-md ${
        isDragging ? 'opacity-50' : ''
      }`}
      ref={drag}
    >
      {text}
    </div>
  );
};

export default Card;
