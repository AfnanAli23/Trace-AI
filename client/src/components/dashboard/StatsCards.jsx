const StatsCards = ({ stats }) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{Object.entries(stats).map(([key, value]) => (
				<div key={key} className="p-4 border rounded shadow">
					<h3 className="text-gray-500">{key}</h3>
					<p className="text-xl font-bold">{value}</p>
				</div>
			))}
		</div>
	);
};

export default StatsCards;
