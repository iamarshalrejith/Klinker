import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="w-full md:w-[400px] h-auto md:h-full flex flex-col p-4 bg-white/20 backdrop-blur-lg shadow-xl 
      rounded-none md:rounded-l-xl border border-white/30 md:border-r-0 border-b md:border-b-0">
      <SearchInput />
      <div className="divider px-3"></div>
      <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
