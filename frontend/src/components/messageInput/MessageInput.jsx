
import {BsSend} from 'react-icons/bs'
import useMessages from '../../hooks/useMessages'
import { useState } from 'react'


export const MessageInput = () => {

  const [message, setMessage] = useState("")
  const {sendMessage} = useMessages()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return ;
    await sendMessage(message)
    setMessage('')
   
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full shadow-sm flex space-x-2 ">
<input 
    type="text"
    placeholder="Type a message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="border text-sm  w-full p-2.5
     bg-white  border-gray-600  rounded-xl"
       />
       <button type="submit"
    
        >
 <BsSend 
        />
       </button>
        </div>

    </form>
  )
}
