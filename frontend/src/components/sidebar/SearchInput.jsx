
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {

	return (
    <div >
      <form className="flex items-center justify-between px-2 gap-2 shadow-sm rounded-full">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered rounded-full p-2"
        />
        <button type="submit" className="btn btn-circle  text-black border-2 rounded-full p-1">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};
export default SearchInput;