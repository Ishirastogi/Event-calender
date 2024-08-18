import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const EventForm = () => {
  const { events, setEvents } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      const event = events.find(event => event.id === id);
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
      alert('All fields are required');
      return;
    }

    const newEvent = { id: id || new Date().toISOString(), title, date, time, category, description };

    if (id) {
      setEvents(events.map(event => event.id === id ? newEvent : event));
    } else {
      setEvents([...events, newEvent]);
    }

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{id ? 'Update Event' : 'Add Event'}</button>
    </form>
  );
};

export default EventForm;
