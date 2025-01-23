import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

import GenderCheckbox from "./GenderCheckbox";



export default function SignupPage() {

const [input, setInput] = useState({
  fullname: "",
  username: "",
  password: "",
  confirmpassword: "",
  gender: "",
});

const {signup} = useSignup()

	const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  };

const handleSubmit =  async (e) => {
    e.preventDefault()
  await  signup(input);
  console.log(input);
  
    
}





  return (
    <div className="min-h-screen  md:w-1/2 flex items-center justify-center ">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Signup to Talkio
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
                value={input.fullname}
                onChange={(e) =>
                  setInput({ ...input, fullname: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Choose a username"
                value={input.username}
                onChange={(e) =>
                  setInput({ ...input, username: e.target.value })
                }
              />
            </div>
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={input.gender}
            />
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="      confirmpassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="      confirmpassword"
                name="      confirmpassword"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
                value={input.      confirmpassword}
                onChange={(e) =>
                  setInput({ ...input,       confirmpassword: e.target.value })
                }
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
