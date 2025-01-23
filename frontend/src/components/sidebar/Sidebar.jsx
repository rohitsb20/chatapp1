
import Searchbox from "../Searchbox";
import ConversationList from "../sidebar/ConversationList";
import LogoutButton from "../LogoutButton";
import useGetConversation from "../../hooks/useGetConversation";

export default function Sidebar() {
      const {conversations, loading} = useGetConversation()
 console.log(conversations);
 
      return (
        <div className="border-r-2 md:w-1/4  p-4 ">
          <div className="md:block hidden">
            <Searchbox />
            <hr className="my-4 md:block hidden" />
          </div>

          <div className="flex flex-col gap-y-4  ">
            {conversations.map((conversation) => (
              <div key={conversation._id} className="flex justify-center md:border-2 p-2 rounded-xl">
                <ConversationList  conversation={conversation} lastindex={conversations.length - 1}/>
              </div>
            ))}
          </div>

          {loading ? <span className="loading loading-spinner"></span> : null}

          <LogoutButton />
        </div>
      );
}
