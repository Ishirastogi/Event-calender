import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const CalendarView = lazy(() => import('./components/CalendarView'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const EventForm = lazy(() => import('./components/EventForm'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<CalendarView />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/add-event" element={<EventForm />} />
        <Route path="/edit-event/:id" element={<EventForm />} />
      </Routes>
    </Suspense>
  );
}

export default App;
