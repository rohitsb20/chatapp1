
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react"
import { toast } from "react-hot-toast";
import { useConversation } from "../../zustand/useConversation";
import { useGetConversation } from '../../hooks/useGetConversation';
const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation(); 
  const  {conversations} = useGetConversation();
    const handleSubmit = (e) => {
    e.preventDefault();
      if(!search) return; 
      if(search < 3) 
      return toast.error("Search term must be at least 3 characters long");

      const conversation = conversations.find((c) => c.username.toLowerCase()
      .includes(search.toLowerCase()));

      if(!conversation) return toast.error("No user found");
      setSelectedConversation(conversation);
      setSearch("");
  }
  

	return (
    <div >
      <form onSubmit={handleSubmit} className="flex items-center justify-between px-2 gap-2 shadow-sm rounded-full">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered rounded-full p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle  text-black border-2 rounded-full p-1">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};
export default SearchInput;