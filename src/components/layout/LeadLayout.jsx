import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useUser } from "../../context/UserContext";
import { LayoutGrid, Clock, Bell } from "lucide-react";
 
function LeadLayout() {
    const { user } = useUser();
 
    /* Set during login For now simulating */
    const userDetails = user
        ? {
            user_name: user.name || user.email.split("@")[0], // Fallback to email username
            user_role: user.role || "POD Lead",
        }
        : {
            user_name: "John Doe",
            user_role: "POD Lead",
        };
 
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar
                user_details={userDetails}
                items={[
                    { label: "Overview", icon: LayoutGrid, path: "/lead" },
                    { label: "Actual Hours", icon: Clock, path: "/lead/actual-hours" },
                    { label: "Alerts", icon: Bell, path: "/lead/alerts" },
                ]}
                main_path_segment="lead"
                workspace_users="POD Lead"
                workspace_icon={<LayoutGrid size={20} />} // This is passed as node to header
            />
            <div style={{ flex: 1, padding: "16px" }}>
                <Outlet />
            </div>
        </div>
    );
}
 
export default LeadLayout;