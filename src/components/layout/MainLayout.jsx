import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
 
function MainLayout() {
  const location = useLocation();
  const isProfile = location.pathname.split('/').includes('profile');
 
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: isProfile ? "0px" : "16px" }}>
        <Outlet />
      </div>
    </div>
  );
}
 
export default MainLayout;
 