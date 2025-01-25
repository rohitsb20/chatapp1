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
        <div className={`avatar flex items-center space-x-1  `}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
          <div
            className={`w-2 h-2 rounded-full border-2
   border-gray-800 ${isOnline ? "bg-green-400" : "bg-red-400"}`}
          ></div>
        </div>

        <div className="md:flex flex-col flex-1 hidden ">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-black ">{conversation.fullname}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;