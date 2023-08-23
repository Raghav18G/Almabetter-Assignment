// src/containers/KanbanBoard.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";
import User1 from "../../public/images/User1.svg";
import User2 from "../../public/images/User2.svg";
import User3 from "../../public/images/User3.svg";
import User4 from "../../public/images/User4.svg";

const mockData = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "task1",
          header: "Design- App",
          body: "Modifying Career, Scholarship and Entrance exam screen Acc to new design pattern ",
          avatar: User1,
        },
        {
          id: "task2",
          header: "Prototyping",
          body: "Account -> Profile Section",
          avatar: User2,
        },
      ],
    },
    {
      id: "inProgress",
      title: "In Progress",
      tasks: [
        {
          id: "task3",
          header: "Frontend",
          body: "As a Content Annotator, I should be able add tags in colleges, So that colleges can improve",
          avatar: User3,
        },
        {
          id: "task4",
          header: "Backend",
          body: "Create API for search colleges ,exams, scholarships, career_pathways",
          avatar: User4,
        },
      ],
    },
    {
      id: "Completed",
      title: "Completed",
      tasks: [],
    },
  ],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(mockData.columns);

  const addTasks = (e, data, columnID) => {
    e.preventDefault();
    console.log("BEFORe ADDING Columns", columns);

    const updatedColumns = columns.map((column) => {
      if (column.id === "todo") {
        console.log("COLUMN ID in Add task", columnID);
        return {
          ...column,
          tasks: [...column.tasks, data],
        };
      }
      return column;
    });

    setColumns(updatedColumns);
  };

  console.log("Columns", columns);

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

  console.log("Columns", columns);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center p-8">
        {columns.map((column) => (
          <Column
            key={column.id}
            ID={column.id}
            title={column.title}
            tasks={column.tasks}
            onDrop={(item) => handleDrop(item.id, column.id)}
            count={column.tasks.length}
            addTasks={addTasks}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
