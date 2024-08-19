import React from "react";
import styles from "../styles/Modal.module.css";
const Modal = ({ isOpen, onClose, events, onEventClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`${styles.modalContainer} bg-white shadow-xl`}>
        <h3 className="text-xl font-semibold mb-4">Events on this day</h3>
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
              className="mb-2 cursor-pointer text-blue-600 hover:text-blue-800"
              onClick={() => onEventClick(event.id)}
            >
              {event.title}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
