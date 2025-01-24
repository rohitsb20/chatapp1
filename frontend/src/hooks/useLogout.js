
import toast from 'react-hot-toast';
import  useContext  from '../zustand/useContext';
import { useState } from 'react';


const useLogout =  () => {
const [loading , setLoading] = useState(false);

const {logoutUser} = useContext();

const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
        if(data.error) {
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user");
        logoutUser();
        toast.success("Logout successful");
    } catch (error) {
    toast.error(error.message);

    }
    finally {
        setLoading(false);
    }

  
}


  return { logout, loading };
}

export default useLogout;