/* eslint-disable react/prop-types */

import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	

	return (
    <>
      <div
        className={`flex gap-2 items-center  hover:text-white 
           rounded p-2 py-1 cursor-pointer 
				${isSelected ? "bg-sky-400" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar `}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>

        <div className="md:flex flex-col flex-1 hidden ">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-black ">
              {conversation.username}
            </p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;