import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TripCalendar.css";

function TripCalendar() {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(1);

  const days = [
    {
      day: 1,
      date: "15 Dec",
      city: "Goa",
      title: "Arrival & Beach Day",
      activities: [
        {
          time: "10:00 AM",
          title: "Airport Pickup",
          type: "Transport",
          icon: "🚗",
          cost: 1200,
        },
        {
          time: "12:00 PM",
          title: "Hotel Check-in",
          type: "Stay",
          icon: "🏨",
          cost: 2500,
        },
        {
          time: "04:00 PM",
          title: "Baga Beach",
          type: "Sightseeing",
          icon: "🏖️",
          cost: 500,
        },
        {
          time: "08:00 PM",
          title: "Beachside Dinner",
          type: "Food",
          icon: "🍽️",
          cost: 800,
        },
      ],
    },

    {
      day: 2,
      date: "16 Dec",
      city: "North Goa",
      title: "Adventure & Water Sports",
      activities: [
        {
          time: "09:00 AM",
          title: "Breakfast",
          type: "Food",
          icon: "🥐",
          cost: 400,
        },
        {
          time: "11:00 AM",
          title: "Water Sports",
          type: "Adventure",
          icon: "🌊",
          cost: 1800,
        },
        {
          time: "03:00 PM",
          title: "Fort Aguada",
          type: "Sightseeing",
          icon: "🏰",
          cost: 300,
        },
        {
          time: "07:00 PM",
          title: "Night Market",
          type: "Shopping",
          icon: "🛍️",
          cost: 1000,
        },
      ],
    },

    {
      day: 3,
      date: "17 Dec",
      city: "Panaji",
      title: "Culture & City Exploration",
      activities: [
        {
          time: "09:30 AM",
          title: "Panaji City Tour",
          type: "Culture",
          icon: "🏛️",
          cost: 600,
        },
        {
          time: "12:30 PM",
          title: "Goan Lunch",
          type: "Food",
          icon: "🍛",
          cost: 700,
        },
        {
          time: "03:00 PM",
          title: "Fontainhas Walk",
          type: "Culture",
          icon: "🚶",
          cost: 400,
        },
        {
          time: "08:00 PM",
          title: "River Cruise",
          type: "Entertainment",
          icon: "⛵",
          cost: 1200,
        },
      ],
    },

    {
      day: 4,
      date: "18 Dec",
      city: "South Goa",
      title: "Nature & Relaxation",
      activities: [
        {
          time: "08:00 AM",
          title: "Travel to South Goa",
          type: "Transport",
          icon: "🚙",
          cost: 900,
        },
        {
          time: "11:00 AM",
          title: "Palolem Beach",
          type: "Nature",
          icon: "🌴",
          cost: 500,
        },
        {
          time: "04:00 PM",
          title: "Dolphin Spotting",
          type: "Adventure",
          icon: "🐬",
          cost: 1500,
        },
        {
          time: "08:00 PM",
          title: "Seafood Dinner",
          type: "Food",
          icon: "🦐",
          cost: 1000,
        },
      ],
    },

    {
      day: 5,
      date: "19 Dec",
      city: "South Goa",
      title: "Relax & Explore",
      activities: [
        {
          time: "09:00 AM",
          title: "Breakfast",
          type: "Food",
          icon: "☕",
          cost: 400,
        },
        {
          time: "11:00 AM",
          title: "Spice Plantation",
          type: "Nature",
          icon: "🌿",
          cost: 800,
        },
        {
          time: "04:00 PM",
          title: "Colva Beach",
          type: "Sightseeing",
          icon: "🏝️",
          cost: 400,
        },
        {
          time: "07:30 PM",
          title: "Local Shopping",
          type: "Shopping",
          icon: "🛒",
          cost: 900,
        },
      ],
    },

    {
      day: 6,
      date: "20 Dec",
      city: "Goa",
      title: "Departure",
      activities: [
        {
          time: "08:00 AM",
          title: "Breakfast",
          type: "Food",
          icon: "🥞",
          cost: 400,
        },
        {
          time: "10:00 AM",
          title: "Hotel Checkout",
          type: "Stay",
          icon: "🏨",
          cost: 0,
        },
        {
          time: "11:00 AM",
          title: "Last Minute Shopping",
          type: "Shopping",
          icon: "🛍️",
          cost: 800,
        },
        {
          time: "03:00 PM",
          title: "Airport Transfer",
          type: "Transport",
          icon: "🚕",
          cost: 1200,
        },
      ],
    },
  ];

  const currentDay = days.find((item) => item.day === selectedDay);

  const dayTotal = currentDay.activities.reduce(
    (total, activity) => total + activity.cost,
    0
  );

  return (
    <div className="calendar-page">

      {/* NAVBAR */}
      <nav className="calendar-navbar">

        <div
          className="calendar-logo"
          onClick={() => navigate("/dashboard")}
        >
          <span>🌍</span>
          <strong>GlobeTrotter</strong>
        </div>

        <div className="calendar-nav-links">

          <button onClick={() => navigate("/dashboard")}>
            Home
          </button>

          <button onClick={() => navigate("/my-trips")}>
            My Trips
          </button>

          <button
            className="calendar-active"
            onClick={() => navigate("/calendar")}
          >
            Calendar
          </button>

          <button onClick={() => navigate("/budget")}>
            Budget
          </button>

        </div>

        <div className="calendar-user">
          <div className="calendar-avatar">K</div>
          <span>Keyuri</span>
        </div>

      </nav>


      {/* MAIN */}
      <main className="calendar-container">

        {/* HEADER */}
        <section className="calendar-header">

          <div>

            <span className="calendar-label">
              TRIP SCHEDULE
            </span>

            <h1>
              Trip Calendar & Timeline
            </h1>

            <p>
              Organize every activity of your Goa Adventure
              in one simple timeline.
            </p>

          </div>

          <div className="calendar-header-buttons">

            <button
              className="calendar-back-button"
              onClick={() => navigate("/itinerary")}
            >
              ← Itinerary
            </button>

            <button
              className="calendar-budget-button"
              onClick={() => navigate("/budget")}
            >
              💰 View Budget
            </button>

          </div>

        </section>


        {/* TRIP INFO */}
        <section className="trip-info-card">

          <div className="trip-info-left">

            <div className="trip-info-icon">
              🌴
            </div>

            <div>

              <span>
                YOUR CURRENT TRIP
              </span>

              <h2>
                Goa Adventure
              </h2>

              <p>
                📅 15 Dec 2026 – 20 Dec 2026
                &nbsp; • &nbsp;
                📍 Goa, India
              </p>

            </div>

          </div>

          <div className="trip-info-days">
            <strong>6</strong>
            <span>Days</span>
          </div>

        </section>


        {/* DAY SELECTOR */}
        <section className="day-selector-card">

          <div className="day-selector-header">

            <div>
              <span>SELECT DAY</span>
              <h2>Trip Timeline</h2>
            </div>

            <div className="timeline-total">
              6 Days • 16 Activities
            </div>

          </div>


          <div className="day-selector">

            {days.map((day) => (

              <button
                key={day.day}
                className={
                  selectedDay === day.day
                    ? "day-button selected"
                    : "day-button"
                }
                onClick={() => setSelectedDay(day.day)}
              >

                <span>
                  Day {day.day}
                </span>

                <strong>
                  {day.date}
                </strong>

                <small>
                  {day.city}
                </small>

              </button>

            ))}

          </div>

        </section>


        {/* SELECTED DAY */}
        <section className="selected-day-section">

          <div className="selected-day-heading">

            <div>

              <span>
                DAY {currentDay.day} • {currentDay.date}
              </span>

              <h2>
                {currentDay.title}
              </h2>

              <p>
                📍 {currentDay.city}
              </p>

            </div>

            <div className="day-cost">

              <span>
                Day Cost
              </span>

              <strong>
                ₹{dayTotal.toLocaleString("en-IN")}
              </strong>

            </div>

          </div>


          {/* TIMELINE */}
          <div className="timeline">

            {currentDay.activities.map((activity, index) => (

              <div
                className="timeline-item"
                key={index}
              >

                <div className="timeline-time">
                  {activity.time}
                </div>

                <div className="timeline-line">

                  <div className="timeline-dot">
                    {activity.icon}
                  </div>

                </div>

                <div className="timeline-content">

                  <div className="timeline-content-top">

                    <div>

                      <span className="activity-type">
                        {activity.type}
                      </span>

                      <h3>
                        {activity.title}
                      </h3>

                    </div>

                    <strong className="activity-cost">
                      ₹{activity.cost.toLocaleString("en-IN")}
                    </strong>

                  </div>

                  <button
                    className="timeline-details"
                    onClick={() =>
                      alert(
                        `${activity.title}\nTime: ${activity.time}\nCategory: ${activity.type}\nCost: ₹${activity.cost}`
                      )
                    }
                  >
                    View Details →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* TRAVEL TIP */}
        <section className="calendar-tip">

          <div className="tip-icon">
            💡
          </div>

          <div>

            <span>
              SMART TRAVEL TIP
            </span>

            <h3>
              Keep some free time in your schedule
            </h3>

            <p>
              Don't over-plan every hour. Leave some flexible
              time to discover local places, relax, or handle
              unexpected changes.
            </p>

          </div>

        </section>


        {/* ACTIONS */}
        <div className="calendar-actions">

          <button
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

          <button
            onClick={() => navigate("/itinerary-builder")}
          >
            ✏️ Edit Timeline
          </button>

          <button
            onClick={() => navigate("/budget")}
          >
            💰 Check Budget
          </button>

        </div>

      </main>


      {/* MOBILE NAV */}
      <div className="calendar-mobile-nav">

        <button onClick={() => navigate("/dashboard")}>
          🏠
          <span>Home</span>
        </button>

        <button onClick={() => navigate("/my-trips")}>
          🧳
          <span>Trips</span>
        </button>

        <button className="mobile-calendar-active">
          📅
          <span>Calendar</span>
        </button>

        <button onClick={() => navigate("/budget")}>
          💰
          <span>Budget</span>
        </button>

      </div>

    </div>
  );
}

export default TripCalendar;