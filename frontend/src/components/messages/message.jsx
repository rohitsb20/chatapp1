/* eslint-disable react/prop-types */
import useAuthContext from "../../zustand/useAuthContext";
import useConversation from "../../zustand/useConversation";
import { format } from "date-fns";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();

  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const chatClass = fromMe ? "justify-end" : "justify-start";

  const chatUser = fromMe
    ? authUser.username
    : selectedConversation?.username;

  const bubbleBgColor = fromMe ? "bg-sky-500" : "bg-sky-200";
 const formattedTime = format(new Date(message.createdAt), "p");


  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat flex ${chatClass}  `}>
      <div className="chat-image avatar  ">
        <div className="w-full rounded-full  flex items-center   ">
          {fromMe ? (
            <div className="flex space-x-4 py-4 ">
              <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {formattedTime}
              </div>
              <div
                className={`chat-bubble ${chatClass} text-black rounded-xl 
                   ${bubbleBgColor} ${shakeClass} p-2`}
              >
                {message.message}
              </div>{" "}
              <h1 className="text-sm font-bold ">{chatUser} </h1>
            </div>
          ) : (
            <div className="flex space-x-4">
              <h1 className="text-sm font-bold ">{chatUser} </h1>
              <div
                className={`chat-bubble ${chatClass} text-black
                    ${bubbleBgColor} ${shakeClass} p-2 rounded-xl`}
              >
                {message.message}
              </div>
              <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {formattedTime}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Message;
