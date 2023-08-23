import { useState } from "react";

export default function AddTaskDrawer({
  isOpen,
  openDrawer,
  closeDrawer,
  addTasks,
  key,
}) {
  const [todoData, setToDOData] = useState({
    id: "",
    header: "",
    body: "",
    avatar: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = event.target;
    setToDOData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div
        className={`drawer bg-white h-screen fixed top-0 right-0 shadow p-4 w-1/4 ${
          isOpen ? "open" : ""
        }`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (todoData.body.length > 0 && todoData.header.length > 0) {
              addTasks(e, todoData, key);
              closeDrawer(e);
            }
          }}
        >
          <div className="p-4 ">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold mb-2">Add your New Todo</h1>
              <span onClick={closeDrawer}>&times;</span>
            </div>

            <p>Enter the Details of your todo in the fields provided</p>

            <input
              type="text"
              name="header"
              placeholder="Title"
              className="w-full p-2 border-grayfield border-2 rounded-md mt-8"
              value={todoData.header}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="body"
              placeholder="Description"
              className="w-full p-2 border-grayfield border-2 rounded-md mt-4"
              value={todoData.body}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-buttonBg p-2 rounded-lg ml-16 text-center text-white"
            type="submit"
          >
            + Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
