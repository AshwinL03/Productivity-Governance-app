import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useUser } from "../../context/UserContext";
import { LayoutDashboard, FolderKanban, Users, Bell } from "lucide-react";
 
function AdminLayout() {
  const { user } = useUser();
 
  /* Set during login For now simulating */
  const userDetails = user
    ? {
      user_name: user.name || user.email.split("@")[0], // Fallback
      user_role: user.role || "Administrator",
    }
    : {
      user_name: "Admin User",
      user_role: "Administrator",
    };
 
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        user_details={userDetails}
        items={[
          { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
          { label: "Projects", icon: FolderKanban, path: "/admin/projects" },
          { label: "Members", icon: Users, path: "/admin/members" },
          { label: "Alerts", icon: Bell, path: "/admin/alerts" },
        ]}
        main_path_segment="admin"
        workspace_users="Admin Panel"
        subtitle="Dashboard"
        workspace_icon={<LayoutDashboard size={20} />}
      />
      <div style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </div>
    </div>
  );
}
 
export default AdminLayout;
 