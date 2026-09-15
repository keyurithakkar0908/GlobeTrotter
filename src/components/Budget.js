import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Budget.css";

function Budget() {
  const navigate = useNavigate();

  // Fixed trip budget
  const budget = 25000;

  // Expense data
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      category: "Transport",
      description: "Flight & Local Travel",
      amount: 8000,
    },
    {
      id: 2,
      category: "Stay",
      description: "Hotel Accommodation",
      amount: 6000,
    },
    {
      id: 3,
      category: "Food",
      description: "Meals & Restaurants",
      amount: 3000,
    },
    {
      id: 4,
      category: "Activities",
      description: "Water Sports & Sightseeing",
      amount: 2000,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newExpense, setNewExpense] = useState({
    category: "Food",
    description: "",
    amount: "",
  });

  // Calculate total spent
  const totalSpent = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  // Calculate remaining amount
  const remaining = budget - totalSpent;

  // Calculate budget percentage
  const percentage = Math.min(
    Math.round((totalSpent / budget) * 100),
    100
  );

  // Add expense
  const addExpense = (event) => {
    event.preventDefault();

    if (
      !newExpense.description.trim() ||
      !newExpense.amount ||
      Number(newExpense.amount) <= 0
    ) {
      alert("Please enter valid expense details.");
      return;
    }

    const expense = {
      id: Date.now(),
      category: newExpense.category,
      description: newExpense.description,
      amount: Number(newExpense.amount),
    };

    setExpenses([...expenses, expense]);

    setNewExpense({
      category: "Food",
      description: "",
      amount: "",
    });

    setShowForm(false);

    alert("Expense added successfully!");
  };

  // Delete expense
  const deleteExpense = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (confirmDelete) {
      setExpenses(
        expenses.filter((expense) => expense.id !== id)
      );
    }
  };

  // Category total
  const categoryTotal = (category) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce(
        (total, expense) => total + Number(expense.amount),
        0
      );
  };

  const transport = categoryTotal("Transport");
  const stay = categoryTotal("Stay");
  const food = categoryTotal("Food");
  const activities = categoryTotal("Activities");

  // Average cost per day
  const averagePerDay = Math.round(totalSpent / 6);

  return (
    <div className="budget-page">

      {/* ================= NAVBAR ================= */}

      <nav className="budget-navbar">

        <div
          className="budget-logo"
          onClick={() => navigate("/dashboard")}
        >
          <span>🌍</span>
          <strong>GlobeTrotter</strong>
        </div>

        <div className="budget-nav-links">

          <button onClick={() => navigate("/dashboard")}>
            Home
          </button>

          <button onClick={() => navigate("/my-trips")}>
            My Trips
          </button>

          <button onClick={() => navigate("/itinerary")}>
            Itinerary
          </button>

          <button className="budget-active">
            Budget
          </button>

        </div>

        <div className="budget-user">

          <div className="budget-avatar">
            K
          </div>

          <span>
            Keyuri
          </span>

        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="budget-container">


        {/* HEADER */}

        <div className="budget-header">

          <div>

            <span className="budget-label">
              TRIP FINANCES
            </span>

            <h1>
              Budget & Cost Breakdown
            </h1>

            <p>
              Track your spending and keep your Goa Adventure
              within budget.
            </p>

          </div>

          <select className="trip-select">

            <option>
              Goa Adventure
            </option>

            <option>
              Bali Escape
            </option>

            <option>
              European Tour
            </option>

          </select>

        </div>


        {/* ================= SUMMARY CARDS ================= */}

        <section className="budget-summary">


          {/* TOTAL */}

          <div className="budget-summary-card">

            <div className="summary-icon">
              💰
            </div>

            <span>
              Total Budget
            </span>

            <h2>
              ₹{budget.toLocaleString("en-IN")}
            </h2>

            <small>
              Planned trip budget
            </small>

          </div>


          {/* SPENT */}

          <div className="budget-summary-card">

            <div className="summary-icon spent-icon">
              💳
            </div>

            <span>
              Total Spent
            </span>

            <h2>
              ₹{totalSpent.toLocaleString("en-IN")}
            </h2>

            <small>
              {percentage}% of your budget
            </small>

          </div>


          {/* REMAINING */}

          <div className="budget-summary-card">

            <div className="summary-icon remaining-icon">
              🏦
            </div>

            <span>
              Remaining
            </span>

            <h2
              className={
                remaining < 0 ? "danger-text" : ""
              }
            >
              ₹{remaining.toLocaleString("en-IN")}
            </h2>

            <small>
              Available balance
            </small>

          </div>


          {/* AVERAGE */}

          <div className="budget-summary-card">

            <div className="summary-icon">
              📅
            </div>

            <span>
              Average / Day
            </span>

            <h2>
              ₹{averagePerDay.toLocaleString("en-IN")}
            </h2>

            <small>
              Based on 6 days
            </small>

          </div>

        </section>


        {/* ================= PROGRESS ================= */}

        <section className="budget-progress-card">

          <div className="progress-header">

            <div>

              <h2>
                Budget Progress
              </h2>

              <p>
                ₹{totalSpent.toLocaleString("en-IN")} spent
                {" "}of{" "}
                ₹{budget.toLocaleString("en-IN")}
              </p>

            </div>

            <strong>
              {percentage}%
            </strong>

          </div>


          <div className="budget-progress-background">

            <div
              className={
                percentage >= 90
                  ? "budget-progress-fill warning"
                  : "budget-progress-fill"
              }
              style={{
                width: `${percentage}%`,
              }}
            ></div>

          </div>


          {percentage >= 90 && (

            <div className="budget-warning">

              ⚠️ You are close to your budget limit.

            </div>

          )}

        </section>


        {/* ================= CHART + BREAKDOWN ================= */}

        <section className="budget-main-grid">


          {/* DONUT CHART */}

          <div className="budget-card">

            <div className="budget-card-heading">

              <div>

                <span>
                  EXPENSE OVERVIEW
                </span>

                <h2>
                  Spending Distribution
                </h2>

              </div>

            </div>


            <div className="budget-donut">

              <div className="budget-donut-center">

                <strong>
                  ₹{totalSpent.toLocaleString("en-IN")}
                </strong>

                <span>
                  Total Spent
                </span>

              </div>

            </div>


            {/* LEGEND */}

            <div className="budget-legend">

              <div>

                <span className="legend-box transport"></span>

                Transport

                <strong>
                  ₹{transport.toLocaleString("en-IN")}
                </strong>

              </div>


              <div>

                <span className="legend-box stay"></span>

                Stay

                <strong>
                  ₹{stay.toLocaleString("en-IN")}
                </strong>

              </div>


              <div>

                <span className="legend-box food"></span>

                Food

                <strong>
                  ₹{food.toLocaleString("en-IN")}
                </strong>

              </div>


              <div>

                <span className="legend-box activity"></span>

                Activities

                <strong>
                  ₹{activities.toLocaleString("en-IN")}
                </strong>

              </div>

            </div>

          </div>


          {/* CATEGORY BREAKDOWN */}

          <div className="budget-card">

            <div className="budget-card-heading">

              <div>

                <span>
                  COST BREAKDOWN
                </span>

                <h2>
                  Expense Categories
                </h2>

              </div>

            </div>


            <div className="category-list">


              {/* TRANSPORT */}

              <div className="category-item">

                <div className="category-left">

                  <div className="category-icon">
                    ✈️
                  </div>

                  <div>

                    <strong>
                      Transport
                    </strong>

                    <small>
                      Flights & local travel
                    </small>

                  </div>

                </div>

                <strong>
                  ₹{transport.toLocaleString("en-IN")}
                </strong>

              </div>


              {/* STAY */}

              <div className="category-item">

                <div className="category-left">

                  <div className="category-icon">
                    🏨
                  </div>

                  <div>

                    <strong>
                      Stay
                    </strong>

                    <small>
                      Hotels & accommodation
                    </small>

                  </div>

                </div>

                <strong>
                  ₹{stay.toLocaleString("en-IN")}
                </strong>

              </div>


              {/* FOOD */}

              <div className="category-item">

                <div className="category-left">

                  <div className="category-icon">
                    🍴
                  </div>

                  <div>

                    <strong>
                      Food
                    </strong>

                    <small>
                      Meals & restaurants
                    </small>

                  </div>

                </div>

                <strong>
                  ₹{food.toLocaleString("en-IN")}
                </strong>

              </div>


              {/* ACTIVITIES */}

              <div className="category-item">

                <div className="category-left">

                  <div className="category-icon">
                    🎯
                  </div>

                  <div>

                    <strong>
                      Activities
                    </strong>

                    <small>
                      Experiences & sightseeing
                    </small>

                  </div>

                </div>

                <strong>
                  ₹{activities.toLocaleString("en-IN")}
                </strong>

              </div>

            </div>


            <button
              className="add-expense-button"
              onClick={() => setShowForm(!showForm)}
            >
              + Add Expense
            </button>

          </div>

        </section>


        {/* ================= ADD EXPENSE ================= */}

        {showForm && (

          <section className="expense-form-card">

            <div className="expense-form-header">

              <div>

                <span>
                  NEW EXPENSE
                </span>

                <h2>
                  Add Trip Expense
                </h2>

              </div>

              <button
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>

            </div>


            <form onSubmit={addExpense}>

              <div className="expense-form-grid">


                {/* CATEGORY */}

                <div className="form-field">

                  <label>
                    Category
                  </label>

                  <select
                    value={newExpense.category}
                    onChange={(event) =>
                      setNewExpense({
                        ...newExpense,
                        category: event.target.value,
                      })
                    }
                  >

                    <option>
                      Transport
                    </option>

                    <option>
                      Stay
                    </option>

                    <option>
                      Food
                    </option>

                    <option>
                      Activities
                    </option>

                  </select>

                </div>


                {/* DESCRIPTION */}

                <div className="form-field">

                  <label>
                    Description
                  </label>

                  <input
                    type="text"
                    placeholder="Example: Dinner"
                    value={newExpense.description}
                    onChange={(event) =>
                      setNewExpense({
                        ...newExpense,
                        description: event.target.value,
                      })
                    }
                  />

                </div>


                {/* AMOUNT */}

                <div className="form-field">

                  <label>
                    Amount (₹)
                  </label>

                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={newExpense.amount}
                    onChange={(event) =>
                      setNewExpense({
                        ...newExpense,
                        amount: event.target.value,
                      })
                    }
                  />

                </div>

              </div>


              <button
                type="submit"
                className="save-expense-button"
              >
                Save Expense
              </button>

            </form>

          </section>

        )}


        {/* ================= EXPENSE HISTORY ================= */}

        <section className="expense-list-card">

          <div className="budget-card-heading">

            <div>

              <span>
                TRANSACTION HISTORY
              </span>

              <h2>
                Recent Expenses
              </h2>

            </div>

            <span className="expense-count">
              {expenses.length} expenses
            </span>

          </div>


          <div className="expense-table">

            {expenses.map((expense) => (

              <div
                className="expense-row"
                key={expense.id}
              >

                <div className="expense-info">

                  <div className="expense-category-icon">

                    {expense.category === "Transport"
                      ? "✈️"
                      : expense.category === "Stay"
                      ? "🏨"
                      : expense.category === "Food"
                      ? "🍴"
                      : "🎯"}

                  </div>


                  <div>

                    <strong>
                      {expense.description}
                    </strong>

                    <small>
                      {expense.category}
                    </small>

                  </div>

                </div>


                <strong className="expense-amount">

                  ₹{Number(expense.amount).toLocaleString("en-IN")}

                </strong>


                <button
                  className="delete-expense"
                  onClick={() => deleteExpense(expense.id)}
                  title="Delete expense"
                >
                  🗑️
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* ================= BOTTOM ACTIONS ================= */}

        <div className="budget-bottom-actions">

          <button
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

          <button
            onClick={() => navigate("/itinerary")}
          >
            View Itinerary
          </button>

          <button
            onClick={() => navigate("/my-trips")}
          >
            My Trips
          </button>

        </div>

      </main>


      {/* ================= MOBILE NAV ================= */}

      <div className="budget-mobile-nav">

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
          onClick={() => navigate("/itinerary")}
        >
          📅
          <span>
            Plan
          </span>
        </button>


        <button className="mobile-budget-active">
          💰
          <span>
            Budget
          </span>
        </button>

      </div>

    </div>
  );
}

export default Budget;