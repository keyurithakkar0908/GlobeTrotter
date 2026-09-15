import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter your email and password.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* LEFT BLUE SECTION */}
      <div className="login-left">

        <div className="login-brand">
          <div className="login-brand-icon">🌍</div>

          <div>
            <h1>GlobeTrotter</h1>
            <p>Personalized Travel Planning</p>
          </div>
        </div>


        <div className="login-left-content">

          <span className="login-small-title">
            PLAN • EXPLORE • TRAVEL
          </span>

          <h2>
            Your journey,
            <br />
            your way.
          </h2>

          <p>
            Discover amazing destinations, create personalized
            itineraries and manage every part of your trip in one place.
          </p>


          <div className="login-features">

            <div className="login-feature">
              <span>🗺️</span>
              <div>
                <strong>Personalized Trips</strong>
                <small>Create trips based on your preferences.</small>
              </div>
            </div>


            <div className="login-feature">
              <span>📅</span>
              <div>
                <strong>Smart Itinerary</strong>
                <small>Organize your travel plans easily.</small>
              </div>
            </div>


            <div className="login-feature">
              <span>💰</span>
              <div>
                <strong>Budget Planning</strong>
                <small>Keep your travel expenses under control.</small>
              </div>
            </div>

          </div>

        </div>


        <div className="login-left-footer">
          <span>✈️</span>
          <span>Make every journey memorable.</span>
        </div>

      </div>


      {/* RIGHT LOGIN SECTION */}
      <div className="login-right">

        <div className="login-card">

          <div className="login-card-header">

            <div className="login-mobile-logo">
              🌍
            </div>

            <h2>Welcome Back!</h2>

            <p>
              Sign in to continue planning your next adventure.
            </p>

          </div>


          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="login-form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="login-input-wrapper">

                <span className="login-input-icon">
                  ✉️
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="login-form-group">

              <div className="password-label-row">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    setError("Password reset feature will be available soon.")
                  }
                >
                  Forgot Password?
                </button>

              </div>


              <div className="login-input-wrapper">

                <span className="login-input-icon">
                  🔒
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label="Show or hide password"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>


            {/* REMEMBER */}
            <div className="login-options">

              <label className="remember-me">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {/* ERROR */}
            {error && (
              <div className="login-error">
                {error}
              </div>
            )}


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-button"
            >
              Sign In
            </button>

          </form>


          {/* DIVIDER */}
          <div className="login-divider">

            <span></span>

            <p>OR</p>

            <span></span>

          </div>


          {/* GUEST */}
          <button
            type="button"
            className="guest-button"
            onClick={() => navigate("/dashboard")}
          >
            Continue as Guest
          </button>


          {/* SIGN UP */}
          <div className="signup-section">

            <p>
              Don't have an account?
            </p>

            <Link to="/dashboard">
              Create an Account
            </Link>

          </div>


          <div className="login-security">
            🔐 Your information is kept secure.
          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginScreen;