import "../stylesheet/roleCard.css";

function RoleCard({ icon, title, onClick }) {
  return (
    <div className="role-card" onClick={onClick}>
      <div className="role-icon">{icon}</div>
      <p className="role-title">{title}</p>
    </div>
  );
}

export default RoleCard;
