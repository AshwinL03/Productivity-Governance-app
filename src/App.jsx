import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/login/Login";
import Home from "./components/pages/podMembers/dashboard/Home";
import LogHours from "./components/pages/podMembers/logHours/LogHours";
import Alerts from "./components/pages/podMembers/alerts/Alerts";
import MainLayout from "./components/layout/MainLayout";

// 🔥 Add these
import Settings from "./components/pages/podMembers/settings/Settings";
// import Profile from "./components/pages/podMembers/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Login Page */}
        <Route path="/" element={<Login />} />

        {/* POD Member Layout */}
        <Route path="/member" element={<MainLayout />}>

          {/* /member */}
          <Route index element={<Home />} />

          {/* /member/log-hours */}
          <Route path="log-hours" element={<LogHours />} />

          {/* /member/alerts */}
          <Route path="alerts" element={<Alerts />} />

          <Route path="settings" element={<Settings />} />
          {/* <Route path="profile" element={<Profile />} /> */}

        </Route>

        {/* Temporary Routes for Lead & Admin */}
        <Route path="/lead" element={<div>Lead Page (Coming Soon)</div>} />
        <Route path="/admin" element={<div>Admin Page (TBD)</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
