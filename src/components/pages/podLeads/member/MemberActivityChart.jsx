const MemberActivityChart = () => {
  return (
    <div className="chart-card">
      <h3>Activity Categories</h3>

      <div className="chart-container">

        {/* PIE */}
        <div className="pie-chart"></div>

        {/* LEGEND BELOW */}
        <div className="legend">
          <div className="legend-item">
            <span className="dot dark"></span>
            Project Work — 142h
          </div>

          <div className="legend-item">
            <span className="dot light1"></span>
            Internal Meetings — 12h
          </div>

          <div className="legend-item">
            <span className="dot light2"></span>
            Learning & Training — 8h
          </div>

          <div className="legend-item">
            <span className="dot light3"></span>
            Support Tasks — 6h
          </div>
        </div>

      </div>
    </div>
  );
};

export default MemberActivityChart;
