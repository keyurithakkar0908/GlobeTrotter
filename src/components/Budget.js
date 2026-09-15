import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Budget.css";

function Budget() {
  const totalBudget = 25000;

  const [expenses, setExpenses] = useState({
    accommodation: 8000,
    food: 4500,
    transport: 5000,
    activities: 3500,
    shopping: 2000,
    other: 500,
  });

  const expenseItems = [
    {
      key: "accommodation",
      name: "Accommodation",
      icon: "🏨",
      description: "Hotels and stays",
    },
    {
      key: "food",
      name: "Food & Dining",
      icon: "🍽️",
      description: "Meals and restaurants",
    },
    {
      key: "transport",
      name: "Transport",
      icon: "🚗",
      description: "Flights, trains and local travel",
    },
    {
      key: "activities",
      name: "Activities",
      icon: "🎯",
      description: "Tours and experiences",
    },
    {
      key: "shopping",
      name: "Shopping",
      icon: "🛍️",
      description: "Souvenirs and personal shopping",
    },
    {
      key: "other",
      name: "Other",
      icon: "📦",
      description: "Other travel expenses",
    },
  ];

  const spent = useMemo(() => {
    return Object.values(expenses).reduce(
      (total, value) => total + Number(value || 0),
      0
    );
  }, [expenses]);

  const remaining = totalBudget - spent;
  const percentage = Math.min(
    Math.round((spent / totalBudget) * 100),
    100
  );

  const updateExpense = (key, value) => {
    setExpenses((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <div className="page">
      <Navbar />

      <main className="budget-page">
        <div className="container">

          <div className="budget-header">
            <div>
              <span className="label">TRIP FINANCES</span>
              <h1>Travel Budget</h1>
              <p>
                Track your expenses and keep your trip within budget.
              </p>
            </div>

            <Link to="/itinerary" className="btn">
              🗓️ View Itinerary
            </Link>
          </div>

          <div className="budget-overview card">

            <div className="budget-overview-item">
              <span className="budget-overview-icon">💰</span>
              <div>
                <span className="label">TOTAL BUDGET</span>
                <strong>₹{totalBudget.toLocaleString()}</strong>
              </div>
            </div>

            <div className="budget-overview-item">
              <span className="budget-overview-icon">💳</span>
              <div>
                <span className="label">TOTAL SPENT</span>
                <strong>₹{spent.toLocaleString()}</strong>
              </div>
            </div>

            <div className="budget-overview-item">
              <span className="budget-overview-icon">💵</span>
              <div>
                <span className="label">REMAINING</span>
                <strong className={remaining < 0 ? "over-budget" : ""}>
                  ₹{remaining.toLocaleString()}
                </strong>
              </div>
            </div>

          </div>

          <div className="budget-layout">

            <section className="expenses-section card">

              <div className="section-heading">
                <div>
                  <span className="label">EXPENSE BREAKDOWN</span>
                  <h2>Where your money goes</h2>
                </div>

                <span className="spent-badge">
                  {percentage}% used
                </span>
              </div>

              <div className="expense-list">

                {expenseItems.map((item) => (
                  <div className="expense-item" key={item.key}>

                    <div className="expense-info">
                      <span className="expense-icon">
                        {item.icon}
                      </span>

                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>

                    <div className="expense-input-wrapper">
                      <span>₹</span>

                      <input
                        type="number"
                        min="0"
                        value={expenses[item.key]}
                        onChange={(e) =>
                          updateExpense(item.key, e.target.value)
                        }
                      />
                    </div>

                  </div>
                ))}

              </div>

              <div className="expense-total">
                <span>Total Planned Expenses</span>
                <strong>₹{spent.toLocaleString()}</strong>
              </div>

            </section>

            <aside className="budget-sidebar">

              <div className="budget-chart-card card">

                <span className="label">BUDGET STATUS</span>

                <div className="budget-circle">
                  <div
                    className="budget-circle-progress"
                    style={{
                      background: `conic-gradient(#0b3d82 ${
                        percentage * 3.6
                      }deg, #e8eef5 0deg)`,
                    }}
                  >
                    <div className="budget-circle-inner">
                      <strong>{percentage}%</strong>
                      <span>Used</span>
                    </div>
                  </div>
                </div>

                <div className="budget-chart-text">
                  {remaining >= 0 ? (
                    <>
                      <strong>
                        ₹{remaining.toLocaleString()} left
                      </strong>
                      <p>
                        You are currently within your travel budget.
                      </p>
                    </>
                  ) : (
                    <>
                      <strong className="over-budget">
                        ₹{Math.abs(remaining).toLocaleString()} over
                      </strong>
                      <p>
                        Reduce some expenses to stay within budget.
                      </p>
                    </>
                  )}
                </div>

                <div className="budget-legend">
                  <div>
                    <span className="legend-dot spent"></span>
                    <span>Spent</span>
                    <strong>₹{spent.toLocaleString()}</strong>
                  </div>

                  <div>
                    <span className="legend-dot remaining"></span>
                    <span>Remaining</span>
                    <strong>
                      ₹{Math.max(remaining, 0).toLocaleString()}
                    </strong>
                  </div>
                </div>

              </div>

              <div className="budget-tip">

                <div className="tip-icon">
                  💡
                </div>

                <div>
                  <span className="label">
                    SMART BUDGET TIP
                  </span>

                  <h3>
                    Keep a small emergency fund
                  </h3>

                  <p>
                    Try keeping 10% of your total budget aside for
                    unexpected travel expenses.
                  </p>
                </div>

              </div>

            </aside>

          </div>

          <div className="budget-actions">
            <Link to="/itinerary" className="btn secondary">
              ← Back to Itinerary
            </Link>

            <button
              className="btn"
              onClick={() =>
                alert("Budget changes saved successfully.")
              }
            >
              ✓ Save Budget
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Budget;