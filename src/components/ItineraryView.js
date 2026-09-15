import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItineraryView.css";

function ItineraryView() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(1);

  const days = [
    {
      day: 1,
      date: "15 Dec 2026",
      city: "Goa",
      activities: [
        {
          time: "09:00 AM",
          title: "Breakfast at Beach Cafe",
          category: "Food",
          cost: 500,
          icon: "🍳"
        },
        {
          time: "11:00 AM",
          title: "Baga Beach Visit",
          category: "Sightseeing",
          cost: 0,
          icon: "🏖️"
        },
        {
          time: "02:00 PM",
          title: "Water Sports",
          category: "Adventure",
          cost: 1500,
          icon: "🌊"
        },
        {
          time: "07:00 PM",
          title: "Night Market",
          category: "Shopping",
          cost: 800,
          icon: "🛍️"
        }
      ]
    },
    {
      day: 2,
      date: "16 Dec 2026",
      city: "Goa",
      activities: [
        {
          time: "09:00 AM",
          title: "Fort Aguada",
          category: "Sightseeing",
          cost: 200,
          icon: "🏰"
        },
        {
          time: "01:00 PM",
          title: "Lunch",
          category: "Food",
          cost: 700,
          icon: "🍛"
        },
        {
          time: "04:00 PM",
          title: "Dolphin Cruise",
          category: "Adventure",
          cost: 1200,
          icon: "🐬"
        }
      ]
    },
    {
      day: 3,
      date: "17 Dec 2026",
      city: "Panaji",
      activities: [
        {
          time: "10:00 AM",
          title: "Panaji City Tour",
          category: "Sightseeing",
          cost: 500,
          icon: "🏙️"
        },
        {
          time: "01:00 PM",
          title: "Traditional Goan Lunch",
          category: "Food",
          cost: 900,
          icon: "🍽️"
        },
        {
          time: "05:00 PM",
          title: "Fontainhas Walk",
          category: "Culture",
          cost: 300,
          icon: "🚶"
        }
      ]
    },
    {
      day: 4,
      date: "18 Dec 2026",
      city: "Old Goa",
      activities: [
        {
          time: "09:30 AM",
          title: "Basilica of Bom Jesus",
          category: "Culture",
          cost: 0,
          icon: "⛪"
        },
        {
          time: "12:30 PM",
          title: "Lunch",
          category: "Food",
          cost: 600,
          icon: "🍴"
        },
        {
          time: "03:00 PM",
          title: "Old Goa Heritage Tour",
          category: "Culture",
          cost: 700,
          icon: "🏛️"
        }
      ]
    },
    {
      day: 5,
      date: "19 Dec 2026",
      city: "Goa",
      activities: [
        {
          time: "08:00 AM",
          title: "Sunrise Beach Walk",
          category: "Nature",
          cost: 0,
          icon: "🌅"
        },
        {
          time: "11:00 AM",
          title: "Scuba Diving",
          category: "Adventure",
          cost: 2000,
          icon: "🤿"
        },
        {
          time: "06:00 PM",
          title: "Sunset Cruise",
          category: "Nature",
          cost: 1500,
          icon: "⛵"
        }
      ]
    },
    {
      day: 6,
      date: "20 Dec 2026",
      city: "Goa",
      activities: [
        {
          time: "09:00 AM",
          title: "Shopping",
          category: "Shopping",
          cost: 1200,
          icon: "🛒"
        },
        {
          time: "12:00 PM",
          title: "Final Lunch",
          category: "Food",
          cost: 800,
          icon: "🍱"
        },
        {
          time: "04:00 PM",
          title: "Airport Transfer",
          category: "Transport",
          cost: 1000,
          icon: "🚕"
        }
      ]
    }
  ];

  const currentDay = days.find((item) => item.day === selectedDay);

  const totalActivities = days.reduce(
    (total, day) => total + day.activities.length,
    0
  );

  const estimatedCost = days.reduce(
    (total, day) =>
      total +
      day.activities.reduce((sum, activity) => sum + activity.cost, 0),
    0
  );

  return (
    <div className="itinerary-page">

      {/* NAVBAR */}
      <nav className="itinerary-navbar">
        <div
          className="itinerary-logo"
          onClick={() => navigate("/dashboard")}
        >
          <span>🌍</span>
          <div>
            <strong>GlobeTrotter</strong>
            <small>Travel your way</small>
          </div>
        </div>

        <div className="itinerary-nav-links">
          <button onClick={() => navigate("/dashboard")}>Home</button>
          <button onClick={() => navigate("/my-trips")}>My Trips</button>
          <button className="active">Itinerary</button>
          <button onClick={() => navigate("/budget")}>Budget</button>
        </div>

        <div className="itinerary-profile">
          <div className="profile-avatar">K</div>
          <span>Keyuri</span>
        </div>
      </nav>

      {/* MAIN */}
      <main className="itinerary-container">

        {/* HEADER */}
        <section className="itinerary-header">
          <div>
            <span className="trip-label">MY ITINERARY</span>
            <h1>Goa Adventure 🌴</h1>
            <p>📅 15 Dec – 20 Dec 2026 &nbsp; • &nbsp; 📍 Goa, India</p>
          </div>

          <div className="itinerary-header-buttons">
            <button
              className="share-button"
              onClick={() => alert("Trip sharing link copied!")}
            >
              🔗 Share Trip
            </button>

            <button
              className="edit-button"
              onClick={() => navigate("/itinerary-builder")}
            >
              ✏️ Edit Itinerary
            </button>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="itinerary-summary">

          <div className="summary-card">
            <div className="summary-icon">📅</div>
            <div>
              <span>Duration</span>
              <strong>6 Days</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📍</div>
            <div>
              <span>Cities</span>
              <strong>3 Cities</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <div>
              <span>Activities</span>
              <strong>{totalActivities}</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">💰</div>
            <div>
              <span>Estimated Cost</span>
              <strong>₹{estimatedCost.toLocaleString()}</strong>
            </div>
          </div>

        </section>

        {/* DAY SELECTOR */}
        <section className="day-selector-section">
          <div className="section-heading">
            <h2>Your Trip Timeline</h2>
            <span>6 days planned</span>
          </div>

          <div className="day-selector">
            {days.map((day) => (
              <button
                key={day.day}
                className={selectedDay === day.day ? "selected" : ""}
                onClick={() => setSelectedDay(day.day)}
              >
                <span>Day {day.day}</span>
                <small>{day.date}</small>
              </button>
            ))}
          </div>
        </section>

        {/* CURRENT DAY */}
        <section className="timeline-section">

          <div className="timeline-title">
            <div>
              <span>DAY {currentDay.day}</span>
              <h2>{currentDay.city}</h2>
            </div>

            <div className="timeline-date">
              {currentDay.date}
            </div>
          </div>

          <div className="timeline">

            {currentDay.activities.map((activity, index) => (
              <div className="timeline-item" key={index}>

                <div className="timeline-time">
                  {activity.time}
                </div>

                <div className="timeline-line">
                  <div className="timeline-dot">
                    {activity.icon}
                  </div>
                </div>

                <div className="activity-card">

                  <div className="activity-main">
                    <h3>{activity.title}</h3>

                    <div className="activity-info">
                      <span>{activity.category}</span>
                      <span>💰 ₹{activity.cost.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    className="activity-more"
                    onClick={() =>
                      alert(`${activity.title} selected`)
                    }
                  >
                    ⋮
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* TIP */}
        <section className="planning-tip">
          <div className="tip-icon">💡</div>
          <div>
            <h3>Smart Planning Tip</h3>
            <p>
              Keep some free time between activities so you can explore
              unexpected places and enjoy your trip without rushing.
            </p>
          </div>
        </section>

        {/* BOTTOM ACTIONS */}
        <section className="itinerary-actions">

          <button onClick={() => navigate("/dashboard")}>
            ← Dashboard
          </button>

          <button onClick={() => navigate("/budget")}>
            💰 View Budget
          </button>

          <button onClick={() => navigate("/itinerary-builder")}>
            ✏️ Edit Trip
          </button>

        </section>

      </main>

      {/* MOBILE NAV */}
      <div className="mobile-itinerary-nav">
        <button onClick={() => navigate("/dashboard")}>
          🏠
          <span>Home</span>
        </button>

        <button onClick={() => navigate("/my-trips")}>
          🧳
          <span>Trips</span>
        </button>

        <button className="mobile-active">
          📅
          <span>Plan</span>
        </button>

        <button onClick={() => navigate("/budget")}>
          💰
          <span>Budget</span>
        </button>
      </div>

    </div>
  );
}

export default ItineraryView;