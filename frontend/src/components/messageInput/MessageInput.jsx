
import {BsSend} from 'react-icons/bs'


export const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full shadow-sm flex space-x-2 ">
<input 
    type="text"
    placeholder="Type a message"
    className="border text-sm  w-full p-2.5
     bg-white  border-gray-600 text-white rounded-xl"
       />
       <button type="submit"
    
        >
        <BsSend className='text-xl hover:text-blue-400' />
       </button>
        </div>

    </form>
  )
}
