import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-center mt-4">TALKio</h1>
      <div
        className="flex border-2 border-gray-500 p-4 rounded-xl w-[500px] md:w-full mx-auto  shadow-sm sm:h-[450px] md:h-[550px]  overflow-hidden
     bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
