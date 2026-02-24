const MessageBubble = ({ message }) => {
	const isUser = message.sender === "user";
	return (
		<div className={`my-1 flex ${isUser ? "justify-end" : "justify-start"}`}>
			<div
				className={`p-2 rounded max-w-xs ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
				{message.text}
			</div>
		</div>
	);
};

export default MessageBubble;
