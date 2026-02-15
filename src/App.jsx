import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= PUBLIC ================= */
import Login from "./components/pages/login/Login";

/* ================= MEMBER ================= */
import Home from "./components/pages/podMembers/dashboard/Home";
import LogHours from "./components/pages/podMembers/logHours/LogHours";
import Alerts from "./components/pages/podMembers/alerts/Alerts";
import Settings from "./components/pages/podMembers/settings/Settings";
import Profile from "./components/pages/podMembers/profile/Profile";
import MemberLayout from "./components/layout/MemberLayout";

/* ================= LEAD ================= */
import LeadLayout from "./components/layout/LeadLayout";
import Overview from "./components/pages/podLeads/LeadOverview/Overview";
import ProjectLeadActualHours from "./components/pages/podLeads/actualHoursLead/ProjectLeadActualHours";
import EachProject from "./components/pages/podLeads/project/EachProject";
import AddProject from "./components/pages/podLeads/addProject/AddProject";
import EachMember from "./components/pages/podLeads/member/EachMember";

/* ================= ADMIN ================= */
import AdminLayout from "./components/layout/AdminLayout";
import AdminHome from "./components/pages/admin/adminDashboard/adminHome";

import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>

          {/* PUBLIC */}
          <Route path="/" element={<Login />} />

          {/* MEMBER ROUTES */}
          <Route path="/member" element={<MemberLayout />}>
            <Route index element={<Home />} />
            <Route path="log-hours" element={<LogHours />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* LEAD ROUTES */}
          <Route path="/lead" element={<LeadLayout />}>
            <Route index element={<Overview />} />
            <Route path="actual-hours" element={<ProjectLeadActualHours />} />
            <Route path="alerts" element={<div>Lead Alerts (coming soon)</div>} />
            <Route path="project/:id" element={<EachProject />} />
            <Route path="member/:name" element={<EachMember />} />
            <Route path="addprojects" element={<AddProject />} />
          </Route>

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="projects" element={<div>Admin Projects (Coming Soon)</div>} />
            <Route path="members" element={<div>Admin Members (Coming Soon)</div>} />
            <Route path="alerts" element={<div>Admin Alerts (Coming Soon)</div>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
