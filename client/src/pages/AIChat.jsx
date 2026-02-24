import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatWindow from "../components/chat/ChatWindow";
import { getChatHistory, askAI } from "../api/chat.api";

const AIChat = () => {
	const { bugId } = useParams();
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const fetchHistory = async () => {
			const res = await getChatHistory(bugId);
			setMessages(res.data.messages);
		};
		fetchHistory();
	}, [bugId]);

	const handleSend = async (text) => {
		const res = await askAI({ bugId, message: text });
		setMessages(res.data.messages);
	};

	return <ChatWindow messages={messages} onSend={handleSend} />;
};

export default AIChat;
