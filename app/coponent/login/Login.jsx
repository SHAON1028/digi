import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
        <h1 className=" font-bold text-xl mb-7">Login</h1>
        <form novalidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label for="username" className="text-xs">
              Email Id
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Tell us your Email ID"
              className="w-full px-4 py-3  border  border-[#97B5A8] placeholder:text-xs placeholder:text-[#7B7B7B]"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="text-xs">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password for your account"
              className="w-full px-4 py-3  border  border-[#97B5A8] placeholder:text-xs placeholder:text-[#7B7B7B]"
            />
            <div className="flex justify-between">
              <div></div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs underline text-[#006A44]"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
        <button className="w-full bg-prymary text-white p-2 mt-2 mb-6">
          Login
        </button>
        <p className="text-center text-[#7B7B7B] text-xs font-normal">
          Use OTP Login
        </p>
        <div className="flex items-center pt-4 space-x-1 gap-2">
          <div className="flex-1 h-px sm:w-16 bg-[#D9D9D9]"></div>
          <p className="px-3 text-sm dark:text-gray-400 border rounded-full p-2 ">
            Or
          </p>
          <div className="flex-1 h-px sm:w-16 bg-[#D9D9D9] m-2"></div>
        </div>
        <div>
          <button className="w-full border border-[#97B5A8] text-lg text-[#006A44] flex items-center justify-center gap-4 font-medium py-2">
            <FcGoogle size={24} />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login