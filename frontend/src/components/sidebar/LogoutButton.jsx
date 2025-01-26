import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
    <div className="mt-4 border-2 rounded-full w-fit p-1 
 border-sky-400 flex items-center justify-center">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-black cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
