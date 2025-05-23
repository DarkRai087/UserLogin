import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


function Welcome_page() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-4">Welcome to PopX</h1>
          <p className="text-xs sm:text-sm text-center text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button onClick={()=>navigate('/Register')} className="w-full bg-indigo-700 text-white py-2 px-4 rounded mb-4 hover:bg-indigo-900 transition-transform transform hover:scale-105 shadow-lg">Create Account</button>
          <button onClick={()=>navigate('/Login')} className="w-full bg-indigo-100 text-indigo-800 py-2 px-4 rounded hover:bg-indigo-200 transition-transform transform hover:scale-105 shadow-lg">Already Registered? Login</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Welcome_page;
