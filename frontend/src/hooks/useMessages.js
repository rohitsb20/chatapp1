import {useState} from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation'


const useMessages = () => {
  const [loading, setLoading] = useState(true);
    const {messages, setMessages, selectedConversation} =  useConversation();


    const sendMessage = async (message) => {

        setLoading(true);
        try {
            const response = await fetch(`api/messages/send/${selectedConversation._id} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            if(data.error){
             throw new Error(data.error);
            }

            setMessages([...messages, data]);
            
        } catch (error) {
            toast.error('Error sending message', error);
        } finally{
            setLoading(false);
        }

        
    }

 return { loading, sendMessage };   
}

export default useMessages;