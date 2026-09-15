import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./MyTrips.css";

function MyTrips() {
  const [filter, setFilter] = useState("All");

  const trips = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
      name: "Jaipur Adventure",
      location: "Jaipur, Rajasthan",
      dates: "12 Jun – 16 Jun 2026",
      travelers: "2 Travelers",
      budget: "₹25,000",
      status: "Upcoming",
      progress: 75,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
      name: "Goa Beach Trip",
      location: "Goa, India",
      dates: "20 May – 23 May 2026",
      travelers: "3 Travelers",
      budget: "₹18,000",
      status: "Completed",
      progress: 100,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=85",
      name: "Manali Escape",
      location: "Manali, Himachal Pradesh",
      dates: "10 Apr – 15 Apr 2026",
      travelers: "2 Travelers",
      budget: "₹20,000",
      status: "Completed",
      progress: 100,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=900&q=85",
      name: "Udaipur Weekend",
      location: "Udaipur, Rajasthan",
      dates: "05 Mar – 07 Mar 2026",
      travelers: "2 Travelers",
      budget: "₹12,000",
      status: "Completed",
      progress: 100,
    },
  ];

  const filteredTrips =
    filter === "All"
      ? trips
      : trips.filter((trip) => trip.status === filter);

  return (
    <div className="page">
      <Navbar />

      <main className="my-trips-page">
        <div className="container">

          <div className="my-trips-header">
            <div>
              <span className="label">MY JOURNEYS</span>
              <h1>My Trips</h1>
              <p>
                Manage your planned journeys and keep all your travel
                plans in one place.
              </p>
            </div>

            <Link to="/create-trip" className="btn">
              + Create New Trip
            </Link>
          </div>

          <div className="trip-summary-row">

            <div className="summary-box card">
              <span className="summary-icon">🗺️</span>
              <div>
                <strong>4</strong>
                <small>Total Trips</small>
              </div>
            </div>

            <div className="summary-box card">
              <span className="summary-icon">✈️</span>
              <div>
                <strong>1</strong>
                <small>Upcoming</small>
              </div>
            </div>

            <div className="summary-box card">
              <span className="summary-icon">✓</span>
              <div>
                <strong>3</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="summary-box card">
              <span className="summary-icon">💰</span>
              <div>
                <strong>₹75K</strong>
                <small>Total Budget</small>
              </div>
            </div>

          </div>

          <div className="trip-controls card">

            <div className="control-title">
              <span className="label">TRIP COLLECTION</span>
              <h2>Your Travel Plans</h2>
            </div>

            <div className="filter-buttons">
              {["All", "Upcoming", "Completed"].map((item) => (
                <button
                  key={item}
                  className={
                    filter === item
                      ? "filter-btn active"
                      : "filter-btn"
                  }
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

          </div>

          <div className="trips-grid">

            {filteredTrips.map((trip) => (
              <article className="trip-card card" key={trip.id}>

                <div className="trip-card-image">

                  <img src={trip.image} alt={trip.name} />

                  <span
                    className={
                      trip.status === "Upcoming"
                        ? "card-status upcoming"
                        : "card-status completed"
                    }
                  >
                    {trip.status}
                  </span>

                </div>

                <div className="trip-card-body">

                  <div className="trip-card-title">
                    <div>
                      <h2>{trip.name}</h2>
                      <p>📍 {trip.location}</p>
                    </div>

                    <button className="more-button">
                      ⋮
                    </button>
                  </div>

                  <div className="trip-card-details">

                    <div>
                      <span>📅</span>
                      <div>
                        <small>DATES</small>
                        <strong>{trip.dates}</strong>
                      </div>
                    </div>

                    <div>
                      <span>👥</span>
                      <div>
                        <small>TRAVELERS</small>
                        <strong>{trip.travelers}</strong>
                      </div>
                    </div>

                    <div>
                      <span>💰</span>
                      <div>
                        <small>BUDGET</small>
                        <strong>{trip.budget}</strong>
                      </div>
                    </div>

                  </div>

                  <div className="trip-card-progress">

                    <div className="progress-heading">
                      <span>Planning Progress</span>
                      <strong>{trip.progress}%</strong>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-value"
                        style={{ width: `${trip.progress}%` }}
                      ></div>
                    </div>

                  </div>

                  <div className="trip-card-actions">

                    <Link to="/itinerary" className="btn">
                      View Itinerary
                    </Link>

                    <Link
                      to="/itinerary-builder"
                      className="btn secondary"
                    >
                      Edit
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {filteredTrips.length === 0 && (
            <div className="empty-trips card">
              <div>🗺️</div>
              <h2>No trips found</h2>
              <p>
                There are no trips in this category yet.
              </p>
              <Link to="/create-trip" className="btn">
                Create Your First Trip
              </Link>
            </div>
          )}

          <div className="my-trips-tip">

            <div className="tip-icon">
              💡
            </div>

            <div>
              <span className="label">TRAVEL TIP</span>
              <h3>Keep your itinerary flexible</h3>
              <p>
                Leave some free time in your travel plan so you can
                explore unexpected places and experiences.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default MyTrips;