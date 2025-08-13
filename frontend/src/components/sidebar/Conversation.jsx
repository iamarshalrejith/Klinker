// Conversation.jsx
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  // Status dot code remains the same as our previous solution
  const statusColor = isOnline ? "bg-green-500" : "bg-red-500";

  return (
    <>
      <div
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-400/30 transition-all 
          ${isSelected ? "bg-indigo-600 text-white" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative w-12 rounded-full">
          <img src={conversation.profilePic} alt="user avatar" className="rounded-full" />
          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${statusColor}`}></div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className={`font-semibold ${isSelected ? "text-white" : "text-gray-800"}`}>
              {conversation.fullName}
            </p>
          </div>
          <p
            className={`text-sm truncate ${isSelected ? "text-indigo-100" : "text-gray-600"}`}
          >
            Hey there! I am using Klinker
          </p>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;