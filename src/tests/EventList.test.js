import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import EventList from "../components/EventList";
import "@testing-library/jest-dom/extend-expect"; // Importing jest-dom for extended matchers

describe("EventList Component", () => {
  test("renders without crashing", () => {
    render(
      <EventContext.Provider value={{ events: [] }}>
        <Router>
          <EventList />
        </Router>
      </EventContext.Provider>
    );
  });

  test("renders a message when there are no events", () => {
    render(
      <EventContext.Provider value={{ events: [] }}>
        <Router>
          <EventList />
        </Router>
      </EventContext.Provider>
    );

    expect(screen.getByText("No events scheduled")).toBeInTheDocument();
  });

  test("renders a list of events", () => {
    const mockEvents = [
      {
        id: 1,
        title: "Event 1",
        category: "Category 1",
        date: "2024-08-19",
        time: "10:00 AM",
        description: "Description 1",
      },
      {
        id: 2,
        title: "Event 2",
        category: "Category 2",
        date: "2024-08-20",
        time: "11:00 AM",
        description: "Description 2",
      },
    ];

    render(
      <EventContext.Provider value={{ events: mockEvents }}>
        <Router>
          <EventList />
        </Router>
      </EventContext.Provider>
    );

    // Check that the event titles are rendered
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();

    // Check that the event categories are rendered
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();

    // Check that the event dates are rendered
    expect(screen.getByText("2024-08-19")).toBeInTheDocument();
    expect(screen.getByText("2024-08-20")).toBeInTheDocument();

    // Check that the event times are rendered
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();
    expect(screen.getByText("11:00 AM")).toBeInTheDocument();

    // Check that the event descriptions are rendered
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();

    // Check that the "View Details" links are rendered
    expect(screen.getAllByText("View Details")).toHaveLength(2);
  });
});
