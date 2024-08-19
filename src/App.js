import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const CalendarView = lazy(() => import("./components/CalendarView"));
const EventDetails = lazy(() => import("./components/EventDetails"));
const EventForm = lazy(() => import("./components/EventForm"));
const EventList = lazy(() => import("./components/EventList"));
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CalendarView />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/edit-event/:id" element={<EventForm />} />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
