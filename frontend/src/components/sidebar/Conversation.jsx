const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-sky-500/30 transition-all">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="User Avatar"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">John Doe</p>
            <span className="text-xl">💬</span>
          </div>
          <p className="text-sm text-gray-500 truncate">Hey, how's it going?</p>
        </div>
      </div>

      <div className="divider my-0" />
    </>
  );
};

export default Conversation;
