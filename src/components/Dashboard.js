import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      icon: "🗺️",
      value: "4",
      title: "My Trips",
      text: "Trips planned",
    },
    {
      icon: "📍",
      value: "12",
      title: "Destinations",
      text: "Places explored",
    },
    {
      icon: "🎯",
      value: "28",
      title: "Activities",
      text: "Activities planned",
    },
    {
      icon: "💰",
      value: "₹25K",
      title: "Total Budget",
      text: "Travel budget",
    },
  ];

  const quickActions = [
    {
      icon: "➕",
      title: "Create New Trip",
      text: "Start planning your journey",
      path: "/create-trip",
    },
    {
      icon: "🌍",
      title: "Explore Destinations",
      text: "Discover amazing places",
      path: "/explore",
    },
    {
      icon: "🎯",
      title: "Find Activities",
      text: "Discover things to do",
      path: "/activities",
    },
    {
      icon: "💰",
      title: "Manage Budget",
      text: "Track your travel expenses",
      path: "/budget",
    },
  ];

  const recentTrips = [
    {
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80",
      name: "Jaipur Adventure",
      location: "Jaipur, Rajasthan",
      dates: "12 Jun – 16 Jun 2026",
      status: "Upcoming",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500&q=80",
      name: "Goa Beach Trip",
      location: "Goa, India",
      dates: "20 May – 23 May 2026",
      status: "Completed",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=500&q=80",
      name: "Manali Escape",
      location: "Manali, Himachal Pradesh",
      dates: "10 Apr – 15 Apr 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="page">
      <Navbar />

      <main className="dashboard-page">
        <div className="container">

          <section className="dashboard-header">
            <div>
              <span className="label">TRAVEL DASHBOARD</span>
              <h1>Welcome Back, Traveler!</h1>
              <p>
                Plan your next adventure, manage your trips and discover
                amazing destinations.
              </p>
            </div>

            <Link to="/create-trip" className="btn">
              + Create New Trip
            </Link>
          </section>

          <section className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card card" key={stat.title}>
                <div className="stat-icon">{stat.icon}</div>

                <div className="stat-content">
                  <strong>{stat.value}</strong>
                  <span>{stat.title}</span>
                  <small>{stat.text}</small>
                </div>
              </div>
            ))}
          </section>

          <section className="dashboard-grid">

            <div className="upcoming-section card">
              <div className="section-header">
                <div>
                  <span className="label">UPCOMING TRIP</span>
                  <h2>Jaipur Adventure</h2>
                </div>

                <span className="status-badge">Upcoming</span>
              </div>

              <div className="trip-main">

                <div className="trip-image">
                  <img
                    src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=85"
                    alt="Jaipur"
                  />

                  <div className="trip-image-overlay">
                    <strong>JAIPUR</strong>
                    <small>Rajasthan, India</small>
                  </div>
                </div>

                <div className="trip-details">

                  <div className="trip-location">
                    📍 Jaipur, Rajasthan
                  </div>

                  <div className="trip-info">

                    <div className="info-item">
                      <span>📅</span>
                      <div>
                        <small>DATES</small>
                        <strong>12 – 16 June 2026</strong>
                      </div>
                    </div>

                    <div className="info-item">
                      <span>👥</span>
                      <div>
                        <small>TRAVELERS</small>
                        <strong>2 People</strong>
                      </div>
                    </div>

                    <div className="info-item">
                      <span>💰</span>
                      <div>
                        <small>BUDGET</small>
                        <strong>₹25,000</strong>
                      </div>
                    </div>

                  </div>

                  <div className="trip-progress">
                    <div className="progress-header">
                      <span>Planning Progress</span>
                      <strong>75%</strong>
                    </div>

                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                  </div>

                  <div className="trip-buttons">
                    <Link to="/itinerary" className="btn">
                      View Itinerary
                    </Link>

                    <Link
                      to="/itinerary-builder"
                      className="btn secondary"
                    >
                      Continue Planning
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            <div className="quick-section card">

              <div className="section-header">
                <div>
                  <span className="label">PLANNING TOOLS</span>
                  <h2>Quick Actions</h2>
                </div>
              </div>

              <div className="quick-list">
                {quickActions.map((action) => (
                  <Link
                    to={action.path}
                    className="quick-item"
                    key={action.title}
                  >
                    <div className="quick-icon">
                      {action.icon}
                    </div>

                    <div className="quick-content">
                      <strong>{action.title}</strong>
                      <small>{action.text}</small>
                    </div>

                    <span className="quick-arrow">→</span>
                  </Link>
                ))}
              </div>

            </div>
          </section>

          <section className="recent-section">

            <div className="section-header recent-header">
              <div>
                <span className="label">YOUR TRAVEL HISTORY</span>
                <h2>Recent Trips</h2>
              </div>

              <Link to="/my-trips" className="view-link">
                View All Trips →
              </Link>
            </div>

            <div className="recent-grid">

              {recentTrips.map((trip) => (
                <div className="recent-card card" key={trip.name}>

                  <div className="recent-image">
                    <img src={trip.image} alt={trip.name} />
                  </div>

                  <div className="recent-content">

                    <div className="recent-title">
                      <h3>{trip.name}</h3>

                      <span
                        className={
                          trip.status === "Upcoming"
                            ? "trip-status upcoming"
                            : "trip-status completed"
                        }
                      >
                        {trip.status}
                      </span>
                    </div>

                    <p>📍 {trip.location}</p>
                    <p>📅 {trip.dates}</p>

                    <Link to="/itinerary">
                      View Trip →
                    </Link>

                  </div>

                </div>
              ))}

            </div>
          </section>

          <section className="destination-section">

            <div className="section-header recent-header">
              <div>
                <span className="label">DISCOVER</span>
                <h2>Popular Destinations</h2>
              </div>

              <Link to="/explore" className="view-link">
                Explore More →
              </Link>
            </div>

            <div className="destination-grid">

              <Link to="/create-trip" className="destination-card">
                <img
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=85"
                  alt="Jaipur"
                />

                <div className="destination-overlay">
                  <span>RAJASTHAN</span>
                  <h3>Jaipur</h3>
                  <p>Pink City • 2–4 Days</p>
                </div>
              </Link>

              <Link to="/create-trip" className="destination-card">
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=85"
                  alt="Goa"
                />

                <div className="destination-overlay">
                  <span>INDIA</span>
                  <h3>Goa</h3>
                  <p>Beaches • 3–5 Days</p>
                </div>
              </Link>

              <Link to="/create-trip" className="destination-card">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=85"
                  alt="Manali"
                />

                <div className="destination-overlay">
                  <span>HIMACHAL PRADESH</span>
                  <h3>Manali</h3>
                  <p>Mountains • 4–6 Days</p>
                </div>
              </Link>

            </div>
          </section>

          <section className="dashboard-tip">

            <div className="tip-icon">
              💡
            </div>

            <div className="tip-content">
              <span className="label">SMART TRAVEL TIP</span>
              <h3>Plan smart, travel better.</h3>
              <p>
                Group nearby activities together to save travel time
                and make your journey more comfortable.
              </p>
            </div>

            <Link to="/itinerary-builder" className="btn">
              Build Itinerary →
            </Link>

          </section>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;