import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
