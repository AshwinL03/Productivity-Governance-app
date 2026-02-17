import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
 
const DailyEffortChart = ({ data }) => {
    return (
        <div className="each_project_summary_chart_card">
            <h3 className="each_project_summary_section_title">Daily Effort Overview</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            label={{ value: 'Hours', angle: -90, position: 'insideLeft', style: { fill: '#9CA3AF', fontSize: 12 } }}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Bar
                            dataKey="hours"
                            fill="#8B5CF6"
                            radius={[4, 4, 0, 0]}
                            barSize={45}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#6B7280' }}>
                Days
            </div>
        </div>
    );
};
 
export default DailyEffortChart;
 