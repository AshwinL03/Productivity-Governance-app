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
import Overview from "./components/pages/podLeads/leadOverviews/OverviewCardSec";
import ProjectLeadActualHours from "./components/pages/podLeads/actualHoursLead/ProjectLeadActualHours";
import EachProject from "./components/pages/podLeads/project/EachProject";
import AddProjectFirst from "./components/pages/podLeads/addProject/AddProjectFirst";
import EachMember from "./components/pages/podLeads/member/EachMember";
 
/* =========================
   Admin Pages
========================= */
//Admin
import AdminLayout from "./components/layout/AdminLayout";
import AdminHome from "./components/pages/admin/adminDashboard/AdminHome";
import AdminProjects from "./components/pages/admin/adminProjects/AdminProjects";
import ViewProject from "./components/pages/admin/adminProjects/ViewProject";
import EditProject from "./components/pages/admin/adminProjects/EditProject";
import AddProjectSecond from "./components/pages/admin/adminProjects/AddProjectSecond";
import AdminMembers from "./components/pages/admin/adminMembers/AdminMembers";
import ViewMember from "./components/pages/admin/adminMembers/ViewMember";
import EditMember from "./components/pages/admin/adminMembers/EditMember";
import AddMember from "./components/pages/admin/adminMembers/AddMember";
import AdminAlerts from "./components/pages/admin/adminAlerts/AdminAlerts";;

 
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
          <Route path="addprojects" element={<AddProjectFirst />} />
        </Route>
 
        {/* ================= ADMIN ================= */}
         <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/view/:projectId" element={<ViewProject />} />
          <Route path="projects/edit/:projectId" element={<EditProject />} />
          <Route path="projects/add" element={<AddProjectSecond />} />
          <Route path="members" element={<AdminMembers />} />
          <Route path="members/view/:memberId" element={<ViewMember />} />
          <Route path="members/edit/:memberId" element={<EditMember />} />  
          <Route path="members/add" element={<AddMember />} />
          <Route path="alerts" element={<AdminAlerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;