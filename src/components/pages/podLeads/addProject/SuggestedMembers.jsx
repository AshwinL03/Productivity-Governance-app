// SuggestedMembers.jsx
import { UserCheck, Lightbulb, CheckCircle } from 'lucide-react';

function SuggestedMembers() {
  return (
    <div className="suggested-panel">
      <h2>
        <UserCheck className="section-icon" />
        Suggested Members
      </h2>
      
      <p className="suggested-description">
        Select required skills to see suggested team members who match your project needs.
      </p>

      <div className="quick-tips">
        <h4>
          <Lightbulb className="lucide-icon" />
          Quick Tips
        </h4>
        <ul>
          <li>
            <CheckCircle className="lucide-icon" />
            Choose team members with matching skills for better project alignment.
          </li>
          <li>
            <CheckCircle className="lucide-icon" />
            Consider current workload when assigning members.
          </li>
          <li>
            <CheckCircle className="lucide-icon" />
            Set realistic timelines based on team availability.
          </li>
          <li>
            <CheckCircle className="lucide-icon" />
            Include diverse skills for well-rounded project execution.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SuggestedMembers;