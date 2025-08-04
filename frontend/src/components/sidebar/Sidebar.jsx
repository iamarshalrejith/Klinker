import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
const Sidebar = () => {
  return (
    <div className="w-full md:w-[250px] flex flex-col p-4 bg-white/20 backdrop-blur-lg shadow-xl rounded-xl border border-white/30">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
