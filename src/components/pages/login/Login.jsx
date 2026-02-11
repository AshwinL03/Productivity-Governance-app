import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import "../../stylesheet/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    // 🔥 Temporary Role Based Routing
    if (role === "member") {
      navigate("/member");
    } 
    else if (role === "lead") {
      navigate("/lead");
    } 
    else if (role === "admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-icon">
          <Users size={28} color="white" />
        </div>

        <h2 className="login-title">Welcome back</h2>
        <p className="login-subtitle">Sign in to continue</p>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Select role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="lead">Lead</option>
              <option value="member">Member</option>
            </select>
          </div>

          <button type="submit" className="login-button">
            Continue
          </button>
        </form>

        <p className="forgot-password">Forgot password?</p>

      </div>
    </div>
  );
}

export default Login;
