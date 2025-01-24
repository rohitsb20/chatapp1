import { MessageInput } from "../messageInput/MessageInput";
import Messages from "../messages/Messages";
import Nochat from "../NoChat/Nochat";
import  useConversation  from "../../zustand/useConversation";
import Searchbox from "../Searchbox";
import Sidebar from "../sidebar/Sidebar";


export default function Feature() {

 const { selectedConversation } = useConversation();


  return (
    <div className=" w-full h-full p-10">
      <div
        className="border-2 rounded-xl flex  gap-x-4
      w-full h-full"
      >
        <Sidebar />

        {/* MESSAGES DIV  */}

        <div className=" w-full py-4 px-2 ">
          <div className="md:hidden block">
            <Searchbox />
            <hr className="my-4" />
          </div>
          <div>
            <h1 className="text-xl uppercase font-semibold">messages</h1>
            <hr className="hidden md:block my-4" />
          </div>

          {/* MESAAGES CONTAINER  */}

          {!selectedConversation ? (
            <Nochat />
          ) : (
            <div className="">
              {/* HEADER  */}
              

              {/* MESSAGES  */}

              <div className="flex flex-col h-96 overflow-auto md:min-w-[450px]">
                <Messages />
              </div>

              {/* INPUT MESSAGE DIV  */}
              <MessageInput />
            </div>
          )}
        </div>

        {/* MESSAGES DIV END */}
      </div>
    </div>
  );
}
