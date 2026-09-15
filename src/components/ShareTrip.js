import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShareTrip.css";

function ShareTrip() {
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  const shareLink =
    "https://globetrotter.app/trip/goa-adventure";

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch(() => {
        alert("Please copy the link manually.");
      });
  };

  const handleShare = (platform) => {
    alert(`Trip shared through ${platform}!`);
  };

  return (
    <div className="share-trip-page">

      {/* ================= NAVBAR ================= */}

      <nav className="share-navbar">

        <div
          className="share-logo"
          onClick={() => navigate("/dashboard")}
        >
          <span>🌍</span>

          <div>
            <strong>GlobeTrotter</strong>
            <small>Travel your way</small>
          </div>
        </div>

        <div className="share-nav-links">

          <button
            onClick={() => navigate("/dashboard")}
          >
            Home
          </button>

          <button
            onClick={() => navigate("/my-trips")}
          >
            My Trips
          </button>

          <button
            onClick={() => navigate("/itinerary")}
          >
            Itinerary
          </button>

          <button
            onClick={() => navigate("/budget")}
          >
            Budget
          </button>

          <button className="active">
            Share
          </button>

        </div>

        <div className="share-profile">

          <div className="share-avatar">
            K
          </div>

          <span>
            Keyuri
          </span>

        </div>

      </nav>

      {/* ================= MAIN ================= */}

      <main className="share-container">

        {/* ================= PAGE HEADER ================= */}

        <section className="share-page-header">

          <div>

            <span className="share-label">
              SHARE YOUR TRIP
            </span>

            <h1>
              Goa Adventure 🌴
            </h1>

            <p>
              Invite friends and family to explore your travel plan.
            </p>

          </div>

          <button
            className="back-itinerary-btn"
            onClick={() => navigate("/itinerary")}
          >
            ← Back to Itinerary
          </button>

        </section>

        {/* ================= SHARE CARD ================= */}

        <section className="share-main-grid">

          {/* LEFT SIDE */}

          <div className="share-link-card">

            <div className="share-card-heading">

              <div className="share-big-icon">
                🔗
              </div>

              <div>

                <h2>
                  Share Your Trip
                </h2>

                <p>
                  Anyone with this link can view your itinerary.
                </p>

              </div>

            </div>

            {/* LINK */}

            <div className="link-section">

              <label>
                Your Trip Link
              </label>

              <div className="link-box">

                <input
                  type="text"
                  value={shareLink}
                  readOnly
                />

                <button
                  onClick={handleCopyLink}
                  className={copied ? "copied" : ""}
                >
                  {copied ? "✓ Copied" : "Copy Link"}
                </button>

              </div>

            </div>

            {/* VISIBILITY */}

            <div className="visibility-section">

              <div className="visibility-icon">
                {isPublic ? "🌐" : "🔒"}
              </div>

              <div className="visibility-text">

                <strong>
                  {isPublic
                    ? "Anyone with the link"
                    : "Private Trip"}
                </strong>

                <span>
                  {isPublic
                    ? "People with your link can view this trip."
                    : "Only you can view this trip."}
                </span>

              </div>

              <button
                className={
                  isPublic
                    ? "visibility-toggle on"
                    : "visibility-toggle"
                }
                onClick={() =>
                  setIsPublic(!isPublic)
                }
              >
                <span></span>
              </button>

            </div>

            {/* SHARE OPTIONS */}

            <div className="share-options">

              <h3>
                Share via
              </h3>

              <div className="share-buttons">

                <button
                  onClick={() => handleShare("WhatsApp")}
                  className="share-option"
                >
                  <span>💬</span>
                  <small>WhatsApp</small>
                </button>

                <button
                  onClick={() => handleShare("Email")}
                  className="share-option"
                >
                  <span>✉️</span>
                  <small>Email</small>
                </button>

                <button
                  onClick={() => handleShare("Facebook")}
                  className="share-option"
                >
                  <span>f</span>
                  <small>Facebook</small>
                </button>

                <button
                  onClick={() => handleShare("Twitter")}
                  className="share-option"
                >
                  <span>𝕏</span>
                  <small>Twitter</small>
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE - PREVIEW */}

          <div className="public-preview-card">

            <div className="preview-header">

              <div>

                <span>
                  PUBLIC PREVIEW
                </span>

                <h2>
                  How others see your trip
                </h2>

              </div>

              <div className="preview-status">
                {isPublic ? "● Public" : "● Private"}
              </div>

            </div>

            {/* COVER */}

            <div className="preview-cover">

              <div className="cover-overlay">

                <span>
                  🌴 Goa, India
                </span>

                <h2>
                  Goa Adventure
                </h2>

                <p>
                  15 Dec – 20 Dec 2026
                </p>

              </div>

            </div>

            {/* PREVIEW DETAILS */}

            <div className="preview-details">

              <div className="preview-detail">

                <span>📅</span>

                <div>
                  <small>Duration</small>
                  <strong>6 Days</strong>
                </div>

              </div>

              <div className="preview-detail">

                <span>📍</span>

                <div>
                  <small>Destinations</small>
                  <strong>3 Cities</strong>
                </div>

              </div>

              <div className="preview-detail">

                <span>🎯</span>

                <div>
                  <small>Activities</small>
                  <strong>20 Activities</strong>
                </div>

              </div>

            </div>

            {/* CITIES */}

            <div className="preview-section">

              <h3>
                Destinations
              </h3>

              <div className="city-tags">

                <span>🌴 Goa</span>
                <span>🏙️ Panaji</span>
                <span>🏛️ Old Goa</span>

              </div>

            </div>

            {/* DESCRIPTION */}

            <div className="preview-description">

              <h3>
                About this trip
              </h3>

              <p>
                Explore the beautiful beaches, historic places,
                exciting water sports and delicious Goan food
                during this 6-day adventure.
              </p>

            </div>

          </div>

        </section>

        {/* ================= SHARED ITINERARY ================= */}

        <section className="shared-itinerary-card">

          <div className="shared-heading">

            <div>

              <span>
                ITINERARY PREVIEW
              </span>

              <h2>
                What's included in the shared trip?
              </h2>

            </div>

            <button
              onClick={() => navigate("/itinerary")}
            >
              View Full Itinerary →
            </button>

          </div>

          <div className="shared-features">

            <div className="shared-feature">

              <div>
                📅
              </div>

              <section>
                <strong>
                  Day-by-Day Plan
                </strong>

                <p>
                  Complete daily schedule and timeline.
                </p>
              </section>

            </div>

            <div className="shared-feature">

              <div>
                📍
              </div>

              <section>
                <strong>
                  Multiple Destinations
                </strong>

                <p>
                  Explore Goa, Panaji and Old Goa.
                </p>
              </section>

            </div>

            <div className="shared-feature">

              <div>
                🎯
              </div>

              <section>
                <strong>
                  Activities
                </strong>

                <p>
                  Beaches, sightseeing, food and adventure.
                </p>
              </section>

            </div>

            <div className="shared-feature">

              <div>
                💰
              </div>

              <section>
                <strong>
                  Budget Summary
                </strong>

                <p>
                  Estimated trip cost and expenses.
                </p>
              </section>

            </div>

          </div>

        </section>

        {/* ================= SECURITY TIP ================= */}

        <section className="share-tip">

          <div className="share-tip-icon">
            🔐
          </div>

          <div>

            <h3>
              Sharing Tip
            </h3>

            <p>
              Avoid sharing personal information such as
              passwords, payment details or private documents
              in your public itinerary.
            </p>

          </div>

        </section>

        {/* ================= BOTTOM ACTIONS ================= */}

        <section className="share-bottom-actions">

          <button
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

          <button
            onClick={() => navigate("/itinerary")}
          >
            📅 View Itinerary
          </button>

          <button
            onClick={() => navigate("/budget")}
          >
            💰 View Budget
          </button>

        </section>

      </main>

      {/* ================= MOBILE NAV ================= */}

      <div className="mobile-share-nav">

        <button
          onClick={() => navigate("/dashboard")}
        >
          🏠
          <span>Home</span>
        </button>

        <button
          onClick={() => navigate("/my-trips")}
        >
          🧳
          <span>Trips</span>
        </button>

        <button
          onClick={() => navigate("/itinerary")}
        >
          📅
          <span>Plan</span>
        </button>

        <button className="mobile-share-active">
          🔗
          <span>Share</span>
        </button>

      </div>

    </div>
  );
}

export default ShareTrip;