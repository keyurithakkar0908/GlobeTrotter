import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./CitySearch.css";

function CitySearch() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Recommended");

  const cities = [
    {
      id: 1,
      name: "Jaipur",
      country: "India",
      budget: "₹15,000 - ₹25,000",
      duration: "3-5 Days",
      bestTime: "Oct - Mar",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 2,
      name: "Goa",
      country: "India",
      budget: "₹12,000 - ₹22,000",
      duration: "3-5 Days",
      bestTime: "Nov - Feb",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 3,
      name: "Manali",
      country: "India",
      budget: "₹14,000 - ₹24,000",
      duration: "4-6 Days",
      bestTime: "Oct - Jun",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 4,
      name: "Udaipur",
      country: "India",
      budget: "₹13,000 - ₹23,000",
      duration: "2-4 Days",
      bestTime: "Oct - Mar",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 5,
      name: "Kerala",
      country: "India",
      budget: "₹18,000 - ₹30,000",
      duration: "5-7 Days",
      bestTime: "Sep - Mar",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 6,
      name: "Delhi",
      country: "India",
      budget: "₹10,000 - ₹20,000",
      duration: "2-4 Days",
      bestTime: "Oct - Mar",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=85"
    }
  ];

  const filteredCities = cities
    .filter((city) =>
      `${city.name} ${city.country}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "Name A-Z") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

  return (
    <div className="page">
      <Navbar />

      <main className="city-search-page">
        <div className="container">

          <div className="city-header">
            <div>
              <span className="label">EXPLORE THE WORLD</span>
              <h1>Find Your Next Destination</h1>
              <p>
                Discover beautiful destinations and start planning your next adventure.
              </p>
            </div>

            <Link to="/create-trip" className="btn">
              + Plan New Trip
            </Link>
          </div>

          <div className="city-search-box card">
            <div className="city-search-input">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button onClick={() => setSearch("")}>
                  ×
                </button>
              )}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Recommended</option>
              <option>Name A-Z</option>
            </select>
          </div>

          <div className="city-results-header">
            <div>
              <span className="label">DESTINATIONS</span>
              <h2>{filteredCities.length} destinations found</h2>
            </div>

            <span className="city-result-note">
              📍 Explore popular places
            </span>
          </div>

          {filteredCities.length > 0 ? (
            <div className="city-grid">

              {filteredCities.map((city) => (
                <article className="city-card card" key={city.id}>

                  <div className="city-image">

                    <img
                      src={city.image}
                      alt={`${city.name} destination`}
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.classList.add(
                          "image-fallback"
                        );
                      }}
                    />

                    <div className="city-image-overlay"></div>

                    <div className="city-location">
                      📍 {city.name}, {city.country}
                    </div>

                    <span className="city-badge">
                      Popular
                    </span>

                  </div>

                  <div className="city-card-body">

                    <div className="city-title-row">
                      <div>
                        <h3>{city.name}</h3>
                        <p>{city.country}</p>
                      </div>

                      <span className="city-icon">
                        🌍
                      </span>
                    </div>

                    <div className="city-info-grid">

                      <div>
                        <span>💰</span>
                        <div>
                          <small>Budget</small>
                          <strong>{city.budget}</strong>
                        </div>
                      </div>

                      <div>
                        <span>📅</span>
                        <div>
                          <small>Duration</small>
                          <strong>{city.duration}</strong>
                        </div>
                      </div>

                      <div>
                        <span>☀️</span>
                        <div>
                          <small>Best Time</small>
                          <strong>{city.bestTime}</strong>
                        </div>
                      </div>

                    </div>

                    <div className="city-actions">
                      <Link
                        to="/itinerary"
                        className="btn secondary"
                      >
                        View Details
                      </Link>

                      <Link
                        to="/create-trip"
                        className="btn"
                      >
                        Plan Trip →
                      </Link>
                    </div>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="city-empty card">
              <div>🔎</div>
              <h2>No destinations found</h2>
              <p>
                Try searching for another city or destination.
              </p>

              <button
                className="btn"
                onClick={() => setSearch("")}
              >
                Clear Search
              </button>
            </div>
          )}

          <div className="city-tip">

            <div className="tip-icon">
              ✨
            </div>

            <div>
              <span className="label">
                SMART TRAVEL TIP
              </span>

              <h3>
                Plan around the best travel season
              </h3>

              <p>
                Choosing the right season can make your trip more
                comfortable and help you enjoy more experiences.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default CitySearch;