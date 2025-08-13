import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages(); // real-time incoming messages
  const lastMessageRef = useRef();

  // Safety check to ensure messages is always an array
  const safeMessages = Array.isArray(messages) ? messages : [];

  useEffect(() => {
    // Auto-scroll to latest message when messages change
    if (safeMessages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [safeMessages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && safeMessages.length === 0 && (
        <p className="text-center pt-5 text-black">Send a message to start the conversation</p>
      )}

      {!loading &&
        safeMessages.length > 0 &&
        safeMessages.map((msg, idx) => (
          <div
            key={msg._id}
            ref={idx === safeMessages.length - 1 ? lastMessageRef : null}
          >
            <Message message={msg} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
