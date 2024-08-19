import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  BrowserRouter as Router,
  useNavigate,
  useParams,
} from "react-router-dom";
import { EventContext } from "../context/EventContext";
import EventForm from "../components/EventForm";
import "@testing-library/jest-dom/extend-expect"; // For extended matchers like toBeInTheDocument

// Mock the necessary hooks from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

describe("EventForm Component", () => {
  const mockSetEvents = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    window.alert = jest.fn(); // Mock window.alert
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly for adding a new event", () => {
    useParams.mockReturnValue({ id: null }); // No ID for adding a new event

    render(
      <EventContext.Provider value={{ events: [], setEvents: mockSetEvents }}>
        <Router>
          <EventForm />
        </Router>
      </EventContext.Provider>
    );

    expect(
      screen.getByRole("heading", { name: /Add Event/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Category")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Time")).toBeInTheDocument();
  });

  test("renders correctly for updating an event", () => {
    const mockEvents = [
      {
        id: "1",
        title: "Event 1",
        date: "2024-08-19",
        time: "10:00 AM",
        category: "Category 1",
        description: "Description 1",
      },
    ];

    useParams.mockReturnValue({ id: "1" }); // Mock ID for updating event case

    render(
      <EventContext.Provider
        value={{ events: mockEvents, setEvents: mockSetEvents }}
      >
        <Router>
          <EventForm />
        </Router>
      </EventContext.Provider>
    );

    expect(
      screen.getByRole("heading", { name: /Update Event/i })
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("Event 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Category 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Description 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2024-08-19")).toBeInTheDocument();
  });

  test("shows alert when required fields are missing", () => {
    useParams.mockReturnValue({ id: null }); // No ID for adding a new event

    render(
      <EventContext.Provider value={{ events: [], setEvents: mockSetEvents }}>
        <Router>
          <EventForm />
        </Router>
      </EventContext.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /Add Event/i })); // Submit without filling fields

    expect(window.alert).toHaveBeenCalledWith("All fields are required");
  });
});
