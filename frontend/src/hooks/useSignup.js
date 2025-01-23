import toast from 'react-hot-toast'
import { useState } from 'react'

const useSignup = () => {

    const [loading , setLoading] = useState(false)

   
    const signup = async ({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    }) => {
      const success = handleErrors({
        fullname,
        username,
        password,
        confirmpassword,
        gender,
      });
      if (!success) return false;

      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            username,
            password,
            confirmpassword,
            gender,
          }),
        });

        const data = await res.json();
        if(data.error) {
          throw new Error(data.error)
       
        }
        //local storage
        //context 

      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    return {signup, loading}
}

export default useSignup

const handleErrors = ({fullname, username, password, confirmpassword ,gender}) => {
    if(!fullname || !username || !password || !confirmpassword || !gender){
     toast.error ("Please fill in all fields")
     console.log(fullname, username, password, confirmpassword,gender);
     
        return false
    } 

     if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return false;}

     if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;  
    }

    return true
}