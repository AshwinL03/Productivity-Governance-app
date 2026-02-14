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
import LeadLayout from "./components/layout/LeadLayout";
 
/* =========================
   Admin Pages
========================= */
import AdminLayout from "./components/layout/AdminLayout";
import AdminHome from "./components/pages/admin/adminDashboard/adminHome";
import Overview from "./components/pages/podLeads/LeadOverview/Overview";
import ProjectLeadActualHours from "./components/pages/podLeads/actualHoursLead/ProjectLeadActualHours";
import EachProject from "./components/pages/podLeads/project/EachProject";
import AddProject from "./components/pages/podLeads/addProject/AddProject";
import EachMember from "./components/pages/podLeads/member/EachMember";
 
import { UserProvider } from "./context/UserContext";
 
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
 
          {/* ================= PUBLIC ================= */}
          <Route path="/" element={<Login />} />
 
          {/* ================= MEMBER ================= */}
          <Route path="/member" element={<MemberLayout />}>
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
 
          {/* ================= LEAD ================= */}
          <Route path="/lead" element={<LeadLayout />}>
            {/* /lead */}
            <Route index element={<Overview />} />
            <Route path="actual-hours" element={<ProjectLeadActualHours />} />
            <Route path="alerts" element={<div>Lead Alerts (coming soon)</div>} />
            <Route path="project/:id" element={<EachProject />} />
            <Route path="member/:id" element={<EachMember />} />
            <Route path="addprojects" element={<AddProject />} />
          </Route>
 
 
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
    </UserProvider>
  );
}
 
export default App;