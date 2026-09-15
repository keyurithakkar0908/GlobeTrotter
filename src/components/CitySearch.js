import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CitySearch.css";

function CitySearch() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const cities = [
    {
      name: "Goa",
      country: "India",
      category: "Beach",
      rating: "4.8",
      cost: "₹2,500/day",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Bali",
      country: "Indonesia",
      category: "Beach",
      rating: "4.9",
      cost: "₹4,000/day",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Paris",
      country: "France",
      category: "Culture",
      rating: "4.7",
      cost: "₹9,500/day",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Dubai",
      country: "UAE",
      category: "Luxury",
      rating: "4.8",
      cost: "₹7,000/day",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Tokyo",
      country: "Japan",
      category: "Culture",
      rating: "4.8",
      cost: "₹8,000/day",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "London",
      country: "United Kingdom",
      category: "Culture",
      rating: "4.7",
      cost: "₹9,000/day",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Singapore",
      country: "Singapore",
      category: "Luxury",
      rating: "4.8",
      cost: "₹6,500/day",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80"
    },
    {
      name: "Maldives",
      country: "Maldives",
      category: "Beach",
      rating: "4.9",
      cost: "₹10,000/day",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const categories = [
    "All",
    "Beach",
    "Nature",
    "Culture",
    "Luxury"
  ];

  const filteredCities = cities.filter((city) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      city.name.toLowerCase().includes(searchText) ||
      city.country.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || city.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleAddToTrip = (cityName) => {
    alert(`${cityName} selected! Add this destination to your trip.`);
    navigate("/itinerary-builder");
  };

  return (
    <div className="explore-page">

      {/* ================= NAVBAR ================= */}

      <nav className="explore-navbar">

        <div
          className="explore-logo"
          onClick={() => navigate("/dashboard")}
        >
          🌍 GlobeTrotter
        </div>

        <div className="explore-nav-links">

          <button onClick={() => navigate("/dashboard")}>
            Home
          </button>

          <button onClick={() => navigate("/my-trips")}>
            My Trips
          </button>

          <button className="active">
            Explore
          </button>

        </div>

        <div className="explore-profile">

          <div className="profile-avatar">
            K
          </div>

          <span>Keyuri</span>

        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="explore-container">

        {/* HEADER */}

        <section className="explore-header">

          <button
            className="back-dashboard"
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Dashboard
          </button>

          <h1>Explore Cities 🌎</h1>

          <p>
            Discover beautiful destinations and plan your next adventure.
          </p>

        </section>


        {/* ================= SEARCH ================= */}

        <section className="explore-search-section">

          <div className="explore-search-box">

            <span className="search-symbol">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search city or country..."
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}

          </div>

        </section>


        {/* ================= FILTERS ================= */}

        <section className="filter-section">

          <div className="filter-title">
            Explore by category
          </div>

          <div className="filter-buttons">

            {categories.map((item) => (

              <button
                key={item}
                className={
                  category === item
                    ? "filter-button selected"
                    : "filter-button"
                }
                onClick={() => setCategory(item)}
              >
                {item === "All" && "🌎 "}
                {item === "Beach" && "🏖️ "}
                {item === "Nature" && "🌿 "}
                {item === "Culture" && "🏛️ "}
                {item === "Luxury" && "✨ "}

                {item}
              </button>

            ))}

          </div>

        </section>


        {/* ================= RESULT HEADER ================= */}

        <section className="destination-heading">

          <div>
            <h2>Popular Destinations</h2>

            <p>
              {filteredCities.length} destinations found
            </p>
          </div>

          <button
            className="smart-button"
            onClick={() =>
              alert(
                "Smart Recommendations will suggest destinations according to your interests, budget and travel style."
              )
            }
          >
            ✨ Smart Recommendations
          </button>

        </section>


        {/* ================= CITY CARDS ================= */}

        {filteredCities.length > 0 ? (

          <section className="city-grid">

            {filteredCities.map((city) => (

              <article
                className="city-card"
                key={city.name}
              >

                {/* IMAGE */}

                <div
                  className="city-card-image"
                  style={{
                    backgroundImage: `url("${city.image}")`
                  }}
                >

                  <span className="city-category">
                    {city.category}
                  </span>

                  <button
                    className="favorite-button"
                    onClick={() =>
                      alert(`${city.name} added to favorites ❤️`)
                    }
                  >
                    ♡
                  </button>

                </div>


                {/* CONTENT */}

                <div className="city-card-content">

                  <div className="city-title-row">

                    <div>

                      <h3>
                        {city.name}
                      </h3>

                      <p>
                        📍 {city.country}
                      </p>

                    </div>

                    <div className="city-rating">
                      ⭐ {city.rating}
                    </div>

                  </div>


                  <div className="city-details">

                    <div>
                      <span>💰</span>
                      <span>
                        {city.cost}
                      </span>
                    </div>

                    <div>
                      <span>🌍</span>
                      <span>
                        Popular
                      </span>
                    </div>

                  </div>


                  <div className="city-card-buttons">

                    <button
                      className="details-btn"
                      onClick={() =>
                        alert(
                          `${city.name}\n\nCountry: ${city.country}\nRating: ${city.rating}\nEstimated Cost: ${city.cost}`
                        )
                      }
                    >
                      View Details
                    </button>

                    <button
                      className="add-trip-btn"
                      onClick={() =>
                        handleAddToTrip(city.name)
                      }
                    >
                      + Add to Trip
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </section>

        ) : (

          <div className="no-results">

            <div className="no-results-icon">
              🔎
            </div>

            <h2>
              No destinations found
            </h2>

            <p>
              Try searching for another city or country.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>

          </div>

        )}

      </main>

    </div>
  );
}

export default CitySearch;