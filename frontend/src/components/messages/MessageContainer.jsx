
import useConversation from "../../zustand/useConversation";
import SearchInput from "../sidebar/SearchInput";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";


const MessageContainer = () => {
	const { selectedConversation } = useConversation();
	
	

	

	return (
    <div className="md:min-w-[450px] flex flex-col w-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="border-b-2 shadow-sm  px-4 py-2 mb-2">
        
            <div className="md:hidden block mb-4">
              <SearchInput />
            </div>
          
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
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
	
	return (
		<div className='flex items-center justify-center
		 w-full h-full'>
			<div className='px-4 text-center sm:text-lg
			 md:text-xl text-black font-semibold flex
			  flex-col items-center gap-2'>
				<p>Welcome 👋 jhon </p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};