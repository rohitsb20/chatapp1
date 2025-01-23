/* eslint-disable react/prop-types */


export default function ConversationList({ conversation, lastindex }) {
  return (
    <>
      <div className="flex items-center space-x-2 ">
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
      {!lastindex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}
