import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTrip.css";

function CreateTrip() {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    tripName: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !trip.tripName ||
      !trip.startDate ||
      !trip.endDate ||
      !trip.description
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (trip.endDate < trip.startDate) {
      alert("End date cannot be before start date.");
      return;
    }

    alert("Trip created successfully!");

    navigate("/my-trips");
  };

  return (
    <div className="create-trip-page">

      {/* Navbar */}
      <nav className="create-trip-navbar">

        <div
          className="create-trip-logo"
          onClick={() => navigate("/dashboard")}
        >
          🌍 <span>GlobeTrotter</span>
        </div>

        <div className="create-trip-nav-links">
          <button onClick={() => navigate("/dashboard")}>
            Home
          </button>

          <button onClick={() => navigate("/my-trips")}>
            My Trips
          </button>

          <button>
            Explore
          </button>

          <button>
            Budget
          </button>
        </div>

        <div className="create-trip-profile">
          <span className="notification">🔔</span>
          <div className="profile-circle">K</div>
          <span>Keyuri</span>
        </div>

      </nav>

      {/* Main Content */}
      <main className="create-trip-container">

        <div className="create-trip-heading">
          <button
            className="back-button"
            onClick={() => navigate("/dashboard")}
          >
            ← Back
          </button>

          <div>
            <h1>Plan Your Trip ✈️</h1>
            <p>
              Create a new journey and start planning your perfect adventure.
            </p>
          </div>
        </div>

        <div className="create-trip-layout">

          {/* Left Information Card */}
          <div className="trip-info-card">

            <div className="trip-info-icon">
              🌍
            </div>

            <h2>Your next adventure starts here</h2>

            <p>
              Tell us a little about your trip. You can add destinations,
              activities, budget and itinerary after creating your trip.
            </p>

            <div className="trip-info-items">

              <div>
                <span>📍</span>
                <div>
                  <strong>Multiple destinations</strong>
                  <small>Add cities to your journey</small>
                </div>
              </div>

              <div>
                <span>📅</span>
                <div>
                  <strong>Flexible itinerary</strong>
                  <small>Plan your days easily</small>
                </div>
              </div>

              <div>
                <span>💰</span>
                <div>
                  <strong>Smart budget</strong>
                  <small>Track your travel expenses</small>
                </div>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="create-trip-card">

            <div className="form-header">
              <h2>Trip Details</h2>
              <p>Enter the basic information about your trip.</p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Trip Name */}
              <div className="form-group">
                <label>
                  Trip Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="tripName"
                  placeholder="e.g. Goa Adventure"
                  value={trip.tripName}
                  onChange={handleChange}
                />
              </div>

              {/* Dates */}
              <div className="date-row">

                <div className="form-group">
                  <label>
                    Start Date <span>*</span>
                  </label>

                  <input
                    type="date"
                    name="startDate"
                    value={trip.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>
                    End Date <span>*</span>
                  </label>

                  <input
                    type="date"
                    name="endDate"
                    value={trip.endDate}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* Description */}
              <div className="form-group">
                <label>
                  Description <span>*</span>
                </label>

                <textarea
                  name="description"
                  rows="5"
                  placeholder="Tell us about your trip..."
                  value={trip.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Cover Photo */}
              <div className="form-group">

                <label>Cover Photo</label>

                <div className="photo-upload">

                  {coverPhoto ? (
                    <div className="photo-preview">
                      <img
                        src={coverPhoto}
                        alt="Trip Cover"
                      />

                      <label
                        htmlFor="coverPhoto"
                        className="change-photo"
                      >
                        Change Photo
                      </label>
                    </div>
                  ) : (
                    <label
                      htmlFor="coverPhoto"
                      className="upload-box"
                    >
                      <div className="upload-icon">
                        📷
                      </div>

                      <strong>Upload a cover photo</strong>

                      <span>
                        PNG, JPG or JPEG
                      </span>
                    </label>
                  )}

                  <input
                    id="coverPhoto"
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={handlePhotoChange}
                    hidden
                  />

                </div>

              </div>

              {/* Buttons */}
              <div className="form-buttons">

                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="create-button"
                >
                  Create Trip →
                </button>

              </div>

            </form>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CreateTrip;