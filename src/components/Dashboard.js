import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* ================= NAVBAR ================= */}

      <nav className="dashboard-navbar">

        <div
          className="dashboard-logo"
          onClick={() => navigate("/dashboard")}
        >
          <span>🌍</span>
          <strong>GlobeTrotter</strong>
        </div>

        <div className="dashboard-nav-links">

          <button
            className="dashboard-nav-active"
            onClick={() => navigate("/dashboard")}
          >
            Home
          </button>

          <button onClick={() => navigate("/my-trips")}>
            My Trips
          </button>

          <button onClick={() => navigate("/explore")}>
            Explore
          </button>

          <button onClick={() => navigate("/activities")}>
            Activities
          </button>

        </div>

        <div className="dashboard-user-area">

          <button
            className="dashboard-notification"
            onClick={() => alert("You have 3 new notifications.")}
          >
            🔔
            <span className="notification-dot"></span>
          </button>

          <div className="dashboard-user">

            <div className="dashboard-avatar">
              K
            </div>

            <span>
              Keyuri
            </span>

          </div>

        </div>

      </nav>


      {/* ================= MAIN CONTENT ================= */}

      <main className="dashboard-container">


        {/* ================= WELCOME SECTION ================= */}

        <section className="dashboard-welcome">

          <div className="welcome-text">

            <span className="welcome-small">
              YOUR PERSONAL TRAVEL PLANNER
            </span>

            <h1>
              Welcome back 👋
            </h1>

            <h2>
              Hello, Keyuri!
            </h2>

            <p>
              Where do you want to go next?
              Plan your perfect journey with GlobeTrotter.
            </p>

          </div>


          <button
            className="plan-trip-button"
            onClick={() => navigate("/create-trip")}
          >
            <span>＋</span>
            Plan New Trip
          </button>

        </section>


        {/* ================= SEARCH ================= */}

        <section className="dashboard-search-section">

          <div className="dashboard-search">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search destination, city or activity..."
              onKeyDown={(event) => {

                if (event.key === "Enter") {
                  navigate("/explore");
                }

              }}
            />

            <button
              onClick={() => navigate("/explore")}
            >
              Search
            </button>

          </div>

        </section>


        {/* ================= QUICK ACTIONS ================= */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <span className="section-label">
                GET STARTED
              </span>

              <h2>
                Quick Actions
              </h2>
            </div>

          </div>


          <div className="quick-actions-grid">


            {/* CREATE TRIP */}

            <button
              className="quick-action-card"
              onClick={() => navigate("/create-trip")}
            >

              <div className="quick-action-icon blue">
                ✈️
              </div>

              <div>
                <strong>
                  Create Trip
                </strong>

                <span>
                  Start planning a new journey
                </span>
              </div>

              <b>
                →
              </b>

            </button>


            {/* MY TRIPS */}

            <button
              className="quick-action-card"
              onClick={() => navigate("/my-trips")}
            >

              <div className="quick-action-icon purple">
                🧳
              </div>

              <div>
                <strong>
                  My Trips
                </strong>

                <span>
                  View your planned trips
                </span>
              </div>

              <b>
                →
              </b>

            </button>


            {/* EXPLORE */}

            <button
              className="quick-action-card"
              onClick={() => navigate("/explore")}
            >

              <div className="quick-action-icon green">
                🌎
              </div>

              <div>
                <strong>
                  Explore Cities
                </strong>

                <span>
                  Discover new destinations
                </span>
              </div>

              <b>
                →
              </b>

            </button>


            {/* ACTIVITIES */}

            <button
              className="quick-action-card"
              onClick={() => navigate("/activities")}
            >

              <div className="quick-action-icon orange">
                🎯
              </div>

              <div>
                <strong>
                  Activities
                </strong>

                <span>
                  Find things to do
                </span>
              </div>

              <b>
                →
              </b>

            </button>

          </div>

        </section>


        {/* ================= UPCOMING TRIPS ================= */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                YOUR JOURNEYS
              </span>

              <h2>
                Upcoming Trips
              </h2>

            </div>

            <button
              className="view-all-button"
              onClick={() => navigate("/my-trips")}
            >
              View All →
            </button>

          </div>


          <div className="upcoming-trips-grid">


            {/* GOA */}

            <div className="trip-card">

              <div className="trip-image goa-image">

                <span className="trip-status">
                  UPCOMING
                </span>

                <div className="trip-image-title">
                  Goa Adventure
                </div>

              </div>


              <div className="trip-card-content">

                <h3>
                  Goa Adventure
                </h3>

                <p className="trip-date">
                  📅 15 Dec - 20 Dec 2026
                </p>

                <div className="trip-info">

                  <span>
                    📍 3 Destinations
                  </span>

                  <span>
                    🎯 16 Activities
                  </span>

                </div>


                <div className="trip-card-footer">

                  <button
                    onClick={() => navigate("/itinerary")}
                  >
                    View Itinerary
                  </button>

                  <button
                    onClick={() => navigate("/budget")}
                  >
                    Budget
                  </button>

                </div>

              </div>

            </div>


            {/* BALI */}

            <div className="trip-card">

              <div className="trip-image bali-image">

                <span className="trip-status">
                  UPCOMING
                </span>

                <div className="trip-image-title">
                  Bali Escape
                </div>

              </div>


              <div className="trip-card-content">

                <h3>
                  Bali Escape
                </h3>

                <p className="trip-date">
                  📅 10 Jan - 16 Jan 2027
                </p>

                <div className="trip-info">

                  <span>
                    📍 2 Destinations
                  </span>

                  <span>
                    🎯 10 Activities
                  </span>

                </div>


                <div className="trip-card-footer">

                  <button
                    onClick={() => navigate("/itinerary")}
                  >
                    View Itinerary
                  </button>

                  <button
                    onClick={() => navigate("/budget")}
                  >
                    Budget
                  </button>

                </div>

              </div>

            </div>


            {/* ADD NEW TRIP */}

            <button
              className="add-trip-card"
              onClick={() => navigate("/create-trip")}
            >

              <div className="add-trip-icon">
                ＋
              </div>

              <strong>
                Plan Another Trip
              </strong>

              <span>
                Create your next adventure
              </span>

            </button>

          </div>

        </section>


        {/* ================= POPULAR DESTINATIONS ================= */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                GET INSPIRED
              </span>

              <h2>
                Popular Destinations
              </h2>

            </div>

            <button
              className="view-all-button"
              onClick={() => navigate("/explore")}
            >
              Explore All →
            </button>

          </div>


          <div className="destination-grid">


            {/* GOA */}

            <button
              className="destination-card destination-goa"
              onClick={() => navigate("/explore")}
            >

              <div className="destination-overlay">

                <span>
                  🇮🇳 India
                </span>

                <h3>
                  Goa
                </h3>

                <p>
                  Beaches • Adventure • Nightlife
                </p>

              </div>

            </button>


            {/* BALI */}

            <button
              className="destination-card destination-bali"
              onClick={() => navigate("/explore")}
            >

              <div className="destination-overlay">

                <span>
                  🇮🇩 Indonesia
                </span>

                <h3>
                  Bali
                </h3>

                <p>
                  Nature • Culture • Relaxation
                </p>

              </div>

            </button>


            {/* PARIS */}

            <button
              className="destination-card destination-paris"
              onClick={() => navigate("/explore")}
            >

              <div className="destination-overlay">

                <span>
                  🇫🇷 France
                </span>

                <h3>
                  Paris
                </h3>

                <p>
                  Culture • Food • Sightseeing
                </p>

              </div>

            </button>


            {/* DUBAI */}

            <button
              className="destination-card destination-dubai"
              onClick={() => navigate("/explore")}
            >

              <div className="destination-overlay">

                <span>
                  🇦🇪 UAE
                </span>

                <h3>
                  Dubai
                </h3>

                <p>
                  Luxury • Shopping • Adventure
                </p>

              </div>

            </button>

          </div>

        </section>


        {/* ================= BUDGET OVERVIEW ================= */}

        <section className="dashboard-budget-section">


          <div className="budget-overview-card">

            <div className="budget-overview-header">

              <div>

                <span className="section-label">
                  TRIP FINANCES
                </span>

                <h2>
                  Budget Overview
                </h2>

              </div>

              <button
                onClick={() => navigate("/budget")}
              >
                View Budget →
              </button>

            </div>


            <div className="budget-numbers">

              <div>

                <span>
                  Total Budget
                </span>

                <strong>
                  ₹25,000
                </strong>

              </div>


              <div>

                <span>
                  Spent
                </span>

                <strong>
                  ₹8,500
                </strong>

              </div>


              <div>

                <span>
                  Remaining
                </span>

                <strong className="remaining-money">
                  ₹16,500
                </strong>

              </div>

            </div>


            <div className="dashboard-budget-progress">

              <div className="dashboard-budget-progress-top">

                <span>
                  Budget Used
                </span>

                <strong>
                  34%
                </strong>

              </div>

              <div className="dashboard-progress-background">

                <div
                  className="dashboard-progress-fill"
                  style={{
                    width: "34%",
                  }}
                ></div>

              </div>

            </div>


            <div className="budget-category-mini">

              <div>
                <span className="mini-dot transport-dot"></span>
                Transport
                <strong>₹3,500</strong>
              </div>

              <div>
                <span className="mini-dot stay-dot"></span>
                Stay
                <strong>₹3,000</strong>
              </div>

              <div>
                <span className="mini-dot food-dot"></span>
                Food
                <strong>₹1,200</strong>
              </div>

              <div>
                <span className="mini-dot activity-dot"></span>
                Activities
                <strong>₹800</strong>
              </div>

            </div>

          </div>


          {/* TRAVEL TIP */}

          <div className="travel-tip-card">

            <div className="travel-tip-icon">
              💡
            </div>

            <span>
              SMART TRAVEL TIP
            </span>

            <h3>
              Plan today, travel better tomorrow.
            </h3>

            <p>
              Keep your itinerary organized and track your
              expenses to enjoy a stress-free trip.
            </p>

            <button
              onClick={() => navigate("/itinerary")}
            >
              Open Itinerary →
            </button>

          </div>

        </section>


        {/* ================= BOTTOM CTA ================= */}

        <section className="dashboard-cta">

          <div>

            <span>
              READY FOR YOUR NEXT ADVENTURE?
            </span>

            <h2>
              Turn your travel ideas into reality.
            </h2>

            <p>
              Create a personalized itinerary in just a few steps.
            </p>

          </div>

          <button
            onClick={() => navigate("/create-trip")}
          >
            Start Planning →
          </button>

        </section>

      </main>


      {/* ================= MOBILE NAVIGATION ================= */}

      <div className="dashboard-mobile-nav">

        <button
          className="mobile-nav-active"
          onClick={() => navigate("/dashboard")}
        >
          <span>🏠</span>
          Home
        </button>

        <button
          onClick={() => navigate("/my-trips")}
        >
          <span>🧳</span>
          Trips
        </button>

        <button
          onClick={() => navigate("/explore")}
        >
          <span>🌎</span>
          Explore
        </button>

        <button
          onClick={() => navigate("/activities")}
        >
          <span>🎯</span>
          Activities
        </button>

        <button
          onClick={() => navigate("/budget")}
        >
          <span>💰</span>
          Budget
        </button>

      </div>

    </div>
  );
}

export default Dashboard;