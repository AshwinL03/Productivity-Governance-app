import { HelpCircle, Mail, FileText, ExternalLink } from "lucide-react";

function HelpSupportSection() {
  const items = [
    {
      title: "Help & FAQ",
      desc: "Find answers to common questions",
      icon: HelpCircle,
    },
    {
      title: "Contact Support",
      desc: "Get in touch with our support team",
      icon: Mail,
    },
    {
      title: "Privacy Policy",
      desc: "Review our privacy practices",
      icon: FileText,
    },
  ];

  return (
    <div className="card">
      <h3>Help & Support</h3>
      <p className="section-subtext">
        Resources and assistance
      </p>

      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className="help-item">
            <div className="help-left">
              <div className="help-icon">
                <Icon size={16} />
              </div>

              <div>
                <p className="section-title">{item.title}</p>
                <p className="section-description">{item.desc}</p>
              </div>
            </div>

            <ExternalLink size={16} className="help-external" />
          </div>
        );
      })}
    </div>
  );
}

export default HelpSupportSection;
