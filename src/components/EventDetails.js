import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const EventDetails = () => {
  const { events, setEvents } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(event => event.id === id);

  const handleDelete = () => {
    setEvents(events.filter(event => event.id !== id));
    navigate('/');
  };

  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.category}</p>
      <p>{event.description}</p>
      <button onClick={() => navigate(`/edit-event/${event.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EventDetails;
