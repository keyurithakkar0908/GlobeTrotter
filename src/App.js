import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginScreen from "./components/LoginScreen";
import Dashboard from "./components/Dashboard";
import CreateTrip from "./components/CreateTrip";
import MyTrips from "./components/MyTrips";
import ItineraryBuilder from "./components/ItineraryBuilder";
import ItineraryView from "./components/ItineraryView";
import CitySearch from "./components/CitySearch";
import ActivitySearch from "./components/ActivitySearch";
import Budget from "./components/Budget";
import ShareTrip from "./components/ShareTrip";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";
import TripCalendar from "./components/TripCalendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>

<Route path="/" element={<LoginScreen />} />
<Route path="/login" element={<LoginScreen />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/create-trip" element={<CreateTrip />} />
<Route path="/my-trips" element={<MyTrips />} />
<Route path="/itinerary-builder" element={<ItineraryBuilder />} />
<Route path="/itinerary" element={<ItineraryView />} />
<Route path="/explore" element={<CitySearch />} />
<Route path="/activities" element={<ActivitySearch />} />
<Route path="/budget" element={<Budget />} />
<Route path="/share-trip" element={<ShareTrip />} />
<Route path="/profile" element={<Profile />} />
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/calendar" element={<TripCalendar />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;