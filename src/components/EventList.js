import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import styles from "../styles/EventList.module.css";

const EventList = () => {
  const { events } = useContext(EventContext);

  return (
    <div className={`${styles.tableContainer} bg-white shadow-lg rounded-lg`}>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Time</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className={`${styles.tableRow} border-b`}>
              <td className="px-4 py-2">{event.title}</td>
              <td className="px-4 py-2">{event.category}</td>
              <td className="px-4 py-2">{event.date}</td>
              <td className="px-4 py-2">{event.time}</td>
              <td className="px-4 py-2">{event.description}</td>
              <td className="px-4 py-2">
                <Link
                  to={`/event/${event.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {events.length === 0 && (
        <p className="text-center py-4">No events scheduled</p>
      )}
    </div>
  );
};

export default EventList;
