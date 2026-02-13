import { Outlet } from "react-router-dom";
import LeadSidebar from "./LeadSidebar";

function LeadLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <LeadSidebar />
      <div style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default LeadLayout;
