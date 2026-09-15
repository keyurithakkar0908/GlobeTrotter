import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./ShareTrip.css";

function ShareTrip() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const tripLink = "https://globetrotter.app/trip/jaipur-adventure";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(tripLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Trip link copied: " + tripLink);
    }
  };

  const sendInvitation = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter an email address.");
      return;
    }

    setSent(true);
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  const quickShare = (type) => {
    if (type === "WhatsApp") {
      const whatsappText = encodeURIComponent(
        "Check out my Jaipur Adventure trip on GlobeTrotter: " +
          tripLink
      );

      window.open(
        `https://wa.me/?text=${whatsappText}`,
        "_blank"
      );
      return;
    }

    if (type === "Email") {
      window.location.href = `mailto:?subject=My Jaipur Adventure&body=Check out my trip: ${tripLink}`;
      return;
    }

    copyLink();
  };

  return (
    <div className="page">
      <Navbar />

      <main className="share-page">
        <div className="container">

          <div className="share-header">
            <div>
              <span className="label">TRIP COLLABORATION</span>

              <h1>Share Your Trip</h1>

              <p>
                Invite friends and family to view or collaborate on
                your travel plans.
              </p>
            </div>

            <Link to="/my-trips" className="btn secondary">
              ← My Trips
            </Link>
          </div>

          <div className="share-layout">

            <section className="trip-preview-card card">

              <div className="preview-image">
                <img
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85"
                  alt="Jaipur"
                />

                <span>🌍 GlobeTrotter Trip</span>
              </div>

              <div className="preview-body">

                <span className="label">TRIP PREVIEW</span>

                <h2>Jaipur Adventure</h2>

                <p className="preview-location">
                  📍 Jaipur, Rajasthan
                </p>

                <div className="preview-details">

                  <div>
                    <span>📅</span>
                    <div>
                      <small>DATES</small>
                      <strong>Jun 12 - Jun 16</strong>
                    </div>
                  </div>

                  <div>
                    <span>👥</span>
                    <div>
                      <small>TRAVELERS</small>
                      <strong>2 Travelers</strong>
                    </div>
                  </div>

                  <div>
                    <span>💰</span>
                    <div>
                      <small>BUDGET</small>
                      <strong>₹25,000</strong>
                    </div>
                  </div>

                </div>

                <div className="preview-progress">

                  <div className="progress-heading">
                    <span>Trip planning progress</span>
                    <strong>80%</strong>
                  </div>

                  <div className="progress-bar">
                    <span></span>
                  </div>

                </div>

                <Link to="/itinerary" className="btn preview-btn">
                  View Trip
                </Link>

              </div>

            </section>

            <section className="share-options">

              <div className="link-share-card card">

                <div className="share-card-heading">
                  <div>
                    <span className="label">PRIVATE LINK</span>
                    <h2>Share trip link</h2>
                  </div>

                  <span className="share-icon">🔗</span>
                </div>

                <p>
                  Anyone with this link can view your trip details.
                </p>

                <div className="trip-link-box">
                  <span>{tripLink}</span>

                  <button onClick={copyLink}>
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                </div>

                {copied && (
                  <div className="share-success">
                    ✓ Trip link copied successfully.
                  </div>
                )}

              </div>

              <div className="invite-card card">

                <div className="share-card-heading">
                  <div>
                    <span className="label">INVITE PEOPLE</span>
                    <h2>Send an invitation</h2>
                  </div>

                  <span className="share-icon">✉️</span>
                </div>

                <form onSubmit={sendInvitation}>

                  <div className="form-group">
                    <label>Email address</label>

                    <input
                      type="email"
                      placeholder="friend@example.com"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>

                    <textarea
                      rows="3"
                      placeholder="Let's plan this trip together!"
                      value={message}
                      onChange={(e) =>
                        setMessage(e.target.value)
                      }
                    ></textarea>
                  </div>

                  <button type="submit" className="btn">
                    ✈️ Send Invitation
                  </button>

                </form>

                {sent && (
                  <div className="share-success">
                    ✓ Invitation sent successfully.
                  </div>
                )}

              </div>

            </section>

          </div>

          <section className="quick-share-section">

            <div className="section-heading">
              <div>
                <span className="label">QUICK SHARE</span>
                <h2>Share with one click</h2>
              </div>
            </div>

            <div className="quick-share-grid">

              <button
                className="quick-share-card card"
                onClick={() => quickShare("WhatsApp")}
              >
                <span className="quick-icon">💬</span>

                <div>
                  <strong>WhatsApp</strong>
                  <small>Share with friends</small>
                </div>

                <span className="quick-arrow">→</span>
              </button>

              <button
                className="quick-share-card card"
                onClick={() => quickShare("Email")}
              >
                <span className="quick-icon">✉️</span>

                <div>
                  <strong>Email</strong>
                  <small>Send trip details</small>
                </div>

                <span className="quick-arrow">→</span>
              </button>

              <button
                className="quick-share-card card"
                onClick={() => quickShare("Copy")}
              >
                <span className="quick-icon">🔗</span>

                <div>
                  <strong>Copy Link</strong>
                  <small>Copy private trip link</small>
                </div>

                <span className="quick-arrow">→</span>
              </button>

            </div>

          </section>

          <div className="privacy-grid">

            <div className="privacy-card">
              <span>🔒</span>

              <div>
                <strong>Your trip is private</strong>
                <p>
                  Only people you share the trip with can access it.
                </p>
              </div>
            </div>

            <div className="privacy-card">
              <span>👥</span>

              <div>
                <strong>Plan together</strong>
                <p>
                  Invite your travel partners and organize the trip
                  together.
                </p>
              </div>
            </div>

            <div className="privacy-card">
              <span>🛡️</span>

              <div>
                <strong>Stay in control</strong>
                <p>
                  You decide who can view and participate in your
                  travel plans.
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default ShareTrip;