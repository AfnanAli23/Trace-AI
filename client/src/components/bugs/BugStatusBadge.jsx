import { BUG_STATUS } from "../../utils/constants";

const statusColors = {
	open: "bg-yellow-200 text-yellow-800",
	in_progress: "bg-blue-200 text-blue-800",
	resolved: "bg-green-200 text-green-800",
};

const BugStatusBadge = ({ status }) => {
	return (
		<span
			className={`px-2 py-1 rounded text-sm font-medium ${statusColors[status] || "bg-gray-200 text-gray-800"}`}>
			{status.replace("_", " ")}
		</span>
	);
};

export default BugStatusBadge;
