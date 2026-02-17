import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Bell,
  User,
  Settings,
  LogOut
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import LogoutModal from "./LogoutModal";
import "../stylesheet/sidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuRef = useRef(null);

  const items = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { label: "Projects", icon: FolderKanban, path: "/admin/projects" },
    { label: "Members", icon: Users, path: "/admin/members" },
    { label: "Alerts", icon: Bell, path: "/admin/alerts" },
  ];

  // ✅ Logout function (same as member)
  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

  // ✅ Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <aside className="sidebar admin-sidebar">

        {/* Header */}
        <div className="sidebar-header">
          <div className="workspace-icon">
            <LayoutDashboard size={20} />
          </div>
          <div>
            <h3>Admin Panel</h3>
            <p>Dashboard</p>
          </div>
        </div>


        {/* Navigation */}
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


        {/* Footer */}
        <div
          className="sidebar-footer"
          ref={menuRef}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="user-avatar">AD</div>

          <div>
            <p className="user-name">Admin User</p>
            <p className="user-role">Administrator</p>
          </div>


          {showMenu && (

            <div className="profile-popup">

              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/admin/profile");
                }}
              >
                <User size={14} />
                <span>My Profile</span>
              </div>


              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/admin/settings");
                }}
              >
                <Settings size={14} />
                <span>Settings</span>
              </div>


              <div className="popup-divider" />


              <div
                className="popup-item logout"
                onClick={() => {
                  setShowMenu(false);
                  setShowLogoutModal(true);
                }}
              >
                <LogOut size={14} />
                <span>Log out</span>
              </div>

            </div>

          )}

        </div>

      </aside>


      {/* Logout Modal */}
      {showLogoutModal && (

        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />

      )}

    </>
  );
}

export default AdminSidebar;
