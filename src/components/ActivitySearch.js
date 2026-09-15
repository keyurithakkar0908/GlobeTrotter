import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ActivitySearch.css";

function ActivitySearch() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCost, setSelectedCost] = useState("All");

  const activities = [
    {
      id: 1,
      name: "Baga Beach Water Sports",
      city: "Goa",
      category: "Adventure",
      cost: 1200,
      duration: "3 Hours",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description:
        "Enjoy exciting water sports and beach activities at Baga Beach."
    },
    {
      id: 2,
      name: "Old Goa Heritage Walk",
      city: "Goa",
      category: "Culture",
      cost: 500,
      duration: "2 Hours",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80",
      description:
        "Explore historical churches and Portuguese architecture."
    },
    {
      id: 3,
      name: "Scuba Diving",
      city: "Goa",
      category: "Adventure",
      cost: 2500,
      duration: "4 Hours",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      description:
        "Discover beautiful underwater marine life with a guided dive."
    },
    {
      id: 4,
      name: "Bali Temple Tour",
      city: "Bali",
      category: "Culture",
      cost: 1800,
      duration: "5 Hours",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      description:
        "Visit beautiful Balinese temples and learn about local culture."
    },
    {
      id: 5,
      name: "Bali Jungle Trek",
      city: "Bali",
      category: "Nature",
      cost: 2200,
      duration: "6 Hours",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
      description:
        "Experience an adventurous trek through tropical forests."
    },
    {
      id: 6,
      name: "Paris City Tour",
      city: "Paris",
      category: "Sightseeing",
      cost: 3000,
      duration: "5 Hours",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      description:
        "Discover famous landmarks and beautiful streets of Paris."
    },
    {
      id: 7,
      name: "Eiffel Tower Evening",
      city: "Paris",
      category: "Sightseeing",
      cost: 2500,
      duration: "3 Hours",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=800&q=80",
      description:
        "Enjoy an unforgettable evening around the Eiffel Tower."
    },
    {
      id: 8,
      name: "Dubai Desert Safari",
      city: "Dubai",
      category: "Adventure",
      cost: 3500,
      duration: "6 Hours",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      description:
        "Experience dune bashing, desert views and traditional activities."
    },
    {
      id: 9,
      name: "Dubai Marina Cruise",
      city: "Dubai",
      category: "Luxury",
      cost: 2800,
      duration: "2 Hours",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      description:
        "Relax on a beautiful cruise while enjoying Dubai skyline views."
    },
    {
      id: 10,
      name: "Tokyo Food Experience",
      city: "Tokyo",
      category: "Food",
      cost: 2000,
      duration: "3 Hours",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
      description:
        "Taste authentic Japanese food and explore local food streets."
    }
  ];

  const categories = [
    "All",
    "Adventure",
    "Culture",
    "Nature",
    "Sightseeing",
    "Food",
    "Luxury"
  ];

  const cities = [
    "All Cities",
    "Goa",
    "Bali",
    "Paris",
    "Dubai",
    "Tokyo"
  ];

  const filteredActivities = activities.filter((activity) => {
    const searchMatch =
      activity.name.toLowerCase().includes(search.toLowerCase()) ||
      activity.city.toLowerCase().includes(search.toLowerCase()) ||
      activity.category.toLowerCase().includes(search.toLowerCase());

    const cityMatch =
      selectedCity === "All Cities" ||
      activity.city === selectedCity;

    const categoryMatch =
      selectedCategory === "All" ||
      activity.category === selectedCategory;

    let costMatch = true;

    if (selectedCost === "Under ₹1000") {
      costMatch = activity.cost < 1000;
    } else if (selectedCost === "₹1000 - ₹2000") {
      costMatch = activity.cost >= 1000 && activity.cost <= 2000;
    } else if (selectedCost === "Above ₹2000") {
      costMatch = activity.cost > 2000;
    }

    return searchMatch && cityMatch && categoryMatch && costMatch;
  });

  const addToItinerary = (activity) => {
    alert(
      `"${activity.name}" added to your itinerary successfully!`
    );
  };

  const viewDetails = (activity) => {
    alert(
      `${activity.name}\n\nCity: ${activity.city}\nCategory: ${activity.category}\nCost: ₹${activity.cost}\nDuration: ${activity.duration}\nRating: ${activity.rating}`
    );
  };

  return (
    <div className="activity-page">

      {/* NAVBAR */}
      <nav className="activity-navbar">
        <div
          className="activity-logo"
          onClick={() => navigate("/dashboard")}
        >
          <span className="logo-icon">✈</span>
          <div>
            <h2>GlobeTrotter</h2>
            <small>Travel Your Way</small>
          </div>
        </div>

        <div className="activity-nav-links">
          <button onClick={() => navigate("/dashboard")}>
            Home
          </button>

          <button onClick={() => navigate("/my-trips")}>
            My Trips
          </button>

          <button onClick={() => navigate("/explore")}>
            Explore
          </button>

          <button className="active">
            Activities
          </button>
        </div>

        <div className="activity-profile">
          <div className="notification">🔔</div>

          <div className="profile-circle">
            K
          </div>

          <span>Keyuri</span>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="activity-header">
        <div>
          <button
            className="back-button"
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Dashboard
          </button>

          <h1>Discover Activities</h1>

          <p>
            Find exciting things to do and add them to your
            personalized itinerary.
          </p>
        </div>

        <div className="activity-header-icon">
          🗺️
        </div>
      </section>

      {/* SEARCH */}
      <section className="activity-search-section">

        <div className="activity-search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search activities, cities or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          className="smart-button"
          onClick={() =>
            alert(
              "Smart Recommendation feature will suggest activities based on your trip preferences."
            )
          }
        >
          ✨ Smart Recommendations
        </button>

      </section>

      {/* FILTERS */}
      <section className="activity-filters">

        <div className="filter-group">
          <label>📍 City</label>

          <select
            value={selectedCity}
            onChange={(e) =>
              setSelectedCity(e.target.value)
            }
          >
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>🏷️ Category</label>

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>💰 Cost</label>

          <select
            value={selectedCost}
            onChange={(e) =>
              setSelectedCost(e.target.value)
            }
          >
            <option>All</option>
            <option>Under ₹1000</option>
            <option>₹1000 - ₹2000</option>
            <option>Above ₹2000</option>
          </select>
        </div>

        <button
          className="clear-filter"
          onClick={() => {
            setSearch("");
            setSelectedCity("All Cities");
            setSelectedCategory("All");
            setSelectedCost("All");
          }}
        >
          Clear Filters
        </button>

      </section>

      {/* CATEGORY BUTTONS */}
      <section className="category-section">

        <div className="category-title">
          <h2>Browse by Category</h2>
          <span>
            {filteredActivities.length} activities found
          </span>
        </div>

        <div className="category-buttons">

          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn selected"
                  : "category-btn"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category === "Adventure" && "🏄 "}
              {category === "Culture" && "🏛️ "}
              {category === "Nature" && "🌿 "}
              {category === "Sightseeing" && "📸 "}
              {category === "Food" && "🍜 "}
              {category === "Luxury" && "💎 "}
              {category === "All" && "✨ "}
              {category}
            </button>
          ))}

        </div>
      </section>

      {/* ACTIVITY CARDS */}
      <main className="activities-container">

        <div className="activities-heading">
          <div>
            <h2>Recommended Activities</h2>
            <p>
              Choose activities that match your travel style.
            </p>
          </div>

          <span className="result-count">
            {filteredActivities.length} Results
          </span>
        </div>

        {filteredActivities.length > 0 ? (

          <div className="activity-grid">

            {filteredActivities.map((activity) => (

              <div
                className="activity-card"
                key={activity.id}
              >

                {/* IMAGE */}
                <div className="activity-image-wrapper">

                  <img
                    src={activity.image}
                    alt={activity.name}
                  />

                  <span className="activity-category">
                    {activity.category}
                  </span>

                  <button className="favorite-btn">
                    ♡
                  </button>

                </div>

                {/* CONTENT */}
                <div className="activity-content">

                  <div className="activity-location">
                    📍 {activity.city}
                  </div>

                  <h3>{activity.name}</h3>

                  <p className="activity-description">
                    {activity.description}
                  </p>

                  <div className="activity-info">

                    <span>
                      ⭐ {activity.rating}
                    </span>

                    <span>
                      ⏱️ {activity.duration}
                    </span>

                  </div>

                  <div className="activity-bottom">

                    <div>
                      <small>Starting from</small>

                      <strong>
                        ₹{activity.cost.toLocaleString()}
                      </strong>
                    </div>

                    <button
                      className="add-itinerary-btn"
                      onClick={() =>
                        addToItinerary(activity)
                      }
                    >
                      + Add
                    </button>

                  </div>

                  <button
                    className="details-btn"
                    onClick={() =>
                      viewDetails(activity)
                    }
                  >
                    View Details →
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-activities">

            <div className="no-icon">
              🔍
            </div>

            <h2>No Activities Found</h2>

            <p>
              Try changing your search or filters.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCity("All Cities");
                setSelectedCategory("All");
                setSelectedCost("All");
              }}
            >
              Reset Filters
            </button>

          </div>

        )}

      </main>

      {/* FOOTER */}
      <footer className="activity-footer">
        <div>
          <strong>✈ GlobeTrotter</strong>
          <p>
            Your personalized travel planning companion.
          </p>
        </div>

        <div className="footer-links">
          <span>Explore</span>
          <span>My Trips</span>
          <span>Privacy</span>
          <span>Help</span>
        </div>
      </footer>

    </div>
  );
}

export default ActivitySearch;