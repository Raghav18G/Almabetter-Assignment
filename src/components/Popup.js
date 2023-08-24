import React from "react";

const Popup = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } `}
    >
      <div className="bg-white rounded-lg p-8 shadow-md">
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-green-dark text-white px-4 py-2 rounded"
        >
          Close  
        </button>
      </div>
    </div>
  );
};

export default Popup;
