import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  Clock,
  Bell,
  Users,
  User,
  Settings,
  LogOut
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutModal from "./LogoutModal";
import "../stylesheet/sidebar.css";

function LeadSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const menuRef = useRef(null);

  const items = [
    { label: "Overview", icon: LayoutDashboard, path: "/lead" },
    { label: "Actual Hours", icon: Clock, path: "/lead/actual-hours" },
    { label: "Alerts", icon: Bell, path: "/lead/alerts" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

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
        {/* Header */}
        <div className="sidebar-header">
          <div className="workspace-icon">
            <Users size={20} />
          </div>
          <div>
            <h3>POD Lead</h3>
            <p>Workspace</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {items.map((item) => {
            const active =
              location.pathname === item.path ||
              (item.path === "/lead" && location.pathname === "/lead");

            const Icon = item.icon;

            return (
              <div
                key={item.path}
                className={`sidebar-item ${active ? "active" : ""}`}
                onClick={() => navigate(item.path)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </div>
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
            <p className="user-name">John Doe</p>
            <p className="user-role">POD Lead</p>
          </div>

          {showMenu && (
            <div className="profile-popup">
              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/lead/profile");
                }}
              >
                <User size={14} />
                <span>My Profile</span>
              </div>

              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/lead/settings");
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

      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
}

export default LeadSidebar;
