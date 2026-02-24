import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const BugForm = ({ onSubmit }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [stackTrace, setStackTrace] = useState("");
	const [logs, setLogs] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ title, description, stackTrace, logs });
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Input
				label="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Input
				label="Stack Trace"
				value={stackTrace}
				onChange={(e) => setStackTrace(e.target.value)}
				type="textarea"
			/>
			<Input
				label="Logs"
				value={logs}
				onChange={(e) => setLogs(e.target.value)}
				type="textarea"
			/>
			<Button type="submit">Submit Bug</Button>
		</form>
	);
};

export default BugForm;
