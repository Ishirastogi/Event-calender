import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContext } from '../context/EventContext';
import EventFilter from './EventFilter';

const CalendarView = () => {
  const { events } = useContext(EventContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const filteredEvents = selectedCategory
    ? events.filter(event => event.category === selectedCategory)
    : events;

  const onClickDay = (date) => {
    const selectedEvent = filteredEvents.find(event => new Date(event.date).toDateString() === date.toDateString());
    if (selectedEvent) {
      navigate(`/event/${selectedEvent.id}`);
    }
  };

  const categories = [...new Set(events.map(event => event.category))];

  return (
    <div>
      <EventFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Calendar onClickDay={onClickDay} />
      <button onClick={() => navigate('/add-event')}>Add Event</button>
    </div>
  );
};

export default CalendarView;
