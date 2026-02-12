import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/login/Login";
import Home from "./components/pages/podMembers/dashboard/Home";
import LogHours from "./components/pages/podMembers/logHours/LogHours";
import MainLayout from "./components/layout/MainLayout";
import Alerts from "./components/pages/podMembers/alerts/Alerts";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Login Page */}
        <Route path="/" element={<Login />} />

        {/* POD Member Layout */}
        <Route path="/member" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="log-hours" element={<LogHours />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>

        {/* Temporary Routes for Lead & Admin */}
        <Route path="/lead" element={<div>Lead Page (Coming Soon)</div>} />
        <Route path="/admin" element={<div>Admin Page (TBD)</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
