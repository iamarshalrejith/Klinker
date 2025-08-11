import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	// Debug the store values
	console.log("useGetMessages - Store messages:", messages, "Type:", typeof messages);
	console.log("useGetMessages - Selected conversation:", selectedConversation?._id);

	// Track when messages change
	useEffect(() => {
		console.log("🔄 Messages state changed:", messages, "Length:", messages?.length);
		console.log("🔄 Is array:", Array.isArray(messages));
	}, [messages]);

	useEffect(() => {
		console.log("📡 useGetMessages useEffect triggered");
		console.log("📡 selectedConversation._id:", selectedConversation?._id);
		
		const getMessages = async () => {
			console.log("🚀 Starting to fetch messages...");
			setLoading(true);
			
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				
				console.log("📨 API response data:", data);
				console.log("📨 API data type:", typeof data);
				console.log("📨 API data is array:", Array.isArray(data));
				
				if (data.error) throw new Error(data.error);
				
				// Ensure data is always an array
				const messagesArray = Array.isArray(data) ? data : [];
				console.log("✅ Setting messages to:", messagesArray);
				setMessages(messagesArray);
				
			} catch (error) {
				console.error("❌ Error fetching messages:", error);
				toast.error(error.message);
				// Set empty array on error
				setMessages([]);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) {
			getMessages();
		} else {
			console.log("🧹 No conversation selected, clearing messages");
			setMessages([]);
		}
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};

export default useGetMessages;