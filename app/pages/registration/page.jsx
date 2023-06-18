import React from "react";
import Image from "next/image";
import pp from "../../assets/image/pp.png";
import checkbox from "../../assets/icon/icon2/checkbox.png";
import experienced from "../../assets/icon/experienced.png";
import fresher from "../../assets/icon/fresher.png";
import "../registration/status.module.css"
import CheckBox from "@/app/coponent/checkbox/CheckBox";
import google from "../../assets/image/google.png"
const RegistrationPage = () => {
  return (
    <div class="lg:flex  py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 gap-6">
      <div class="w-3/10 mx-5 lg:mx-0 lg:w-80 lg:h-[505px] mt-[100px] border border-[#7CA090] pl-8 pr-3.5">
        <div className="flex justify-center -mt-14 mb-10 ">
          <Image alt="" src={pp} />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Image src={checkbox} alt="" />

            <p className="text-base font-medium ">
              Build your profile and let <br />
              recruiters find you
            </p>
          </div>
          <div className="flex items-center  gap-2 mb-2">
            <Image src={checkbox} alt="" />

            <p className="text-base font-medium ">
              Get job postings delivered right to your email
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Image src={checkbox} alt="" />

            <p className="text-base font-medium">
              Find a job and grow your career
            </p>
          </div>
        </div>
        <div class=" mt-14 ">
          <div className=" w-64 ">
            <p className="text-xl font-bold tracking-wide">
              resource <span className="text-[#006A44]">it</span>
            </p>
            <p className="italic font-bold text-xl text-[#006A44] mb-2">
              FASTFORWARD
            </p>
            <p className="text-[#878787] text-xs font-normal py-1">
              Not getting enough profile views?
            </p>
            <p className="text-sm font-semibold pr-0.5 text-[#006A44] pb-3 mb-2">
              Get a Featured Profile & increase your visibility to recruiters up
              to 3 times
            </p>
          </div>
        </div>
      </div>
      <div class="w-7/10 lg:mx-0 mx-5">
        <h1 className="text-3xl font-medium mt-5">
          Find a job & grow your career
        </h1>
        <p className="text-xs font-medium text-[#7B7B7B] mb-2">
          5 lakh+ Talents for you to explore
        </p>

        <div className="border border-[#7CA090] lg:w-[832px] mt-7 py-4 px-6  gap-4 ">
          <div className="lg:flex gap-4">
            <div className="space-y-2 text-xs lg:w-1/2 mb-4 ">
              <label for="username" className="text-xs font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="What is your Company name?"
                className="w-full px-4 py-3  border   border-[#97B5A8] placeholder:text-xs placeholder:text-[#7B7B7B]"
              />
            </div>
            <div className="space-y-2 text-xs lg:w-1/2">
              <label for="username" className="text-xs font-medium">
                Company Email ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Tell us your Company Email ID"
                className="w-full px-4 py-3  border   border-[#97B5A8] placeholder:text-xs placeholder:text-[#7B7B7B]"
              />
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="space-y-2 text-xs lg:w-1/2">
              <label for="username" className="text-xs font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create a password for your account"
                className="w-full px-4 py-3  border   border-[#97B5A8] placeholder:text-xs placeholder:text-[#7B7B7B]"
              />
            </div>
            <div className="space-y-2 text-xs lg:w-1/2">
              <label for="username" className="text-xs font-medium">
                Mobile Number
              </label>
              <input
                type="number"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Mobile Number"
                className="w-full px-4 py-3  border   border-[#97B5A8] placeholder:text-xs placeholder:text-[#7B7B7B]"
              />
            </div>
          </div>
          <p className="text-xs mt-4 font-semibold">Work Status</p>
          {/* status */}
          <div className="lg:flex gap-4">
            {/* 1 */}
            <div class="container relative w-[383px] mt-4">
              <div class="list">
                <div class="form-element">
                  <input
                    type="checkbox"
                    name="platform"
                    value="github"
                    id="github"
                  />
                  <label for="github" className="flex items-center p-3 gap-2 ">
                    <div class="icon">
                      <Image src={experienced} alt="" />
                    </div>
                    <div class="title">
                      <p className="font-medium text-lg text-dark">
                        I'm Experienced
                      </p>
                      <p className="#888888 text-xs">
                        I have work experience (excluding internships)
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div class="container relative w-[383px] mt-4">
              <div class="list">
                <div class="form-element">
                  <input
                    type="checkbox"
                    name="platform"
                    value="fresher"
                    id="fresher"
                  />
                  <label for="fresher" className="flex items-center p-3 gap-2 ">
                    <div class="icon">
                      <Image src={fresher} alt="" />
                    </div>
                    <div class="title">
                      <p className="font-medium text-lg text-dark">
                        I'm a Fresher
                      </p>
                      <p className="#888888 text-xs">
                        I am a student/ Haven't worked after graduation Resume
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* status */}
          <CheckBox></CheckBox>
          <p className="mt-4 text-xs font-medium">
            By clicking Register, you agree to the{" "}
            <span className="text-[#006A44]">
              Terms and Conditions & Privacy Policy
            </span>{" "}
            of resourceit.com
          </p>
          <div className="lg:flex gap-2 items-center  mt-7 mb-6">
            <button className=" w-[234px] bg-prymary text-white  text-lg  h-[47px]">
              Register Now
            </button>
            <div className="lg:flex lg:w-full w-1/2">
              <div className="flex items-center  gap-2">
                <div className="flex-1 h-px sm:w-12 w-14 bg-[#D9D9D9]"></div>
                <p className="px-3 text-sm dark:text-gray-400 border rounded-full p-2 ">
                  Or
                </p>
                <div className="flex-1 h-px sm:w-16 bg-[#D9D9D9] "></div>
              </div>
              <div>
                <button className="w-[234px] h-[47px] border border-[#97B5A8] flex justify-center ">
                  {/* <FcGoogle size={24} /> */}
                  <Image className="h-[42px] w-[84px] " src={google} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
