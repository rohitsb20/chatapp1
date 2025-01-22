import { BiLogOut } from "react-icons/bi";
import Searchbox from "../Searchbox";
import ConversationList from "../sidebar/ConversationList";

export default function Sidebar() {
  return (
    <div className="border-r-2 md:w-1/4  p-4 ">
      <div className="md:block hidden">
        <Searchbox />
        <hr className="my-4 md:block hidden" />
      </div>

      <div className="flex flex-col gap-y-4  ">
        <div className="flex justify-center   md:border-2 p-2 rounded-xl ">
          <ConversationList />
        </div>
        <div className="flex justify-center md:border-2 p-2 rounded-xl">
          <ConversationList />
        </div>
        <div className="flex justify-center md:border-2 p-2 rounded-xl">
          <ConversationList />
        </div>
        <div className="flex justify-center md:border-2 p-2 rounded-xl">
          <ConversationList />
        </div>
      </div>

      <div  className="mt-40">
        <button
          className=" text-black text-xl flex 
          items-center space-x-2
           
         rounded-full w-full"
        >
          <BiLogOut /> <span className="text-lg hidden md:block">Logout</span>
        </button>
      </div>
    </div>
  );
}
