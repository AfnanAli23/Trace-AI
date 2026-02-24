import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const ResolutionChart = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart data={data}>
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Line type="monotone" dataKey="resolved" stroke="#8884d8" />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ResolutionChart;
