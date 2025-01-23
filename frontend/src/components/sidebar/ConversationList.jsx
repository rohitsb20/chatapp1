/* eslint-disable react/prop-types */
import useConversation from "../../zustand/useConversation";


export default function ConversationList({ conversation }) {


const {selectedConversation,setSelectedConversation} = useConversation()


const isSelected =
 selectedConversation?._id === conversation._id




  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex items-center space-x-2 px-4 rounded border-2  ${
          isSelected ? "bg-gray-200" : " "
        }`}
      >
        <div className="w-12 h-12">
          <img
            src={conversation.profilePicture}
            alt="avatar"
            className="w-12 h-12  border-2 rounded-full"
          />
        </div>
        <div className=" space-x-2 hidden md:flex items-center justify-between">
          <h3 className="text-sm font-semibold">{conversation.username}</h3>
        </div>
      </div>
    </>
  );
}
