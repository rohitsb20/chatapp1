import { useState } from 'react';
import { toast } from 'react-hot-toast';
import  useContext from '../zustand/useContext';

const useLogin = () => {
        const {setAuthUser} = useContext()


    const [loading, setLoading] = useState(false);

const login = async ({ username, password }) => {
  const success = handleErrors({ username, password });
  if (!success) return false;

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    localStorage.setItem("chat-user", JSON.stringify(data));
    setAuthUser(data);
  } catch (error) {
     toast.error(error.message);
  } finally {
    setLoading(false);
  }

};

return { login, loading}

    
}

export default useLogin;



const handleErrors = ({ username, password }) => {

    if (!username || !password) {
        toast.error("Please fill in all fields");
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
    }

    return true;

}
