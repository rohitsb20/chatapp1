

export default function ConversationList() {
  return (
    <div className="flex items-center space-x-2 ">
      <div className="w-12 h-12">
        <img
          src="/images/avatar.png"
          alt="avatar"
          className="w-12 h-12  border-2 rounded-full"
        />
      </div>
      <div className=" space-x-2 hidden md:flex items-center justify-between">
        <h3 className="text-sm font-semibold">John Doe</h3>
        <p className="text-gray-500 text-sm">Hey</p>
      </div>
    </div>
  );
}
