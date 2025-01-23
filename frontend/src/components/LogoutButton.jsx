import { BiLogOut } from "react-icons/bi";
import  useLogout  from "../hooks/useLogout";
 

export default function LogoutButton() {
const { logout} = useLogout();

  return (
    <div className="mt-40">
  
        <button
          onClick={logout}
          className=" text-black text-xl flex 
          items-center space-x-2
        
         rounded-full w-full"
        >
          <BiLogOut /> <span className="text-lg hidden md:block">Logout</span>
        </button>
      
    </div>
  );
}
