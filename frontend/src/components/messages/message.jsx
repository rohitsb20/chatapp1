/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";

import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;

	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar ">
        <div className="w-full rounded-full  flex items-center gap-x-4 ">
          <img alt="Tailwind CSS chat bubble component" className="w-10" src={profilePic} />
          <div
            className={`chat-bubble text-black  ${bubbleBgColor} ${shakeClass} pb-2`}
          >
            {message.message}
          </div>
        </div>
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:45
      </div>
    </div>
  );
};
export default Message;
