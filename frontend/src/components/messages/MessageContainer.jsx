import useAuthContext from "../../zustand/useAuthContext";
import useConversation from "../../zustand/useConversation";
import SearchInput from "../sidebar/SearchInput";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { MessageSquareHeart } from "lucide-react";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="md:min-w-[450px] flex flex-col w-full ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="  px-4 py-2 mb-2">
            <div className="md:hidden block mb-4">
              <SearchInput />
            </div>

            <div className="flex items-center gap-2 border-b border-slate-500 p-1">
              <img
                className="w-8 rounded-full"
                src={selectedConversation.profilePicture}
                alt="user avatar"
              />{" "}
              <span className="label-text"> To :</span>{" "}
              <span className="text-gray-900 font-bold uppercase">
                {selectedConversation.fullname}
              </span>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div
      className="flex items-center justify-center
		 w-full h-full"
    >
      <div
        className="px-4 text-center sm:text-lg
			 md:text-xl text-black font-semibold flex
			  flex-col items-center gap-2"
      >
        <p>Hello 😃 {authUser.username} </p>
        <p>Choose a conversation to begin chatting</p>
        <MessageSquareHeart className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
