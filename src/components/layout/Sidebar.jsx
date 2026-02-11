import { Home, Clock, Bell, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "../stylesheet/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Home", icon: Home, path: "/member" },
    { label: "Log Hours", icon: Clock, path: "/member/log-hours" },
    { label: "Alerts", icon: Bell, path: "/member/alerts" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="workspace-icon">
          <Users size={20} />
        </div>
        <div>
          <h3>POD Members</h3>
          <p>Workspace</p>
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
        <div className="user-avatar">JD</div>
        <div>
          <p className="user-name">Jane Doe</p>
          <p className="user-role">POD Member</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
