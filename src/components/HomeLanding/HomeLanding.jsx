import RoleCard from "./RoleCard";
import "../stylesheet/homeLanding.css";
import { User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomeLanding() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <div className="home-icon">
          <Users size={22} />
        </div>

        <h2 className="home-title">Welcome back</h2>
        <p className="home-subtitle">Choose your role to continue</p>

        <div className="role-container">
          <RoleCard
            icon={<User size={20} />}
            title="POD Member"
            onClick={() => navigate("/member")}
          />

          <RoleCard
            icon={<Users size={20} />}
            title="POD Lead"
            /* later → navigate("/lead") */
          />
        </div>
      </div>
    </div>
  );
}

export default HomeLanding;
