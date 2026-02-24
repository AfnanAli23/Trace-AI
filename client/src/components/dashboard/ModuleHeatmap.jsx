import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const ModuleHeatmap = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart data={data}>
				<XAxis dataKey="module" />
				<YAxis />
				<Tooltip />
				<Bar dataKey="count" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ModuleHeatmap;
