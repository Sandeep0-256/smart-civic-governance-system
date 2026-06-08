import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ReportIssue from "./Pages/ReportIssue";
import TrackComplaint from "./Pages/TrackComplaint";
import Leaderboard from "./Pages/Leaderboard";
import Profile from "./Pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/track" element={<TrackComplaint />} />
        <Route
  path="/leaderboard"
  element={<Leaderboard />}
/>
        <Route
  path="/profile"
  element={<Profile />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;