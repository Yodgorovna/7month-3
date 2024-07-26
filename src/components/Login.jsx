import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Login
        </h1>
        <form action="">
          <div className="relative my-4">
            <input
              type="email"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your email
            </label>
          </div>

          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-gray-300 appearence-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            />
            <label>Password</label>
          </div>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Remember Me</label>
            </div>
            <span>Forgot Password?</span>
          </div>
          <button type="submit">Login</button>
          <div>
            <span>
              New Here? <Link to="Register">Create an Account</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
