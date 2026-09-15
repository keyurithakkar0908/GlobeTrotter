import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

function LoginScreen() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Signup states
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [terms, setTerms] = useState(false);

  // =========================
  // LOGIN
  // =========================

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      alert("Please enter email and password.");
      return;
    }

    alert("Login successful!");

    navigate("/dashboard");
  };

  // =========================
  // SIGNUP
  // =========================

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !name ||
      !signupEmail ||
      !signupPassword ||
      !confirmPassword
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (signupPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (signupPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!terms) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    alert("Account created successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* ==================================
          LEFT SIDE
      ================================== */}

      <div className="login-left">

        <div className="login-left-content">

          <div className="login-logo">
            🌍 GlobeTrotter
          </div>

          <h1>
            Your journey,
            <br />
            your way.
          </h1>

          <p className="login-description">
            Plan unforgettable trips, discover amazing
            destinations and create personalized travel
            experiences with GlobeTrotter.
          </p>

          <div className="login-features">

            <div className="login-feature">

              <div className="feature-icon">
                🗺️
              </div>

              <div>
                <h3>Personalized Trips</h3>

                <p>
                  Create trips based on your interests,
                  budget and travel style.
                </p>
              </div>

            </div>

            <div className="login-feature">

              <div className="feature-icon">
                💰
              </div>

              <div>
                <h3>Smart Budget Planning</h3>

                <p>
                  Track your travel expenses and manage
                  your budget easily.
                </p>
              </div>

            </div>

            <div className="login-feature">

              <div className="feature-icon">
                ✨
              </div>

              <div>
                <h3>Discover More</h3>

                <p>
                  Find destinations and activities that
                  match your travel interests.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ==================================
          RIGHT SIDE
      ================================== */}

      <div className="login-right">

        <div className="login-card">

          {/* ==================================
              LOGIN FORM
          ================================== */}

          {!isSignup && (

            <>

              <h2 className="login-title">
                Welcome Back
              </h2>

              <p className="login-subtitle">
                Login to continue your travel journey.
              </p>

              <form onSubmit={handleLogin}>

                {/* EMAIL */}

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) =>
                      setLoginEmail(e.target.value)
                    }
                  />

                </div>


                {/* PASSWORD */}

                <div className="form-group">

                  <label>
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) =>
                      setLoginPassword(e.target.value)
                    }
                  />

                </div>


                {/* REMEMBER + FORGOT */}

                <div className="login-options">

                  <label className="remember-me">

                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                    />

                    <span>
                      Remember me
                    </span>

                  </label>

                  <button
                    type="button"
                    className="forgot-password"
                    onClick={() =>
                      alert(
                        "Password reset feature will be added later."
                      )
                    }
                  >
                    Forgot Password?
                  </button>

                </div>


                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  className="login-button"
                >
                  Login
                </button>

              </form>


              {/* DIVIDER */}

              <div className="login-divider">

                <span>
                  OR
                </span>

              </div>


              {/* DEMO ACCOUNT */}

              <div className="demo-account">

                <strong>
                  Demo Account
                </strong>

                <p>
                  Email: demo@globetrotter.com
                </p>

                <p>
                  Password: 123456
                </p>

              </div>


              {/* SIGNUP */}

              <div className="login-signup">

                <span>
                  Don't have an account?
                </span>

                <button
                  type="button"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>

              </div>

            </>

          )}


          {/* ==================================
              SIGNUP FORM
          ================================== */}

          {isSignup && (

            <>

              <h2 className="login-title">
                Create Account
              </h2>

              <p className="login-subtitle">
                Create your GlobeTrotter account.
              </p>

              <form onSubmit={handleSignup}>

                {/* NAME */}

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />

                </div>


                {/* EMAIL */}

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={signupEmail}
                    onChange={(e) =>
                      setSignupEmail(e.target.value)
                    }
                  />

                </div>


                {/* PASSWORD */}

                <div className="form-group">

                  <label>
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create a password"
                    value={signupPassword}
                    onChange={(e) =>
                      setSignupPassword(e.target.value)
                    }
                  />

                </div>


                {/* CONFIRM PASSWORD */}

                <div className="form-group">

                  <label>
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                  />

                </div>


                {/* LANGUAGE */}

                <div className="form-group">

                  <label>
                    Preferred Language
                  </label>

                  <select
                    value={language}
                    onChange={(e) =>
                      setLanguage(e.target.value)
                    }
                  >

                    <option value="English">
                      English
                    </option>

                    <option value="Gujarati">
                      Gujarati
                    </option>

                    <option value="Hindi">
                      Hindi
                    </option>

                  </select>

                </div>


                {/* TERMS */}

                <div className="signup-terms">

                  <input
                    type="checkbox"
                    id="terms"
                    checked={terms}
                    onChange={(e) =>
                      setTerms(e.target.checked)
                    }
                  />

                  <label htmlFor="terms">

                    I agree to the{" "}

                    <span>
                      Terms & Conditions
                    </span>

                  </label>

                </div>


                {/* SIGNUP BUTTON */}

                <button
                  type="submit"
                  className="login-button"
                >
                  Create Account
                </button>

              </form>


              {/* BACK TO LOGIN */}

              <div className="login-signup">

                <span>
                  Already have an account?
                </span>

                <button
                  type="button"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </button>

              </div>

            </>

          )}

        </div>

      </div>

    </div>
  );
}

export default LoginScreen;