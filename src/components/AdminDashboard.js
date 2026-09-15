import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  const stats = [
    {
      icon: "👥",
      title: "Total Users",
      value: "12,480",
      change: "+12.5%",
      text: "from last month"
    },
    {
      icon: "🧳",
      title: "Total Trips",
      value: "8,742",
      change: "+8.2%",
      text: "from last month"
    },
    {
      icon: "📍",
      title: "Destinations",
      value: "356",
      change: "+5.4%",
      text: "new destinations"
    },
    {
      icon: "💰",
      title: "Trip Value",
      value: "₹48.6L",
      change: "+15.8%",
      text: "from last month"
    }
  ];

  const popularCities = [
    {
      city: "Goa",
      country: "India",
      trips: "2,840",
      percentage: 88,
      icon: "🌴"
    },
    {
      city: "Bali",
      country: "Indonesia",
      trips: "2,310",
      percentage: 75,
      icon: "🏝️"
    },
    {
      city: "Paris",
      country: "France",
      trips: "1,960",
      percentage: 64,
      icon: "🗼"
    },
    {
      city: "Dubai",
      country: "UAE",
      trips: "1,740",
      percentage: 57,
      icon: "🏙️"
    },
    {
      city: "Tokyo",
      country: "Japan",
      trips: "1,420",
      percentage: 46,
      icon: "⛩️"
    }
  ];

  const recentTrips = [
    {
      user: "Aarav Patel",
      trip: "Goa Adventure",
      destination: "Goa, India",
      date: "15 Dec 2026",
      status: "Active"
    },
    {
      user: "Riya Shah",
      trip: "Bali Escape",
      destination: "Bali, Indonesia",
      date: "10 Jan 2027",
      status: "Upcoming"
    },
    {
      user: "Dev Mehta",
      trip: "European Tour",
      destination: "Paris, France",
      date: "18 Feb 2027",
      status: "Upcoming"
    },
    {
      user: "Anaya Joshi",
      trip: "Dubai Holiday",
      destination: "Dubai, UAE",
      date: "05 Mar 2027",
      status: "Upcoming"
    }
  ];

  const activityData = [
    {
      month: "Jan",
      value: 45
    },
    {
      month: "Feb",
      value: 62
    },
    {
      month: "Mar",
      value: 55
    },
    {
      month: "Apr",
      value: 78
    },
    {
      month: "May",
      value: 68
    },
    {
      month: "Jun",
      value: 88
    },
    {
      month: "Jul",
      value: 82
    },
    {
      month: "Aug",
      value: 96
    },
    {
      month: "Sep",
      value: 91
    },
    {
      month: "Oct",
      value: 100
    },
    {
      month: "Nov",
      value: 94
    },
    {
      month: "Dec",
      value: 108
    }
  ];

  const handleMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="admin-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="admin-sidebar">

        <div
          className="admin-brand"
          onClick={() => navigate("/dashboard")}
        >
          <span>🌍</span>

          <div>
            <strong>GlobeTrotter</strong>
            <small>Admin Panel</small>
          </div>
        </div>

        <div className="admin-profile">

          <div className="admin-avatar">
            A
          </div>

          <div>
            <strong>Admin User</strong>
            <small>Administrator</small>
          </div>

        </div>

        <div className="admin-menu">

          <button
            className={
              activeMenu === "dashboard"
                ? "admin-menu-active"
                : ""
            }
            onClick={() => handleMenu("dashboard")}
          >
            <span>📊</span>
            Dashboard
          </button>

          <button
            className={
              activeMenu === "users"
                ? "admin-menu-active"
                : ""
            }
            onClick={() => handleMenu("users")}
          >
            <span>👥</span>
            Users
          </button>

          <button
            className={
              activeMenu === "trips"
                ? "admin-menu-active"
                : ""
            }
            onClick={() => handleMenu("trips")}
          >
            <span>🧳</span>
            Trips
          </button>

          <button
            className={
              activeMenu === "destinations"
                ? "admin-menu-active"
                : ""
            }
            onClick={() => handleMenu("destinations")}
          >
            <span>📍</span>
            Destinations
          </button>

          <button
            className={
              activeMenu === "activities"
                ? "admin-menu-active"
                : ""
            }
            onClick={() => handleMenu("activities")}
          >
            <span>🎯</span>
            Activities
          </button>

          <button
            className={
              activeMenu === "analytics"
                ? "admin-menu-active"
                : ""
            }
            onClick={() => handleMenu("analytics")}
          >
            <span>📈</span>
            Analytics
          </button>

          <button
            className={
              activeMenu === "settings"
                ? "admin-menu-active"
                : ""
            }
            onClick={() => handleMenu("settings")}
          >
            <span>⚙️</span>
            Settings
          </button>

        </div>

        <div className="admin-sidebar-bottom">

          <button
            onClick={() => navigate("/dashboard")}
          >
            ← User Dashboard
          </button>

          <button
            onClick={() => navigate("/")}
          >
            🚪 Logout
          </button>

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="admin-main">

        {/* ================= TOPBAR ================= */}

        <header className="admin-topbar">

          <div className="admin-mobile-brand">
            🌍 GlobeTrotter
          </div>

          <div className="admin-search">

            <span>🔎</span>

            <input
              type="text"
              placeholder="Search users, trips or destinations..."
            />

          </div>

          <div className="admin-top-actions">

            <button>
              🔔
              <span className="notification-dot"></span>
            </button>

            <div className="admin-top-user">

              <div className="admin-small-avatar">
                A
              </div>

              <div>
                <strong>Admin</strong>
                <small>Administrator</small>
              </div>

            </div>

          </div>

        </header>

        {/* ================= CONTENT ================= */}

        <div className="admin-content">

          {/* HEADER */}

          <section className="admin-heading">

            <div>
              <span>
                ADMINISTRATION
              </span>

              <h1>
                Analytics Dashboard
              </h1>

              <p>
                Monitor GlobeTrotter activity and travel trends.
              </p>
            </div>

            <select
              value={selectedPeriod}
              onChange={(event) =>
                setSelectedPeriod(event.target.value)
              }
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
              <option>This Year</option>
            </select>

          </section>

          {/* ================= STATS ================= */}

          <section className="admin-stats">

            {stats.map((stat, index) => (

              <div
                className="admin-stat-card"
                key={index}
              >

                <div className="admin-stat-top">

                  <div className="admin-stat-icon">
                    {stat.icon}
                  </div>

                  <span className="stat-change">
                    {stat.change}
                  </span>

                </div>

                <p>
                  {stat.title}
                </p>

                <h2>
                  {stat.value}
                </h2>

                <small>
                  {stat.text}
                </small>

              </div>

            ))}

          </section>

          {/* ================= ANALYTICS GRID ================= */}

          <section className="admin-analytics-grid">

            {/* USER ACTIVITY CHART */}

            <div className="analytics-card activity-chart-card">

              <div className="analytics-card-header">

                <div>
                  <span>
                    TRAVEL ACTIVITY
                  </span>

                  <h2>
                    Trips Created
                  </h2>
                </div>

                <button>
                  ⋮
                </button>

              </div>

              <div className="chart-area">

                <div className="chart-y-axis">
                  <span>120</span>
                  <span>90</span>
                  <span>60</span>
                  <span>30</span>
                  <span>0</span>
                </div>

                <div className="chart-bars">

                  {activityData.map((item, index) => (

                    <div
                      className="chart-column"
                      key={index}
                    >

                      <div className="chart-bar-wrapper">

                        <div
                          className="chart-bar"
                          style={{
                            height: `${item.value * 0.65}%`
                          }}
                        ></div>

                      </div>

                      <span>
                        {item.month}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* TRIP TYPES */}

            <div className="analytics-card trip-type-card">

              <div className="analytics-card-header">

                <div>
                  <span>
                    TRIP ANALYSIS
                  </span>

                  <h2>
                    Trip Types
                  </h2>
                </div>

              </div>

              <div className="trip-donut">

                <div className="trip-donut-inner">

                  <strong>
                    8,742
                  </strong>

                  <span>
                    Total Trips
                  </span>

                </div>

              </div>

              <div className="trip-legend">

                <div>
                  <span className="legend-dot leisure"></span>
                  Leisure
                  <strong>52%</strong>
                </div>

                <div>
                  <span className="legend-dot adventure"></span>
                  Adventure
                  <strong>24%</strong>
                </div>

                <div>
                  <span className="legend-dot culture"></span>
                  Culture
                  <strong>14%</strong>
                </div>

                <div>
                  <span className="legend-dot business"></span>
                  Business
                  <strong>10%</strong>
                </div>

              </div>

            </div>

          </section>

          {/* ================= LOWER GRID ================= */}

          <section className="admin-lower-grid">

            {/* POPULAR DESTINATIONS */}

            <div className="analytics-card popular-card">

              <div className="analytics-card-header">

                <div>
                  <span>
                    DESTINATION INSIGHTS
                  </span>

                  <h2>
                    Popular Destinations
                  </h2>
                </div>

                <button
                  onClick={() =>
                    handleMenu("destinations")
                  }
                >
                  View All →
                </button>

              </div>

              <div className="popular-list">

                {popularCities.map((city, index) => (

                  <div
                    className="popular-row"
                    key={index}
                  >

                    <div className="popular-city">

                      <div className="city-admin-icon">
                        {city.icon}
                      </div>

                      <div>
                        <strong>
                          {city.city}
                        </strong>

                        <small>
                          {city.country}
                        </small>
                      </div>

                    </div>

                    <div className="popular-progress">

                      <div className="progress-background">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${city.percentage}%`
                          }}
                        ></div>
                      </div>

                    </div>

                    <span className="popular-trips">
                      {city.trips}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* QUICK INSIGHTS */}

            <div className="analytics-card insights-card">

              <div className="analytics-card-header">

                <div>
                  <span>
                    QUICK INSIGHTS
                  </span>

                  <h2>
                    Platform Overview
                  </h2>
                </div>

              </div>

              <div className="insight-item">

                <div className="insight-icon">
                  📈
                </div>

                <div>
                  <strong>
                    User Growth
                  </strong>

                  <p>
                    Users increased by 12.5% this month.
                  </p>
                </div>

              </div>

              <div className="insight-item">

                <div className="insight-icon">
                  🌍
                </div>

                <div>
                  <strong>
                    Top Destination
                  </strong>

                  <p>
                    Goa is currently the most planned destination.
                  </p>
                </div>

              </div>

              <div className="insight-item">

                <div className="insight-icon">
                  💰
                </div>

                <div>
                  <strong>
                    Average Trip Budget
                  </strong>

                  <p>
                    Users spend approximately ₹18,500 per trip.
                  </p>
                </div>

              </div>

              <div className="insight-item">

                <div className="insight-icon">
                  ⭐
                </div>

                <div>
                  <strong>
                    Most Popular Activity
                  </strong>

                  <p>
                    Beach and sightseeing activities lead.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* ================= RECENT TRIPS ================= */}

          <section className="analytics-card recent-trips-card">

            <div className="analytics-card-header">

              <div>
                <span>
                  RECENT ACTIVITY
                </span>

                <h2>
                  Recent Trips
                </h2>
              </div>

              <button
                onClick={() => handleMenu("trips")}
              >
                View All →
              </button>

            </div>

            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>
                    <th>User</th>
                    <th>Trip</th>
                    <th>Destination</th>
                    <th>Start Date</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {recentTrips.map((trip, index) => (

                    <tr key={index}>

                      <td>
                        <div className="table-user">

                          <div className="table-avatar">
                            {trip.user.charAt(0)}
                          </div>

                          <strong>
                            {trip.user}
                          </strong>

                        </div>
                      </td>

                      <td>
                        {trip.trip}
                      </td>

                      <td>
                        {trip.destination}
                      </td>

                      <td>
                        {trip.date}
                      </td>

                      <td>

                        <span
                          className={
                            trip.status === "Active"
                              ? "status active-status"
                              : "status upcoming-status"
                          }
                        >
                          {trip.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </div>

      </main>

      {/* ================= MOBILE NAV ================= */}

      <div className="admin-mobile-nav">

        <button
          className="admin-mobile-active"
          onClick={() => handleMenu("dashboard")}
        >
          📊
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => handleMenu("users")}
        >
          👥
          <span>Users</span>
        </button>

        <button
          onClick={() => handleMenu("trips")}
        >
          🧳
          <span>Trips</span>
        </button>

        <button
          onClick={() => handleMenu("analytics")}
        >
          📈
          <span>Analytics</span>
        </button>

      </div>

    </div>
  );
}

export default AdminDashboard;