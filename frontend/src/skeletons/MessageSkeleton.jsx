const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`relative rounded-2xl bg-gray-600 animate-pulse w-64 h-16
              ${idx % 2 === 0 ? "rounded-tl-none" : "rounded-tr-none"}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
