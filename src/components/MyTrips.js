import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyTrips.css";

function MyTrips() {
  const navigate = useNavigate();

  const trips = [
    {
      id: 1,
      name: "Goa Adventure",
      dates: "15 Dec - 20 Dec 2026",
      destinations: "Goa • Panaji • Calangute",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      budget: "₹25,000",
      progress: "65%",
    },
    {
      id: 2,
      name: "Bali Escape",
      dates: "10 Jan - 16 Jan 2027",
      destinations: "Bali • Ubud • Kuta",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      budget: "₹45,000",
      progress: "35%",
    },
    {
      id: 3,
      name: "Paris Memories",
      dates: "12 Jun - 18 Jun 2026",
      destinations: "Paris • Eiffel Tower • Louvre",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      budget: "₹80,000",
      progress: "100%",
    },
  ];

  return (
    <div className="my-trips-page">

      {/* Navbar */}
      <nav className="my-trips-navbar">

        <div
          className="my-trips-logo"
          onClick={() => navigate("/dashboard")}
        >
          🌍 <span>GlobeTrotter</span>
        </div>

        <div className="my-trips-nav-links">
          <button onClick={() => navigate("/dashboard")}>
            Home
          </button>

          <button className="active">
            My Trips
          </button>

          <button>
            Explore
          </button>

          <button>
            Budget
          </button>
        </div>

        <div className="my-trips-profile">
          <span>🔔</span>
          <div className="profile-circle">K</div>
          <span>Keyuri</span>
        </div>

      </nav>

      {/* Main */}
      <main className="my-trips-container">

        <div className="my-trips-header">

          <div>
            <h1>My Trips ✈️</h1>
            <p>
              Manage your journeys and continue planning your adventures.
            </p>
          </div>

          <button
            className="new-trip-button"
            onClick={() => navigate("/create-trip")}
          >
            + Create New Trip
          </button>

        </div>

        {/* Filter */}
        <div className="trip-filters">

          <button className="filter active-filter">
            All Trips
          </button>

          <button className="filter">
            Upcoming
          </button>

          <button className="filter">
            Completed
          </button>

        </div>

        {/* Trip Cards */}
        <div className="trips-grid">

          {trips.map((trip) => (
            <div className="trip-card" key={trip.id}>

              <div className="trip-image-container">

                <img
                  src={`${trip.image}?auto=format&fit=crop&w=900&q=80`}
                  alt={trip.name}
                />

                <span
                  className={
                    trip.status === "Completed"
                      ? "trip-status completed"
                      : "trip-status"
                  }
                >
                  {trip.status}
                </span>

              </div>

              <div className="trip-card-content">

                <h2>{trip.name}</h2>

                <p className="trip-date">
                  📅 {trip.dates}
                </p>

                <p className="trip-destinations">
                  📍 {trip.destinations}
                </p>

                <div className="trip-details">

                  <div>
                    <small>Budget</small>
                    <strong>{trip.budget}</strong>
                  </div>

                  <div>
                    <small>Planning</small>
                    <strong>{trip.progress}</strong>
                  </div>

                </div>

                <div className="planning-progress">
                  <div
                    className="progress-fill"
                    style={{ width: trip.progress }}
                  ></div>
                </div>

                <div className="trip-actions">

                  <button
                    className="view-trip"
                    onClick={() => navigate("/itinerary")}
                  >
                    View Trip
                  </button>

                  <button
                    className="edit-trip"
                    onClick={() => navigate("/itinerary-builder")}
                  >
                    ✏️ Edit
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Empty / Future Section */}
        <div className="trip-bottom-card">

          <div className="bottom-icon">🌎</div>

          <div>
            <h3>Ready for your next adventure?</h3>
            <p>
              Create another trip and start discovering new destinations.
            </p>
          </div>

          <button
            onClick={() => navigate("/create-trip")}
          >
            Plan a Trip
          </button>

        </div>

      </main>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-trip-nav">

        <button onClick={() => navigate("/dashboard")}>
          🏠
          <span>Home</span>
        </button>

        <button className="mobile-active">
          🧳
          <span>Trips</span>
        </button>

        <button>
          🔎
          <span>Explore</span>
        </button>

        <button>
          👤
          <span>Profile</span>
        </button>

      </div>

    </div>
  );
}

export default MyTrips;