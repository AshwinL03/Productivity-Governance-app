import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar"; 

function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;