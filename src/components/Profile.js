import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Keyuri Thakkar",
    email: "keyuri@example.com",
    phone: "+91 98765 43210",
    language: "English",
    currency: "INR (₹)",
    bio: "Travel enthusiast who loves exploring new destinations."
  });

  const [notifications, setNotifications] = useState({
    tripReminder: true,
    recommendations: true,
    budgetAlert: true,
    promotional: false
  });

  const [darkMode, setDarkMode] = useState(false);

  const [saved, setSaved] = useState(false);

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSaveProfile = (event) => {
    event.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const handleNotificationChange = (name) => {
    setNotifications((previous) => ({
      ...previous,
      [name]: !previous[name]
    }));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <div className={darkMode ? "profile-page dark-profile" : "profile-page"}>

      {/* ================= NAVBAR ================= */}

      <nav className="profile-navbar">

        <div
          className="profile-logo"
          onClick={() => navigate("/dashboard")}
        >
          <span>🌍</span>

          <div>
            <strong>GlobeTrotter</strong>
            <small>Travel your way</small>
          </div>
        </div>

        <div className="profile-nav-links">

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
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>

          <button
            onClick={() => navigate("/activities")}
          >
            Activities
          </button>

        </div>

        <div className="profile-user">

          <div className="profile-avatar">
            K
          </div>

          <span>Keyuri</span>

        </div>

      </nav>

      {/* ================= MAIN ================= */}

      <main className="profile-container">

        {/* ================= HEADER ================= */}

        <section className="profile-page-header">

          <div>
            <span className="profile-label">
              ACCOUNT SETTINGS
            </span>

            <h1>
              My Profile
            </h1>

            <p>
              Manage your personal information and travel preferences.
            </p>
          </div>

          <button
            className="profile-dashboard-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

        </section>

        {/* ================= PROFILE LAYOUT ================= */}

        <section className="profile-layout">

          {/* ================= SIDEBAR ================= */}

          <aside className="profile-sidebar">

            <div className="large-profile">

              <div className="large-avatar">
                K
              </div>

              <h2>
                Keyuri Thakkar
              </h2>

              <p>
                Traveler
              </p>

            </div>

            <div className="profile-menu">

              <button
                className={
                  activeSection === "profile"
                    ? "profile-menu-active"
                    : ""
                }
                onClick={() => setActiveSection("profile")}
              >
                <span>👤</span>
                Personal Information
              </button>

              <button
                className={
                  activeSection === "preferences"
                    ? "profile-menu-active"
                    : ""
                }
                onClick={() => setActiveSection("preferences")}
              >
                <span>🌍</span>
                Travel Preferences
              </button>

              <button
                className={
                  activeSection === "notifications"
                    ? "profile-menu-active"
                    : ""
                }
                onClick={() => setActiveSection("notifications")}
              >
                <span>🔔</span>
                Notifications
              </button>

              <button
                className={
                  activeSection === "appearance"
                    ? "profile-menu-active"
                    : ""
                }
                onClick={() => setActiveSection("appearance")}
              >
                <span>🎨</span>
                Appearance
              </button>

              <button
                className={
                  activeSection === "security"
                    ? "profile-menu-active"
                    : ""
                }
                onClick={() => setActiveSection("security")}
              >
                <span>🔐</span>
                Security
              </button>

            </div>

            <button
              className="logout-button"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>

          </aside>

          {/* ================= CONTENT ================= */}

          <div className="profile-content">

            {/* ================= PERSONAL INFORMATION ================= */}

            {activeSection === "profile" && (

              <div className="settings-card">

                <div className="settings-card-header">

                  <div>
                    <span>
                      PROFILE
                    </span>

                    <h2>
                      Personal Information
                    </h2>

                    <p>
                      Update your basic account information.
                    </p>
                  </div>

                  <div className="settings-header-icon">
                    👤
                  </div>

                </div>

                <form onSubmit={handleSaveProfile}>

                  <div className="profile-form-grid">

                    <div className="profile-field">

                      <label>
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                      />

                    </div>

                    <div className="profile-field">

                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                      />

                    </div>

                    <div className="profile-field">

                      <label>
                        Phone Number
                      </label>

                      <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                      />

                    </div>

                    <div className="profile-field">

                      <label>
                        Language
                      </label>

                      <select
                        name="language"
                        value={profile.language}
                        onChange={handleProfileChange}
                      >
                        <option>English</option>
                        <option>Gujarati</option>
                        <option>Hindi</option>
                      </select>

                    </div>

                  </div>

                  <div className="profile-field">

                    <label>
                      About You
                    </label>

                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleProfileChange}
                      rows="4"
                    ></textarea>

                  </div>

                  <div className="save-area">

                    <button
                      type="submit"
                      className="save-profile-button"
                    >
                      {saved ? "✓ Saved Successfully" : "Save Changes"}
                    </button>

                  </div>

                </form>

              </div>

            )}

            {/* ================= TRAVEL PREFERENCES ================= */}

            {activeSection === "preferences" && (

              <div className="settings-card">

                <div className="settings-card-header">

                  <div>
                    <span>
                      PREFERENCES
                    </span>

                    <h2>
                      Travel Preferences
                    </h2>

                    <p>
                      Personalize your travel planning experience.
                    </p>
                  </div>

                  <div className="settings-header-icon">
                    🌍
                  </div>

                </div>

                <div className="preference-group">

                  <h3>
                    Preferred Currency
                  </h3>

                  <select
                    value={profile.currency}
                    onChange={(event) =>
                      setProfile({
                        ...profile,
                        currency: event.target.value
                      })
                    }
                  >
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>

                </div>

                <div className="preference-group">

                  <h3>
                    Favorite Travel Style
                  </h3>

                  <div className="preference-options">

                    <button className="preference-selected">
                      🏖️ Beach
                    </button>

                    <button>
                      🏔️ Adventure
                    </button>

                    <button>
                      🏛️ Culture
                    </button>

                    <button>
                      🌲 Nature
                    </button>

                    <button>
                      🏙️ City
                    </button>

                    <button>
                      💎 Luxury
                    </button>

                  </div>

                </div>

                <div className="preference-group">

                  <h3>
                    Preferred Trip Duration
                  </h3>

                  <div className="duration-options">

                    <button className="duration-selected">
                      Weekend
                    </button>

                    <button>
                      3–5 Days
                    </button>

                    <button>
                      1 Week
                    </button>

                    <button>
                      2+ Weeks
                    </button>

                  </div>

                </div>

                <button
                  className="save-profile-button"
                  onClick={() => alert("Travel preferences saved!")}
                >
                  Save Preferences
                </button>

              </div>

            )}

            {/* ================= NOTIFICATIONS ================= */}

            {activeSection === "notifications" && (

              <div className="settings-card">

                <div className="settings-card-header">

                  <div>
                    <span>
                      NOTIFICATIONS
                    </span>

                    <h2>
                      Notification Settings
                    </h2>

                    <p>
                      Choose what updates you want to receive.
                    </p>
                  </div>

                  <div className="settings-header-icon">
                    🔔
                  </div>

                </div>

                <div className="notification-list">

                  <div className="notification-item">

                    <div>
                      <strong>
                        Trip Reminders
                      </strong>

                      <p>
                        Get reminders about upcoming trips and activities.
                      </p>
                    </div>

                    <button
                      className={
                        notifications.tripReminder
                          ? "setting-toggle on"
                          : "setting-toggle"
                      }
                      onClick={() =>
                        handleNotificationChange("tripReminder")
                      }
                    >
                      <span></span>
                    </button>

                  </div>

                  <div className="notification-item">

                    <div>
                      <strong>
                        Smart Recommendations
                      </strong>

                      <p>
                        Receive personalized destination and activity suggestions.
                      </p>
                    </div>

                    <button
                      className={
                        notifications.recommendations
                          ? "setting-toggle on"
                          : "setting-toggle"
                      }
                      onClick={() =>
                        handleNotificationChange("recommendations")
                      }
                    >
                      <span></span>
                    </button>

                  </div>

                  <div className="notification-item">

                    <div>
                      <strong>
                        Budget Alerts
                      </strong>

                      <p>
                        Get notified when your spending approaches your budget.
                      </p>
                    </div>

                    <button
                      className={
                        notifications.budgetAlert
                          ? "setting-toggle on"
                          : "setting-toggle"
                      }
                      onClick={() =>
                        handleNotificationChange("budgetAlert")
                      }
                    >
                      <span></span>
                    </button>

                  </div>

                  <div className="notification-item">

                    <div>
                      <strong>
                        Promotional Updates
                      </strong>

                      <p>
                        Receive special travel offers and promotions.
                      </p>
                    </div>

                    <button
                      className={
                        notifications.promotional
                          ? "setting-toggle on"
                          : "setting-toggle"
                      }
                      onClick={() =>
                        handleNotificationChange("promotional")
                      }
                    >
                      <span></span>
                    </button>

                  </div>

                </div>

              </div>

            )}

            {/* ================= APPEARANCE ================= */}

            {activeSection === "appearance" && (

              <div className="settings-card">

                <div className="settings-card-header">

                  <div>
                    <span>
                      APPEARANCE
                    </span>

                    <h2>
                      Appearance Settings
                    </h2>

                    <p>
                      Customize how GlobeTrotter looks for you.
                    </p>
                  </div>

                  <div className="settings-header-icon">
                    🎨
                  </div>

                </div>

                <div className="appearance-option">

                  <div className="appearance-icon">
                    {darkMode ? "🌙" : "☀️"}
                  </div>

                  <div>
                    <strong>
                      Dark Mode
                    </strong>

                    <p>
                      {darkMode
                        ? "Dark appearance is currently enabled."
                        : "Use a darker appearance for comfortable viewing."}
                    </p>
                  </div>

                  <button
                    className={
                      darkMode
                        ? "setting-toggle on"
                        : "setting-toggle"
                    }
                    onClick={() =>
                      setDarkMode(!darkMode)
                    }
                  >
                    <span></span>
                  </button>

                </div>

                <div className="theme-preview">

                  <div className="theme-preview-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="theme-preview-body">

                    <div className="theme-preview-sidebar"></div>

                    <div className="theme-preview-content">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                  </div>

                </div>

              </div>

            )}

            {/* ================= SECURITY ================= */}

            {activeSection === "security" && (

              <div className="settings-card">

                <div className="settings-card-header">

                  <div>
                    <span>
                      SECURITY
                    </span>

                    <h2>
                      Account Security
                    </h2>

                    <p>
                      Manage your password and account security.
                    </p>
                  </div>

                  <div className="settings-header-icon">
                    🔐
                  </div>

                </div>

                <div className="security-item">

                  <div className="security-icon">
                    🔑
                  </div>

                  <div>
                    <strong>
                      Password
                    </strong>

                    <p>
                      Last changed recently
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      alert("Password change screen coming soon.")
                    }
                  >
                    Change Password
                  </button>

                </div>

                <div className="security-item">

                  <div className="security-icon">
                    🛡️
                  </div>

                  <div>
                    <strong>
                      Two-Factor Authentication
                    </strong>

                    <p>
                      Add an extra layer of security to your account.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      alert("Two-factor authentication setup coming soon.")
                    }
                  >
                    Enable
                  </button>

                </div>

                <div className="security-item danger-security">

                  <div className="security-icon">
                    ⚠️
                  </div>

                  <div>
                    <strong>
                      Delete Account
                    </strong>

                    <p>
                      Permanently delete your GlobeTrotter account.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      alert(
                        "Account deletion requires confirmation."
                      )
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            )}

          </div>

        </section>

      </main>

      {/* ================= MOBILE NAV ================= */}

      <div className="mobile-profile-nav">

        <button
          onClick={() => navigate("/dashboard")}
        >
          🏠
          <span>
            Home
          </span>
        </button>

        <button
          onClick={() => navigate("/my-trips")}
        >
          🧳
          <span>
            Trips
          </span>
        </button>

        <button
          onClick={() => navigate("/explore")}
        >
          🔎
          <span>
            Explore
          </span>
        </button>

        <button className="mobile-profile-active">
          👤
          <span>
            Profile
          </span>
        </button>

      </div>

    </div>
  );
}

export default Profile;