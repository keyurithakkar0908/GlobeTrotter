import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./TripCalendar.css";

function TripCalendar() {
  const [selectedDate, setSelectedDate] = useState(12);

  const days = [
    { date: 1, day: "Mon" },
    { date: 2, day: "Tue" },
    { date: 3, day: "Wed" },
    { date: 4, day: "Thu" },
    { date: 5, day: "Fri" },
    { date: 6, day: "Sat" },
    { date: 7, day: "Sun" },
    { date: 8, day: "Mon" },
    { date: 9, day: "Tue" },
    { date: 10, day: "Wed" },
    { date: 11, day: "Thu" },
    { date: 12, day: "Fri" },
    { date: 13, day: "Sat" },
    { date: 14, day: "Sun" },
    { date: 15, day: "Mon" },
    { date: 16, day: "Tue" },
    { date: 17, day: "Wed" },
    { date: 18, day: "Thu" },
    { date: 19, day: "Fri" },
    { date: 20, day: "Sat" },
    { date: 21, day: "Sun" },
    { date: 22, day: "Mon" },
    { date: 23, day: "Tue" },
    { date: 24, day: "Wed" },
    { date: 25, day: "Thu" },
    { date: 26, day: "Fri" },
    { date: 27, day: "Sat" },
    { date: 28, day: "Sun" },
    { date: 29, day: "Mon" },
    { date: 30, day: "Tue" },
  ];

  const events = {
    12: [
      {
        time: "09:00 AM",
        title: "Arrive in Jaipur",
        type: "Travel",
        icon: "✈️",
      },
      {
        time: "12:00 PM",
        title: "Hotel Check-in",
        type: "Stay",
        icon: "🏨",
      },
      {
        time: "05:00 PM",
        title: "Explore City Palace",
        type: "Activity",
        icon: "🏛️",
      },
    ],
    13: [
      {
        time: "09:00 AM",
        title: "Amber Fort",
        type: "Activity",
        icon: "🏰",
      },
      {
        time: "02:00 PM",
        title: "Rajasthani Food Tour",
        type: "Food",
        icon: "🍽️",
      },
    ],
    14: [
      {
        time: "10:00 AM",
        title: "Local Market Visit",
        type: "Shopping",
        icon: "🛍️",
      },
      {
        time: "06:00 PM",
        title: "Sunset Photography",
        type: "Activity",
        icon: "📸",
      },
    ],
    15: [
      {
        time: "09:30 AM",
        title: "Hawa Mahal Visit",
        type: "Activity",
        icon: "🏛️",
      },
      {
        time: "04:00 PM",
        title: "Free Time",
        type: "Personal",
        icon: "☕",
      },
    ],
    16: [
      {
        time: "08:00 AM",
        title: "Hotel Check-out",
        type: "Stay",
        icon: "🏨",
      },
      {
        time: "11:00 AM",
        title: "Return Journey",
        type: "Travel",
        icon: "🚆",
      },
    ],
  };

  const selectedEvents = events[selectedDate] || [];

  return (
    <div className="page">
      <Navbar />

      <main className="calendar-page">
        <div className="container">

          <div className="calendar-header">
            <div>
              <span className="label">PLAN YOUR DAYS</span>
              <h1>Travel Calendar</h1>
              <p>
                Organize your activities and make every day of your trip count.
              </p>
            </div>

            <Link to="/itinerary-builder" className="btn">
              + Add Activity
            </Link>
          </div>

          <div className="calendar-layout">

            <section className="calendar-card card">

              <div className="calendar-top">
                <button className="calendar-arrow">‹</button>

                <div>
                  <span>2026</span>
                  <h2>June</h2>
                </div>

                <button className="calendar-arrow">›</button>
              </div>

              <div className="calendar-weekdays">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>

              <div className="calendar-grid">

                {days.map((item) => (
                  <button
                    key={item.date}
                    className={
                      selectedDate === item.date
                        ? "calendar-day selected"
                        : events[item.date]
                        ? "calendar-day has-event"
                        : "calendar-day"
                    }
                    onClick={() => setSelectedDate(item.date)}
                  >
                    <span>{item.date}</span>

                    {events[item.date] && (
                      <i></i>
                    )}
                  </button>
                ))}

              </div>

              <div className="calendar-legend">
                <div>
                  <span className="legend-circle selected-circle"></span>
                  Selected day
                </div>

                <div>
                  <span className="legend-circle event-circle"></span>
                  Trip activity
                </div>
              </div>

            </section>

            <aside className="selected-day-card card">

              <div className="selected-day-heading">
                <div>
                  <span className="label">SELECTED DATE</span>
                  <h2>June {selectedDate}, 2026</h2>
                </div>

                <span className="date-icon">📅</span>
              </div>

              <div className="day-trip-info">
                <span>📍</span>

                <div>
                  <strong>Jaipur Adventure</strong>
                  <p>June 12 - June 16</p>
                </div>
              </div>

              <div className="day-events">

                <div className="events-title">
                  <span className="label">TODAY'S ACTIVITIES</span>
                  <span>{selectedEvents.length}</span>
                </div>

                {selectedEvents.length > 0 ? (
                  selectedEvents.map((event, index) => (
                    <div className="calendar-event" key={index}>

                      <div className="event-time">
                        {event.time}
                      </div>

                      <div className="event-line">
                        <span>{event.icon}</span>
                        {index !== selectedEvents.length - 1 && (
                          <i></i>
                        )}
                      </div>

                      <div className="event-details">
                        <h3>{event.title}</h3>
                        <p>{event.type}</p>
                      </div>

                    </div>
                  ))
                ) : (
                  <div className="no-events">
                    <span>🌤️</span>
                    <h3>No activities planned</h3>
                    <p>
                      Add an activity to make this day more exciting.
                    </p>
                  </div>
                )}

              </div>

              <Link to="/itinerary-builder" className="btn calendar-add-btn">
                + Add Activity
              </Link>

            </aside>

          </div>

          <div className="calendar-tip">

            <div className="tip-icon">
              💡
            </div>

            <div>
              <span className="label">SMART TRAVEL TIP</span>

              <h3>
                Leave some free time in your itinerary
              </h3>

              <p>
                A flexible schedule gives you time to discover unexpected
                places, relax and enjoy your destination without rushing.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default TripCalendar;