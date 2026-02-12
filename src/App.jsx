import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/login/Login";
import Home from "./components/pages/podMembers/dashboard/Home";
import LogHours from "./components/pages/podMembers/logHours/LogHours";
import Alerts from "./components/pages/podMembers/alerts/Alerts";
import Settings from "./components/pages/podMembers/settings/Settings";
import Profile from "./components/pages/podMembers/profile/Profile";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Login Page */}
        <Route path="/" element={<Login />} />

        {/* POD Member Layout */}
        <Route path="/member" element={<MainLayout />}>

          {/* Dashboard */}
          <Route index element={<Home />} />

          {/* Other Pages */}
          <Route path="log-hours" element={<LogHours />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
