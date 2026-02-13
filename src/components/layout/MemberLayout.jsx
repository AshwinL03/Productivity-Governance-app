import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useUser } from "../../context/UserContext";
import { Users, Home, Clock, Bell } from "lucide-react";
 
function MemberLayout() {
  const { user } = useUser();
 
 
  /* Set during login For now simulating*/
  const userDetails = user
    ? {
      user_name: user.name || user.email.split("@")[0], // Fallback to email username
      user_role: user.role || "Member",
    }
    : {
      user_name: "John Doe",
      user_role: "Member",
    };
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar user_details={userDetails} items={[
        { label: "Home", icon: Home, path: "/member" },
        { label: "Log Hours", icon: Clock, path: "/member/log-hours" },
        { label: "Alerts", icon: Bell, path: "/member/alerts" },
      ]} main_path_segment="member" workspace_users="POD Members" workspace_icon={<Users size={20} />} />
      <div style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </div>
    </div>
  );
}
 
export default MemberLayout;