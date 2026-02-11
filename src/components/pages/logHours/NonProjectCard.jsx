import { useState, useEffect } from "react";
import "../../stylesheet/logHours.css";

function NonProjectCard({ setNonProjectTotal }) {

  const [activities, setActivities] = useState([
    { id: 1, hours: 0 }
  ]);

  const handleSliderChange = (id, value) => {
    const updated = activities.map((activity) =>
      activity.id === id
        ? { ...activity, hours: Number(value) }
        : activity
    );
    setActivities(updated);
  };

  const handleInputChange = (id, value) => {
    const numericValue = Number(value);
    const safeValue = Math.min(8, Math.max(0, numericValue));

    const updated = activities.map((activity) =>
      activity.id === id
        ? { ...activity, hours: safeValue }
        : activity
    );
    setActivities(updated);
  };

  const addNewActivity = () => {
    setActivities([
      ...activities,
      { id: Date.now(), hours: 0 }
    ]);
  };

  useEffect(() => {
    const total = activities.reduce(
      (sum, activity) => sum + activity.hours,
      0
    );
    setNonProjectTotal(total);
  }, [activities, setNonProjectTotal]);

  return (
    <div className="card-section">
      <h4>Non-Project Activities</h4>
      <p className="section-subtext">
        Log time spent on internal tasks
      </p>

      {activities.map((activity) => {
        const percentage = (activity.hours / 8) * 100;

        return (
          <div key={activity.id} className="nonproject-row">

            <div className="nonproject-select">
              <select>
                <option>Select activity</option>
                <option>Meeting</option>
                <option>Training</option>
                <option>Admin Work</option>
              </select>
            </div>

            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max="8"
                value={activity.hours}
                onChange={(e) =>
                  handleSliderChange(activity.id, e.target.value)
                }
                className="custom-slider"
                style={{
                  background: `linear-gradient(to right, #7c3aed ${percentage}%, #e5e7eb ${percentage}%)`
                }}
              />
            </div>

            <div className="hours-input">
              <input
                type="number"
                min="0"
                max="8"
                value={activity.hours}
                onChange={(e) =>
                  handleInputChange(activity.id, e.target.value)
                }
              />
              <span>hrs</span>
            </div>

          </div>
        );
      })}

      <div className="nonproject-action">
        <button
          className="secondary-btn"
          onClick={addNewActivity}
        >
          + Add Non-Project Activity
        </button>
      </div>

    </div>
  );
}

export default NonProjectCard;
