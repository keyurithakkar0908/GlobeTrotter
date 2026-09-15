import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItineraryBuilder.css";

function ItineraryBuilder() {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(1);

  const [days, setDays] = useState([
    {
      day: 1,
      date: "15 Dec 2026",
      city: "Goa",
      activities: [
        {
          id: 1,
          time: "09:00 AM",
          title: "Visit Baga Beach",
          category: "Beach",
          duration: "2 hours",
        },
        {
          id: 2,
          time: "01:00 PM",
          title: "Lunch at Beach Cafe",
          category: "Food",
          duration: "1 hour",
        },
        {
          id: 3,
          time: "04:00 PM",
          title: "Water Sports",
          category: "Adventure",
          duration: "2 hours",
        },
      ],
    },
    {
      day: 2,
      date: "16 Dec 2026",
      city: "Panaji",
      activities: [
        {
          id: 4,
          time: "10:00 AM",
          title: "Explore Panaji",
          category: "Sightseeing",
          duration: "2 hours",
        },
        {
          id: 5,
          time: "06:00 PM",
          title: "Night Market",
          category: "Shopping",
          duration: "2 hours",
        },
      ],
    },
    {
      day: 3,
      date: "17 Dec 2026",
      city: "Calangute",
      activities: [
        {
          id: 6,
          time: "09:30 AM",
          title: "Calangute Beach",
          category: "Beach",
          duration: "2 hours",
        },
      ],
    },
  ]);

  const [newActivity, setNewActivity] = useState({
    time: "",
    title: "",
    category: "Sightseeing",
    duration: "",
  });

  const currentDay = days.find((day) => day.day === selectedDay);

  const handleActivityChange = (e) => {
    setNewActivity({
      ...newActivity,
      [e.target.name]: e.target.value,
    });
  };

  const addActivity = (e) => {
    e.preventDefault();

    if (!newActivity.time || !newActivity.title) {
      alert("Please enter activity time and title.");
      return;
    }

    const activity = {
      id: Date.now(),
      ...newActivity,
    };

    setDays(
      days.map((day) =>
        day.day === selectedDay
          ? {
              ...day,
              activities: [...day.activities, activity],
            }
          : day
      )
    );

    setNewActivity({
      time: "",
      title: "",
      category: "Sightseeing",
      duration: "",
    });

    alert("Activity added successfully!");
  };

  const removeActivity = (activityId) => {
    setDays(
      days.map((day) =>
        day.day === selectedDay
          ? {
              ...day,
              activities: day.activities.filter(
                (activity) => activity.id !== activityId
              ),
            }
          : day
      )
    );
  };

  return (
    <div className="itinerary-builder-page">

      {/* Navbar */}
      <nav className="itinerary-navbar">

        <div
          className="itinerary-logo"
          onClick={() => navigate("/dashboard")}
        >
          🌍 <span>GlobeTrotter</span>
        </div>

        <div className="itinerary-nav-links">

          <button onClick={() => navigate("/dashboard")}>
            Home
          </button>

          <button onClick={() => navigate("/my-trips")}>
            My Trips
          </button>

          <button>
            Explore
          </button>

          <button>
            Budget
          </button>

        </div>

        <div className="itinerary-profile">
          <span>🔔</span>
          <div className="profile-circle">K</div>
          <span>Keyuri</span>
        </div>

      </nav>

      {/* Main */}
      <main className="itinerary-container">

        {/* Header */}
        <div className="itinerary-header">

          <div>
            <button
              className="back-itinerary"
              onClick={() => navigate("/my-trips")}
            >
              ← My Trips
            </button>

            <h1>Goa Adventure ✈️</h1>

            <p>
              15 Dec - 20 Dec 2026 • 3 Destinations
            </p>
          </div>

          <div className="header-actions">

            <button
              className="budget-button"
              onClick={() => navigate("/budget")}
            >
              💰 Budget
            </button>

            <button
              className="save-button"
              onClick={() => alert("Itinerary saved successfully!")}
            >
              Save Trip
            </button>

          </div>

        </div>

        {/* Progress */}
        <div className="trip-progress-card">

          <div className="progress-top">

            <div>
              <strong>Trip Planning Progress</strong>
              <span> 65% completed</span>
            </div>

            <span>
              6 / 9 activities planned
            </span>

          </div>

          <div className="large-progress">
            <div className="large-progress-fill"></div>
          </div>

        </div>

        {/* Builder Layout */}
        <div className="builder-layout">

          {/* Days Sidebar */}
          <aside className="days-sidebar">

            <div className="days-title">
              <h2>Your Itinerary</h2>
              <span>3 Days</span>
            </div>

            {days.map((day) => (
              <button
                key={day.day}
                className={
                  selectedDay === day.day
                    ? "day-card selected-day"
                    : "day-card"
                }
                onClick={() => setSelectedDay(day.day)}
              >

                <div className="day-number">
                  {day.day}
                </div>

                <div className="day-information">
                  <strong>Day {day.day}</strong>
                  <span>{day.date}</span>
                  <small>
                    📍 {day.city}
                  </small>
                </div>

                <div className="activity-count">
                  {day.activities.length}
                </div>

              </button>
            ))}

            <button
              className="add-day-button"
              onClick={() => alert("New day feature coming next!")}
            >
              + Add Day
            </button>

          </aside>

          {/* Main Day */}
          <section className="day-content">

            <div className="day-content-header">

              <div>
                <span>DAY {currentDay.day}</span>
                <h2>{currentDay.city}</h2>
                <p>{currentDay.date}</p>
              </div>

              <button
                className="change-city-button"
                onClick={() => alert("City search coming next!")}
              >
                📍 Change City
              </button>

            </div>

            {/* Activities */}
            <div className="activities-list">

              {currentDay.activities.map((activity) => (

                <div
                  className="activity-item"
                  key={activity.id}
                >

                  <div className="activity-time">
                    {activity.time}
                  </div>

                  <div className="timeline-line">
                    <div className="timeline-dot"></div>
                  </div>

                  <div className="activity-card">

                    <div className="activity-icon">
                      {activity.category === "Beach"
                        ? "🏖️"
                        : activity.category === "Food"
                        ? "🍴"
                        : activity.category === "Adventure"
                        ? "🏄"
                        : activity.category === "Shopping"
                        ? "🛍️"
                        : "📍"}
                    </div>

                    <div className="activity-information">

                      <h3>{activity.title}</h3>

                      <div className="activity-meta">

                        <span>
                          {activity.category}
                        </span>

                        <span>
                          ⏱ {activity.duration}
                        </span>

                      </div>

                    </div>

                    <button
                      className="delete-activity"
                      onClick={() =>
                        removeActivity(activity.id)
                      }
                    >
                      🗑️
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Add Activity */}
            <div className="add-activity-card">

              <h3>+ Add Activity</h3>

              <p>
                Add an activity to your Day {currentDay.day} itinerary.
              </p>

              <form onSubmit={addActivity}>

                <div className="activity-form-row">

                  <div>
                    <label>Time</label>

                    <input
                      type="time"
                      name="time"
                      value={newActivity.time}
                      onChange={handleActivityChange}
                    />
                  </div>

                  <div className="activity-title-input">
                    <label>Activity</label>

                    <input
                      type="text"
                      name="title"
                      placeholder="e.g. Visit Fort Aguada"
                      value={newActivity.title}
                      onChange={handleActivityChange}
                    />
                  </div>

                </div>

                <div className="activity-form-row">

                  <div>
                    <label>Category</label>

                    <select
                      name="category"
                      value={newActivity.category}
                      onChange={handleActivityChange}
                    >
                      <option> Sightseeing </option>
                      <option> Beach </option>
                      <option> Food </option>
                      <option> Adventure </option>
                      <option> Shopping </option>
                      <option> Nature </option>
                      <option> Culture </option>
                    </select>
                  </div>

                  <div>
                    <label>Duration</label>

                    <input
                      type="text"
                      name="duration"
                      placeholder="e.g. 2 hours"
                      value={newActivity.duration}
                      onChange={handleActivityChange}
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="add-activity-button"
                >
                  + Add Activity
                </button>

              </form>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default ItineraryBuilder;