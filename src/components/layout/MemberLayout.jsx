import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarMember";
 
function MainLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </div>
    </div>
  );
}
 
export default MainLayout;