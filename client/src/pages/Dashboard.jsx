import { useEffect, useState } from "react";
import { getDashboardStats } from "../api/dashboard.api";
import StatsCards from "../components/dashboard/StatsCards";
import BugsChart from "../components/dashboard/BugsChart";
import ModuleHeatmap from "../components/dashboard/ModuleHeatmap";
import ResolutionChart from "../components/dashboard/ResolutionChart";

const Dashboard = () => {
	const [stats, setStats] = useState({});
	const [bugsData, setBugsData] = useState([]);
	const [moduleData, setModuleData] = useState([]);
	const [resolutionData, setResolutionData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getDashboardStats();
			setStats(res.data.stats);
			setBugsData(res.data.bugsByStatus);
			setModuleData(res.data.modulesHeatmap);
			setResolutionData(res.data.resolutionTrend);
		};
		fetchData();
	}, []);

	return (
		<div className="space-y-4">
			<StatsCards stats={stats} />
			<BugsChart data={bugsData} />
			<ModuleHeatmap data={moduleData} />
			<ResolutionChart data={resolutionData} />
		</div>
	);
};

export default Dashboard;
