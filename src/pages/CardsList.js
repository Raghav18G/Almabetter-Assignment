import React from "react";

import { Droppable } from "react-beautiful-dnd";

import ToDoCard from "./TodoCard";

const CardsList = ({ list, cards }) => {
  console.log("CARDS LSIT", list);

  return (
    <div>
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="list"
          >
            {cards.map((card, index) => (
              <ToDoCard key={card.id} card={card} index={index} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default CardsList;
