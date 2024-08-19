import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { EventContext } from "../context/EventContext";
import EventFilter from "./EventFilter";
import Modal from "./Modal"; // Import the Modal component

const CalendarView = () => {
  const { events } = useContext(EventContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEvents, setModalEvents] = useState([]);
  const navigate = useNavigate();

  // Filter events based on selected category
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  // Function to check and render events on a specific date
  const getTileContent = ({ date, view }) => {
    if (view === "month") {
      const eventsOnDate = filteredEvents.filter(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );

      // If there are multiple events on the same day
      if (eventsOnDate.length > 0) {
        return (
          <div className="flex flex-col items-center">
            {eventsOnDate.slice(0, 2).map((event, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white text-xs rounded px-1 py-0.5 mb-1"
              >
                {event.title}
              </span>
            ))}
            {eventsOnDate.length > 2 && (
              <span className="text-gray-600 text-xs">
                +{eventsOnDate.length - 2} more
              </span>
            )}
          </div>
        );
      }
    }
    return null;
  };

  // Handle clicking on a day with multiple events
  const onClickDay = (date) => {
    const selectedEvents = filteredEvents.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    if (selectedEvents.length === 1) {
      navigate(`/event/${selectedEvents[0].id}`);
    } else if (selectedEvents.length > 1) {
      setModalEvents(selectedEvents);
      setIsModalOpen(true);
    }
  };

  // Handle event click in the modal
  const handleEventClick = (eventId) => {
    setIsModalOpen(false);
    navigate(`/event/${eventId}`);
  };

  const categories = [...new Set(events.map((event) => event.category))];

  return (
    <div className="p-5">
      {/* Event filter to filter events by category */}
      <EventFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Enlarged Calendar component */}
      <Calendar
        onClickDay={onClickDay}
        tileContent={getTileContent}
        className="shadow-lg rounded-md mt-5 max-w-5xl mx-auto"
      />

      {/* Modal for multiple events */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        events={modalEvents}
        onEventClick={handleEventClick}
      />
    </div>
  );
};

export default CalendarView;
