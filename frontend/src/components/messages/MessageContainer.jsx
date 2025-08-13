import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useListenMessages from "../../hooks/useListenMessages.js";
import { IoArrowBackOutline } from "react-icons/io5";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useListenMessages();

  useEffect(() => {
    // Cleanup for mobile navigation
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleGoBack = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="flex flex-col flex-1 h-full bg-white/20 backdrop-blur-lg shadow-md rounded-none md:rounded-r-xl border border-white/30 md:border-l-0">
      {selectedConversation ? (
        <>
          {/* Header */}
          <div className="bg-indigo-600 px-3 py-3 md:px-4 md:py-5 flex items-center gap-2">
            {/* Back button only on mobile */}
            <button
              className="md:hidden text-white shrink-0"
              onClick={handleGoBack}
            >
              <IoArrowBackOutline size={20} />
            </button>
            <span className="label-text text-white shrink-0">To:</span>
            {/* Name will truncate on small screens */}
            <span className="text-white font-bold ml-1 truncate">
              {selectedConversation.fullName}
            </span>
          </div>

          {/* Chat messages */}
          <Messages />

          {/* Input box */}
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex flex-1 items-center justify-center text-center px-6 py-8">
      <div className="text-black font-semibold flex flex-col items-center gap-2">
        <p className="text-lg md:text-xl">Welcome {authUser.fullName} </p>
        <p className="text-sm md:text-base">
          Select a chat to start messaging
        </p>
        <TiMessages className="text-4xl md:text-6xl text-black" />
      </div>
    </div>
  );
};
