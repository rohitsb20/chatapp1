import toast from 'react-hot-toast'
import { useState } from 'react'

const useSignup = () => {

    const [loading , setLoading] = useState(false)

   
    const signup  = async ({fullname, username, password, confirmPassword, gender}) =>
    {   const success = handleErrors({fullname, username, password, confirmPassword, gender})
        if(!success) return false
        
    }
}

export default useSignup

const handleErrors = ({fullname, username, password, confirmPassword ,gender}) => {
    if(!fullname || !username || !password || !confirmPassword){
     toast.error ("Please fill in all fields")
        return false
    } 

     if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;}

     if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;  
    }

    return true
}