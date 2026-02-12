import { useState, useRef, useEffect } from "react";
import {
  Home,
  Clock,
  Bell,
  Users,
  User,
  Settings,
  LogOut
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import LogoutModal from "./LogoutModal";
import "../stylesheet/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const menuRef = useRef(null);

  const items = [
    { label: "Home", icon: Home, path: "/member" },
    { label: "Log Hours", icon: Clock, path: "/member/log-hours" },
    { label: "Alerts", icon: Bell, path: "/member/alerts" },
  ];

  // Confirm logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

  // Close popup when clicking outside
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

        {/* Footer */}
        <div
          className="sidebar-footer"
          ref={menuRef}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="user-avatar">JD</div>
          <div>
            <p className="user-name">Jane Doe</p>
            <p className="user-role">POD Member</p>
          </div>

          {showMenu && (
            <div className="profile-popup">
              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/member/profile");
                }}
              >
                <User size={14} />
                <span>My Profile</span>
              </div>

              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/member/settings");
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

      {/* ✅ Use LogoutModal Component Here */}
      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
}

export default Sidebar;
