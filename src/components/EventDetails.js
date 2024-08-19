import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const EventDetails = () => {
  const { events, setEvents } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((event) => event.id === id);

  const handleDelete = () => {
    setEvents(events.filter((event) => event.id !== id));
    navigate("/");
  };

  if (!event) return <div className="p-5 text-red-500">Event not found</div>;

  return (
    <div className="p-5 space-y-4">
      <h2 className="text-2xl font-bold">{event.title}</h2>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Category:</strong> {event.category}
      </p>
      <p>
        <strong>Description:</strong> {event.description}
      </p>
      <div className="space-x-2">
        <button
          onClick={() => navigate(`/edit-event/${event.id}`)}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
