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
import MemberLayout from "./components/layout/MemberLayout";
 
/* =========================
   LEAD Pages
========================= */
import LeadLayout from "./components/layout/LeadLayout";
import Overview from "./components/pages/podLeads/leadOverview/OverviewCardSec";
import ProjectLeadActualHours from "./components/pages/podLeads/actualHoursLead/ProjectLeadActualHours";
import EachProject from "./components/pages/podLeads/project/EachProject";
import AddProject from "./components/pages/podLeads/addProject/AddProject";
import EachMember from "./components/pages/podLeads/member/EachMember";
 
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
        <Route path="/member" element={<MemberLayout />}>
          <Route index element={<Home />} />
          <Route path="log-hours" element={<LogHours />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
 
        {/* ================= LEAD ================= */}
        <Route path="/lead" element={<LeadLayout />}>
          <Route index element={<Overview />} />
          <Route path="actual-hours" element={<ProjectLeadActualHours />} />
          <Route path="alerts" element={<div>Lead Alerts (Coming Soon)</div>} />
          <Route path="project/:id" element={<EachProject />} />
          <Route path="member/:id" element={<EachMember />} />
          <Route path="addprojects" element={<AddProject />} />
        </Route>
 
        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>
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