import { useState } from "react";
import { Forward} from "lucide-react";
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
          className="border-2  shadow-sm
           text-sm rounded-full block w-full p-2  border-sky-400
					 bg-white  text-black"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex items-center border-2  border-sky-400
         rounded-full p-2 shadow-sm">
          <button type="submit" >
            <Forward className={`${message? "opacity-100" : "opacity-40"}`} />
          </button>
        </div>
      </div>
    </form>
  );
};
export default MessageInput;
