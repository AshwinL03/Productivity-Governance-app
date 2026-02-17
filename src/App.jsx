import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/login/Login";
import Home from "./components/pages/podMembers/dashboard/Home";
import LogHours from "./components/pages/podMembers/logHours/LogHours";
import MainLayout from "./components/layout/MainLayout";
import Alerts from "./components/pages/podMembers/alerts/Alerts";

//Admin
import AdminLayout from "./components/layout/AdminLayout";
import AdminHome from "./components/pages/admin/adminDashboard/AdminHome";
import AdminProjects from "./components/pages/admin/adminProjects/AdminProjects";
import ViewProject from "./components/pages/admin/adminProjects/ViewProject";
import EditProject from "./components/pages/admin/adminProjects/EditProject";
import AddProject from "./components/pages/admin/adminProjects/AddProject";
import AdminMembers from "./components/pages/admin/adminMembers/AdminMembers";
import ViewMember from "./components/pages/admin/adminMembers/ViewMember";
import EditMember from "./components/pages/admin/adminMembers/EditMember";
import AddMember from "./components/pages/admin/adminMembers/AddMember";
import AdminAlerts from "./components/pages/admin/adminAlerts/AdminAlerts";


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

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/view/:projectId" element={<ViewProject />} />
          <Route path="projects/edit/:projectId" element={<EditProject />} />
          <Route path="projects/add" element={<AddProject />} /> 
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
