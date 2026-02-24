import { Pie } from "recharts";

const BugsChart = ({ data }) => {
	return (
		<Pie
			data={data}
			dataKey="count"
			nameKey="status"
			cx="50%"
			cy="50%"
			outerRadius={80}
			fill="#8884d8"
		/>
	);
};

export default BugsChart;
