import React from "react";
import { BUG_STATUS, PRIORITY } from "../../utils/constants";
import BugStatusBadge from "./BugStatusBadge";

const BugCard = ({ bug, onClick }) => {
	return (
		<div
			className="border p-4 rounded shadow hover:shadow-lg cursor-pointer mb-4 transition"
			onClick={onClick}>
			<h3 className="font-bold text-lg mb-2">{bug.title}</h3>
			<p className="text-gray-600 mb-2">{bug.description}</p>
			<div className="flex justify-between items-center">
				<BugStatusBadge status={bug.status} />
				<span className="text-sm font-medium">
					{PRIORITY[bug.priority.toUpperCase()] || bug.priority}
				</span>
			</div>
		</div>
	);
};

export default BugCard;
