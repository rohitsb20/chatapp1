import {useEffect, useState} from 'react';
import useConversation from './useConversation';
import { toast } from "react-hot-toast";

export default function useGetMessages() {

    const [loading, setLoading] = useState(false);
    const {messages, setMessages,selectedConversation} = useConversation();

    useEffect(()=> {
        const getMessages = async () => {
          setLoading(true);
          try {
            const response = await fetch(
              `api/messages/${selectedConversation}`
            );
            const data = await response.json();
            if (data.error) {
              throw new Error(data.error);
            }

            setMessages(data);
          } catch (error) {
            toast.error(error, "semething went wrong");
          } finally {
            setLoading(false);
          }
        };
        if(selectedConversation?._id) getMessages();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedConversation?._id,setMessages])
 
    return {loading, messages}
}
