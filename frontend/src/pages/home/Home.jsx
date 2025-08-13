import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden">
      {/* Sidebar - show on mobile only if no chat is selected */}
      <div
        className={`${
          selectedConversation ? "hidden md:flex" : "flex"
        } flex-col h-full md:w-auto`}
      >
        <Sidebar />
      </div>

      {/* MessageContainer - show on mobile only if a chat is selected */}
      <div
        className={`${
          !selectedConversation ? "hidden md:flex" : "flex"
        } flex-col flex-grow h-full`}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;