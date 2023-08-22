// src/containers/KanbanBoard.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";

const mockData = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: "task1", content: "Task 1" },
        { id: "task2", content: "Task 2" },
      ],
    },
    {
      id: "inProgress",
      title: "In Progress",
      tasks: [{ id: "task3", content: "Task 3" }],
    },
    {
      id: "done",
      title: "Done",
      tasks: [],
    },
  ],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(mockData.columns);

  const handleDrop = (itemId, targetColumnId) => {
    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks.filter((task) => task.id !== itemId),
    }));

    const targetColumn = updatedColumns.find(
      (column) => column.id === targetColumnId
    );
    const item = columns
      .flatMap((column) => column.tasks)
      .find((task) => task.id === itemId);
    targetColumn.tasks.push(item);

    setColumns(updatedColumns);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center p-8">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            tasks={column.tasks}
            onDrop={(item) => handleDrop(item.id, column.id)}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
