import { IoIosSearch } from "react-icons/io";

export default function Searchbox() {
  return (
    <div>
      <form
        className="flex gap-x-1 pr-2 items-center
       border-2 rounded-xl border-gray-100 "
        action=""
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full
              px-3 py-2 border-r-2  rounded-l-xl 
              focus:outline-none  shadow-sm
               "
        />
        <button type="submit">
          <IoIosSearch className="text-3xl text-gray-600 " />
        </button>
      </form>
    </div>
  );
}
