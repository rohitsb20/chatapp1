
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";


const Messages = () => {
	const { messages, loading } = useGetMessages();
  useListenMessages();


const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);


	return (
    <div className="px-4 flex-1 overflow-auto max-h-[350px] md:max-h-[500px]">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400 mt-12">Start chatting now</p>
      )}
    </div>
  );
};
export default Messages;
