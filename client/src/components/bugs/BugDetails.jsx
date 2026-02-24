import BugStatusBadge from "./BugStatusBadge";

const BugDetails = ({ bug }) => {
	if (!bug) return null;

	return (
		<div className="p-4 border rounded shadow">
			<h2 className="font-bold text-xl mb-2">{bug.title}</h2>
			<p className="mb-2">{bug.description}</p>
			<p className="mb-2">
				<strong>Stack Trace:</strong> {bug.stackTrace}
			</p>
			<p className="mb-2">
				<strong>Logs:</strong> {bug.logs}
			</p>
			<div className="flex justify-between items-center">
				<BugStatusBadge status={bug.status} />
				<span>{bug.priority}</span>
			</div>
			<div className="mt-4">
				<h3 className="font-semibold">AI Analysis:</h3>
				<p>
					<strong>Summary:</strong> {bug.aiSummary}
				</p>
				<p>
					<strong>Root Cause:</strong> {bug.aiRootCause}
				</p>
				<p>
					<strong>Suggested Fix:</strong> {bug.aiSuggestedFix}
				</p>
			</div>
		</div>
	);
};

export default BugDetails;
