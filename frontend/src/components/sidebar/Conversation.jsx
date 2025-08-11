import useConversation from "../../zustand/useConversation.js";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-400/30 transition-all ${
          isSelected ? "bg-indigo-600 text-white" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={conversation.profilePic} 
            alt={`${conversation.fullName}'s profile`} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p
              className={`font-semibold ${
                isSelected ? "text-white" : "text-gray-800"
              }`}
            >
              {conversation.fullName}
            </p>
          </div>
          <p
            className={`text-sm truncate ${
              isSelected ? "text-indigo-100" : "text-gray-500"
            }`}
          >
            Hey there! I am using Klinker
          </p>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0" />}
    </>
  );
};

export default Conversation;