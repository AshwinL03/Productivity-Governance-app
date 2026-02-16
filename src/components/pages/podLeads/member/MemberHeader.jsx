const MemberHeader = ({ member }) => {
  return (
    <div className="member-card">

      <div className="member-left">
        <div className="avatar">
          {member.name
            .split(" ")
            .map(n => n[0])
            .join("")
            .substring(0, 2)}
        </div>

        <div>
          <h2>{member.name}</h2>
          <p className="role">{member.role}</p>

          <div className="availability">
            <span className="dot"></span>
            {member.availability}
          </div>
        </div>
      </div>

      <div className="utilization">
        <h2>{member.utilization}%</h2>
        <span>Utilization</span>
      </div>

    </div>
  );
};

export default MemberHeader;
