import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./CreateTrip.css";

function CreateTrip() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    tripName: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "2",
    budget: "",
    tripType: "Leisure",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.tripName ||
      !form.destination ||
      !form.startDate ||
      !form.endDate ||
      !form.budget
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    setMessage("Trip created successfully!");

    setTimeout(() => {
      navigate("/my-trips");
    }, 800);
  };

  return (
    <div className="page">
      <Navbar />

      <main className="create-trip-page">
        <div className="container">

          <div className="create-header">
            <div>
              <span className="label">TRIP PLANNER</span>
              <h1>Create Your Trip</h1>
              <p>
                Add your travel details and start building your personalized
                journey.
              </p>
            </div>

            <Link to="/dashboard" className="btn secondary">
              ← Dashboard
            </Link>
          </div>

          <div className="create-layout">

            <section className="trip-form-card card">

              <div className="form-card-header">
                <div>
                  <span className="label">TRIP DETAILS</span>
                  <h2>Tell us about your trip</h2>
                </div>

                <div className="form-header-icon">
                  ✈️
                </div>
              </div>

              {message && (
                <div
                  className={
                    message.includes("successfully")
                      ? "success"
                      : "danger"
                  }
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label>Trip Name *</label>
                  <input
                    type="text"
                    name="tripName"
                    placeholder="e.g. Jaipur Adventure"
                    value={form.tripName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Destination *</label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={form.destination}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grid">

                  <div className="form-group">
                    <label>Start Date *</label>
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>End Date *</label>
                    <input
                      type="date"
                      name="endDate"
                      value={form.endDate}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="form-grid">

                  <div className="form-group">
                    <label>Travelers</label>
                    <select
                      name="travelers"
                      value={form.travelers}
                      onChange={handleChange}
                    >
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4 Travelers</option>
                      <option value="5">5 Travelers</option>
                      <option value="6">6 Travelers</option>
                      <option value="7">7 Travelers</option>
                      <option value="8">8+ Travelers</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Estimated Budget *</label>
                    <input
                      type="number"
                      name="budget"
                      placeholder="₹ 25,000"
                      min="0"
                      value={form.budget}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label>Trip Type</label>

                  <div className="trip-types">

                    {[
                      "Leisure",
                      "Adventure",
                      "Family",
                      "Business",
                      "Solo",
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={
                          form.tripType === type
                            ? "trip-type active"
                            : "trip-type"
                        }
                        onClick={() =>
                          setForm({
                            ...form,
                            tripType: type,
                          })
                        }
                      >
                        {type}
                      </button>
                    ))}

                  </div>
                </div>

                <div className="form-group">
                  <label>Travel Notes</label>
                  <textarea
                    name="notes"
                    rows="4"
                    placeholder="Tell us about your preferences, places you want to visit or anything important..."
                    value={form.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-actions">
                  <Link to="/dashboard" className="btn secondary">
                    Cancel
                  </Link>

                  <button type="submit" className="btn">
                    Create Trip →
                  </button>
                </div>

              </form>
            </section>

            <aside className="trip-side">

              <div className="travel-photo">
                <img
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85"
                  alt="Travel destination"
                />

                <div className="photo-overlay">
                  <span>YOUR NEXT ADVENTURE</span>
                  <h2>Explore. Plan. Travel.</h2>
                  <p>
                    Create a trip that matches your interests and budget.
                  </p>
                </div>
              </div>

              <div className="planning-info card">

                <span className="label">WHAT'S NEXT?</span>

                <h2>Your Trip Journey</h2>

                <div className="journey-step">
                  <div className="step-number">1</div>
                  <div>
                    <strong>Create Trip</strong>
                    <small>Add your destination and travel details</small>
                  </div>
                </div>

                <div className="journey-line"></div>

                <div className="journey-step">
                  <div className="step-number">2</div>
                  <div>
                    <strong>Build Itinerary</strong>
                    <small>Plan activities day by day</small>
                  </div>
                </div>

                <div className="journey-line"></div>

                <div className="journey-step">
                  <div className="step-number">3</div>
                  <div>
                    <strong>Manage Budget</strong>
                    <small>Keep your travel expenses organized</small>
                  </div>
                </div>

                <div className="journey-line"></div>

                <div className="journey-step">
                  <div className="step-number">4</div>
                  <div>
                    <strong>Share Trip</strong>
                    <small>Invite your travel partners</small>
                  </div>
                </div>

              </div>

              <div className="create-tip">
                <span>💡</span>
                <div>
                  <strong>Planning Tip</strong>
                  <p>
                    Set a realistic budget before adding activities to
                    keep your trip stress-free.
                  </p>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateTrip;