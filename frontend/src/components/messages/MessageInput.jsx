import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useMessage from "../../hooks/useMessages";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const {sendMessage } = useMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="flex space-x-2 items-center   w-full">
        <input
          type="text"
          className="border-2 shadow-sm text-sm rounded-lg block w-full p-2.5 
					 bg-white  text-black"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex items-center border-2 p-2.5 shadow-sm">
          <button type="submit">
           
           
              <BsSend className=" text-xl" />
        
          </button>
        </div>
      </div>
    </form>
  );
};
export default MessageInput;
