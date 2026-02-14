import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "Jan", project: 75, nonProject: 25 },
  { name: "Feb", project: 82, nonProject: 18 },
  { name: "Mar", project: 78, nonProject: 22 },
  { name: "Apr", project: 85, nonProject: 15 },
  { name: "May", project: 88, nonProject: 12 },
  { name: "Jun", project: 80, nonProject: 20 }
];

const ActivityChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          
          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Bar
            dataKey="project"
            fill="#7c3aed"
            radius={[6, 6, 0, 0]}
            name="Project Activities"
          />
          <Bar
            dataKey="nonProject"
            fill="#e5e7eb"
            radius={[6, 6, 0, 0]}
            name="Non-Project Activities"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
