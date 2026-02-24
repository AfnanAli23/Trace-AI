import { useState } from "react";
import MessageBubble from "./MessageBubble";
import Button from "../ui/Button";

const ChatWindow = ({ messages, onSend }) => {
	const [input, setInput] = useState("");

	const handleSend = () => {
		if (input.trim()) {
			onSend(input);
			setInput("");
		}
	};

	return (
		<div className="border rounded shadow p-4 flex flex-col h-full">
			<div className="flex-1 overflow-auto mb-4">
				{messages.map((msg, idx) => (
					<MessageBubble key={idx} message={msg} />
				))}
			</div>
			<div className="flex gap-2">
				<input
					className="border p-2 rounded flex-1"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Type a message..."
				/>
				<Button onClick={handleSend}>Send</Button>
			</div>
		</div>
	);
};

export default ChatWindow;
