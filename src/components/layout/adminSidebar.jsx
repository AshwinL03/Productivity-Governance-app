import { LayoutDashboard, FolderKanban, Users, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarItem from "../../components/layout/SidebarItem";
import "../stylesheet/sidebar.css"; 

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { label: "Projects", icon: FolderKanban, path: "/admin/projects" },
    { label: "Members", icon: Users, path: "/admin/members" },
    { label: "Alerts", icon: Bell, path: "/admin/alerts" },
  ];

  return (
    <aside className="sidebar admin-sidebar">
      <div className="sidebar-header">
        <div className="workspace-icon">
          <LayoutDashboard size={20} />
        </div>
        <div>
          <h3>Admin Panel</h3>
          <p>Dashboard</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <SidebarItem
              key={item.path}
              icon={<Icon size={18} />}
              label={item.label}
              active={active}
              onClick={() => navigate(item.path)}
            />
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">AD</div>
        <div>
          <p className="user-name">Admin User</p>
          <p className="user-role">Administrator</p>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;