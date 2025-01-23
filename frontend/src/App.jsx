import Feature from "../src/components/feature/Feature"
import {Routes, Route } from 'react-router-dom'
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup";
import { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
      <div className="bg-white w-screen h-screen ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  justify-center h-full">
          <Routes>
            <Route path="/" element={<Feature />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Toaster/>
        </div>
      </div>
    </>
  );
}

export default App
