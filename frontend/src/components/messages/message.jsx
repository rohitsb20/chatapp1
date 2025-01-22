export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="/images/avatar.png"
            alt="avatar"
            className="w-12 h-12  border-2 rounded-full"
          />
        </div>
      </div>
      <div className={`chat-bubble bg-blue-500 text-white`}>hi whatsaap</div>
      <div className={`chat-footer bg-blue-500 text-white opacity-50
        flex gap-1 items-center`}>12:42</div>
    </div>
  );
}
