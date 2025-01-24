import MessageSkeleton from "../skeleton/MessageSkeleton";
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./message";


export default function Messages() {
  const { messages, loading } = useGetMessages();


  
  return (
    <div className="px-4 flex-1 overflow-auto ">

      {
 !loading && messages.length > 0 && messages.map((message) => (
          <Message key={message._id} message={message}  />))
      }
      {
        loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)
      }
      {
        !loading && messages.length === 0 &&
         <p className="text-center">No messages , send message to start conversation</p>
      }
   
    </div>
  );
}
