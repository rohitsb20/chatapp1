/* eslint-disable react/prop-types */
import {useSocketContext} from '../../context/SocketContext'
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

	return (
    <>
      <div
        className={`flex gap-2 items-center 
           rounded p-2 py-1 cursor-pointer 
				${isSelected ? "bg-sky-400" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar  `}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
          {isOnline && (
            <div className="absolute w-3 h-3 bg-green-500 rounded-full bottom-0 right-0"></div>
          )}
        </div>

        <div className="md:flex flex-col flex-1 hidden ">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-black ">
              {conversation.fullname}
            </p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;