/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";


const Message = ({ message }) => {

  
  const { authUser } = useAuthContext();
  
  const fromMe = message.senderId === authUser._id;
 
  const chatClassName = fromMe ? " chat chat-end" : " chat chat-start";
  
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div>
          <div className="w-10 rounded-full">
            g
          </div>
          <h1>{message.fullname}</h1>
        </div>
      </div>
      <div
        className={`chat-bubble text-black ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        1265
      </div>
    </div>
  );
};
export default Message;
