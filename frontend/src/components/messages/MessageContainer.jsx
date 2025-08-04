import { useState } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const [selectedChat, setSelectedChat] = useState(false);

  return (
    <div className="md:min-w-[450px] flex flex-col bg-white/20 backdrop-blur-lg rounded-xl shadow-md border border-white/30">
      {selectedChat ? (
        <>
          {/* Header */}
          <div className="bg-slate-500/70 px-4 py-2 rounded-t-xl">
            <span className="label-text text-white">To: </span>
            <span className="text-white font-bold">John Doe</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>

          {/* Message Input */}
          <MessageInput />
        </>
      ) : (
        // NoChatSelected UI
        <div className="flex flex-1 items-center justify-center text-center px-6 py-8">
          <div className="text-black font-semibold flex flex-col items-center gap-2">
            <p className="text-lg md:text-xl">Welcome, John Doe 👋</p>
            <p className="text-sm md:text-base">
              Select a chat to start messaging
            </p>
            <TiMessages className="text-4xl md:text-6xl text-black" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
