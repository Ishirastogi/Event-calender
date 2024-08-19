import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import styles from "../styles/EventForm.module.css";

const EventForm = () => {
  const { events, setEvents } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      const event = events.find((event) => event.id === id);
      if (event) {
        setTitle(event.title);
        setDate(event.date);
        setTime(event.time);
        setCategory(event.category);
        setDescription(event.description);
      }
    }
  }, [id, events]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !time || !category || !description) {
      alert("All fields are required");
      return;
    }

    const newEvent = {
      id: id || new Date().toISOString(),
      title,
      date,
      time,
      category,
      description,
    };

    if (id) {
      setEvents(events.map((event) => (event.id === id ? newEvent : event)));
    } else {
      setEvents([...events, newEvent]);
    }

    navigate("/");
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 p-5">
        {id ? "Update Event" : "Add Event"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-5">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className={`${styles.inputField} border border-gray-300 rounded p-2 w-full`}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className={`${styles.inputField} border border-gray-300 rounded p-2 w-full`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="time"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            className={`${styles.inputField} border border-gray-300 rounded p-2 w-full`}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className={`${styles.inputField} border border-gray-300 rounded p-2 w-full`}
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className={`${styles.inputField} border border-gray-300 rounded p-2 w-full`}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
          {id ? "Update Event" : "Add Event"}
        </button>
      </form>
    </>
  );
};

export default EventForm;
