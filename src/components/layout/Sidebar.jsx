import { useState, useRef, useEffect } from "react";
import {
  User,
  Settings,
  LogOut
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
 
import SidebarItem from "./SidebarItem";
import LogoutModal from "./LogoutModal";
import { getInitials } from "../pages/podMembers/profile/ProfileBioCard";
 
import "../stylesheet/sidebar.css";
 
 
function Sidebar({ items, main_path_segment, workspace_users, workspace_icon, user_details, subtitle }) {
  const navigate = useNavigate();
  const location = useLocation();
 
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const menuRef = useRef(null);
 
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
            {workspace_icon}
          </div>
          <div>
            <h3>{workspace_users}</h3>
            {subtitle && <p>{subtitle}</p>}
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
 
 
        <div
          className="sidebar-footer"
          ref={menuRef}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="user-avatar">{getInitials(user_details.user_name)}</div>
          <div>
            <p className="user-name">{user_details.user_name}</p>
            <p className="user-role">{user_details.user_role}</p>
          </div>
 
          {showMenu && (
            <div className="profile-popup">
              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate(`/${main_path_segment}/profile`);
                }}
              >
                <User size={14} />
                <span>My Profile</span>
              </div>
 
              <div
                className="popup-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate(`/${main_path_segment}/settings`);
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
 