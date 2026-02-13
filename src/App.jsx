import { BrowserRouter, Routes, Route } from "react-router-dom";

/* =========================
   Public Pages
========================= */
import Login from "./components/pages/login/Login";

/* =========================
   POD Member Pages
========================= */
import Home from "./components/pages/podMembers/dashboard/Home";
import LogHours from "./components/pages/podMembers/logHours/LogHours";
import Alerts from "./components/pages/podMembers/alerts/Alerts";
import Settings from "./components/pages/podMembers/settings/Settings";
import Profile from "./components/pages/podMembers/profile/Profile";
import MainLayout from "./components/layout/MemberLayout";

/* =========================
   Admin Pages
========================= */
import AdminLayout from "./components/layout/AdminLayout";
import AdminHome from "./components/pages/admin/adminDashboard/adminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Login />} />

        {/* ================= MEMBER ================= */}
        <Route path="/member" element={<MainLayout />}>
          {/* /member */}
          <Route index element={<Home />} />
          {/* /member/log-hours */}
          <Route path="log-hours" element={<LogHours />} />
          {/* /member/alerts */}
          <Route path="alerts" element={<Alerts />} />
          {/* /member/settings */}
          <Route path="settings" element={<Settings />} />
          {/* /member/profile */}
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================= LEAD (temporary) ================= */}
        <Route path="/lead" element={<div>Lead Page (Coming Soon)</div>} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* /admin */}
          <Route index element={<AdminHome />} />
          <Route path="projects" element={<div>Admin Projects (Coming Soon)</div>} />
          <Route path="members" element={<div>Admin Members (Coming Soon)</div>} />
          <Route path="alerts" element={<div>Admin Alerts (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
