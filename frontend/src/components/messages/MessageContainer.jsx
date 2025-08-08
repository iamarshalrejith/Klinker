import { useState } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const [selectedChat, setSelectedChat] = useState(false);

  return (
    <div className="flex flex-col flex-1 h-full bg-white/20 backdrop-blur-lg shadow-md 
      rounded-none md:rounded-r-xl border border-white/30 md:border-l-0 border-t md:border-t-0">
      {selectedChat ? (
        <>
          <div className="bg-slate-500/70 px-4 py-2 md:rounded-tr-xl">
            <span className="label-text text-white">To: </span>
            <span className="text-white font-bold">John Doe</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <MessageInput />
        </>
      ) : (
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
