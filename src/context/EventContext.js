import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      category: "Testing",
      date: "2024-08-15",
      description: "Testing Event 1.. Already Created",
      id: "2024-08-15T03:54:16.291Z",
      time: "00:00",
      title: "Test1",
    },
    {
      category: "Testing",
      date: "2024-08-15",
      description: "Testing Event 2.. Already Created",
      id: "2024-08-15T03:45:16.291Z",
      time: "12:00",
      title: "Test2",
    },
    {
      category: "Testing",
      date: "2024-08-15",
      description: "Testing Event 4.. Already Created",
      id: "2024-08-15T03:45:14.291Z",
      time: "14:00",
      title: "Test4",
    },
    {
      category: "Testing",
      date: "2024-08-15",
      description: "Testing Event 3.. Already Created",
      id: "2024-08-15T03:45:00.291Z",
      time: "18:00",
      title: "Test3",
    },
    {
      category: "Testing",
      date: "2024-08-16",
      description: "Testing Event 3.. Already Created",
      id: "2024-08-16T03:45:16.291Z",
      time: "18:00",
      title: "Test5",
    },
  ]);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};
