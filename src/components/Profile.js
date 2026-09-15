import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Keyuri Thakkar",
    email: "keyuri@example.com",
    phone: "+91 98765 43210",
    city: "Ahmedabad",
    country: "India",
  });

  const [preferences, setPreferences] = useState({
    travelStyle: "Adventure",
    language: "English",
    budget: "Medium",
  });

  const updateProfile = (key, value) => {
    setProfile((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const updatePreference = (key, value) => {
    setPreferences((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const saveProfile = () => {
    setEditing(false);
    alert("Profile updated successfully.");
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="page">
      <Navbar />

      <main className="profile-page">
        <div className="container">

          <div className="profile-header">
            <div>
              <span className="label">ACCOUNT SETTINGS</span>
              <h1>My Profile</h1>
              <p>
                Manage your personal details and travel preferences.
              </p>
            </div>

            <button
              className="btn"
              onClick={() =>
                editing ? saveProfile() : setEditing(true)
              }
            >
              {editing ? "✓ Save Profile" : "✎ Edit Profile"}
            </button>
          </div>

          <div className="profile-layout">

            <section className="profile-main">

              <div className="profile-card card">

                <div className="profile-cover">
                  <div className="profile-avatar">
                    KT
                  </div>
                </div>

                <div className="profile-details">

                  <div className="profile-name-section">
                    <div>
                      <h2>{profile.name}</h2>
                      <p>GlobeTrotter Traveler</p>
                    </div>

                    <span className="profile-status">
                      ● Active
                    </span>
                  </div>

                  <div className="profile-form">

                    <div className="form-group">
                      <label>Full Name</label>

                      <input
                        type="text"
                        value={profile.name}
                        disabled={!editing}
                        onChange={(e) =>
                          updateProfile("name", e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>

                      <input
                        type="email"
                        value={profile.email}
                        disabled={!editing}
                        onChange={(e) =>
                          updateProfile("email", e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>

                      <input
                        type="text"
                        value={profile.phone}
                        disabled={!editing}
                        onChange={(e) =>
                          updateProfile("phone", e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>City</label>

                      <input
                        type="text"
                        value={profile.city}
                        disabled={!editing}
                        onChange={(e) =>
                          updateProfile("city", e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Country</label>

                      <input
                        type="text"
                        value={profile.country}
                        disabled={!editing}
                        onChange={(e) =>
                          updateProfile("country", e.target.value)
                        }
                      />
                    </div>

                  </div>

                </div>

              </div>

              <div className="preferences-card card">

                <div className="profile-section-heading">
                  <div>
                    <span className="label">TRAVEL PREFERENCES</span>
                    <h2>How you like to travel</h2>
                  </div>

                  <span className="preference-icon">
                    🌍
                  </span>
                </div>

                <div className="preferences-grid">

                  <div className="preference-item">
                    <label>Travel Style</label>

                    <select
                      value={preferences.travelStyle}
                      disabled={!editing}
                      onChange={(e) =>
                        updatePreference(
                          "travelStyle",
                          e.target.value
                        )
                      }
                    >
                      <option>Adventure</option>
                      <option>Relaxation</option>
                      <option>Culture</option>
                      <option>Luxury</option>
                      <option>Budget</option>
                    </select>
                  </div>

                  <div className="preference-item">
                    <label>Preferred Language</label>

                    <select
                      value={preferences.language}
                      disabled={!editing}
                      onChange={(e) =>
                        updatePreference(
                          "language",
                          e.target.value
                        )
                      }
                    >
                      <option>English</option>
                      <option>Gujarati</option>
                      <option>Hindi</option>
                    </select>
                  </div>

                  <div className="preference-item">
                    <label>Budget Preference</label>

                    <select
                      value={preferences.budget}
                      disabled={!editing}
                      onChange={(e) =>
                        updatePreference(
                          "budget",
                          e.target.value
                        )
                      }
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Luxury</option>
                    </select>
                  </div>

                </div>

              </div>

            </section>

            <aside className="profile-sidebar">

              <div className="profile-stats card">

                <div className="profile-section-heading">
                  <div>
                    <span className="label">YOUR JOURNEY</span>
                    <h2>Travel Statistics</h2>
                  </div>
                </div>

                <div className="profile-stat-list">

                  <div className="profile-stat">
                    <span className="stat-icon">🗺️</span>

                    <div>
                      <strong>4</strong>
                      <p>Total Trips</p>
                    </div>
                  </div>

                  <div className="profile-stat">
                    <span className="stat-icon">📍</span>

                    <div>
                      <strong>6</strong>
                      <p>Destinations</p>
                    </div>
                  </div>

                  <div className="profile-stat">
                    <span className="stat-icon">🎯</span>

                    <div>
                      <strong>18</strong>
                      <p>Activities</p>
                    </div>
                  </div>

                  <div className="profile-stat">
                    <span className="stat-icon">📅</span>

                    <div>
                      <strong>24</strong>
                      <p>Travel Days</p>
                    </div>
                  </div>

                </div>

              </div>

              <div className="quick-settings card">

                <span className="label">QUICK SETTINGS</span>

                <Link to="/my-trips">
                  <span>🗺️</span>
                  <div>
                    <strong>My Trips</strong>
                    <small>Manage your journeys</small>
                  </div>
                  <b>→</b>
                </Link>

                <Link to="/budget">
                  <span>💰</span>
                  <div>
                    <strong>Budget</strong>
                    <small>Track your travel expenses</small>
                  </div>
                  <b>→</b>
                </Link>

                <Link to="/share-trip">
                  <span>🔗</span>
                  <div>
                    <strong>Shared Trips</strong>
                    <small>Manage collaboration</small>
                  </div>
                  <b>→</b>
                </Link>

              </div>

              <div className="profile-tip">

                <div className="tip-icon">
                  ✨
                </div>

                <div>
                  <span className="label">
                    TRAVEL TIP
                  </span>

                  <h3>
                    Keep your preferences updated
                  </h3>

                  <p>
                    Your preferences help GlobeTrotter suggest
                    better destinations and activities.
                  </p>
                </div>

              </div>

              <button
                className="logout-btn"
                onClick={logout}
              >
                ↪ Logout
              </button>

            </aside>

          </div>

        </div>
      </main>
    </div>
  );
}

export default Profile;