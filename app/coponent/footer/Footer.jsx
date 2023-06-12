import React from "react";
import Image from "next/image";
import google1 from "../../assets/icon/gg/g1.png";
import google2 from "../../assets/icon/gg/g2.png";
import fb from "../../assets/icon/gg/fb.png";
import twt from "../../assets/icon/gg/Twitter.png";
import ln from "../../assets/icon/gg/link.png";
const Footer = () => {
  return (
    <div className="border-t-[1px] w-full border-[#D9D9D9] ">
      <div className='className="mt-28 py-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"'>
        <div className="flex items-center justify-center ">
          <div>
            <h1 className="text-center text-4xl font-semibold mt-10 text-[#006A44]">
              Overcome Ignorance and <br /> Fight for Equality
            </h1>
            {/* input */}
            <div className=" w-[331px] h-[41px] flex items-center justify-between mt-8 ml-10 bg-white ">
              <div className="flex items-center justify-between ">
                <div>
                  <input
                    className="w-[180px] p-2 outline-none"
                    type="text"
                    placeholder="Enter mobile number..."
                  />
                </div>
              </div>

              <button className="bg-prymary text-lg  text-white text-xs py-2.5 px-5">
                Get Link
              </button>
            </div>
            {/* input */}
            {/* google */}
            <div className="flex gap-3.5 mt-12">
              <Image src={google1} />
              <Image src={google2} />
            </div>
            {/* google */}
          </div>
        </div>
        {/* footer */}
        <div className="mt-20 flex justify-between">
          <div>
            <h3 className="mb-4 text-base font-bold">Navigation</h3>
            <ul className="text-[15px] font-normal">
              <li className="mb-1">Home</li>
              <li className="mb-1">About Us</li>
              <li className="mb-1">What We Do</li>
              <li className="mb-1">Careers</li>
              <li className="mb-1">Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold">What We Do</h3>

            <ul className="text-[15px] font-normal">
              <li className="mb-1">Encouraging Testing</li>
              <li className="mb-1">Strengthening Advocacy</li>
              <li className="mb-1">Sharing Information</li>
              <li className="mb-1">Building Leadership</li>
              <li className="mb-1">Engaging With Global Fund</li>
              <li className="mb-1">Shining a Light</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold">LEGAL</h3>

            <ul className="text-[15px] font-normal">
              <li className="mb-1">General Info</li>
              <li className="mb-1">Privacy Policy</li>
              <li className="mb-1">Terms of Service</li>
              <li className="mb-1">Trust & safety</li>
              <li className="mb-1">Fraud alert</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-bold">TALK TO US</h3>

            <ul className="text-[15px] font-normal">
              <li className="mb-1">support@resourceit.com</li>
              <li className="mb-1"> +66 2399 1145</li>
              <li className="mb-1">Facebook</li>
              <li className="mb-1">Linkedin</li>
              <li className="mb-1">Twitter</li>
            </ul>
          </div>
        </div>
        {/* footrt */}
        <div className="border-t-[1px] w-full border-[#D9D9D9] mt-10"></div>
        <div className="flex justify-between items-center py-24">
          {/* logo */}
          <div>
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center mr-8"
            >
              <svg
                width={39}
                height={39}
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1875 19.5H12.2038M26.8125 19.5H26.8288M19.5 19.5H19.5163M19.5 26.8125H19.5163M19.5 12.1875H19.5163M4.875 12.675L4.875 26.325C4.875 29.0553 4.875 30.4204 5.40634 31.4632C5.87373 32.3805 6.61951 33.1263 7.5368 33.5937C8.57962 34.125 9.94474 34.125 12.675 34.125H26.325C29.0553 34.125 30.4204 34.125 31.4632 33.5937C32.3805 33.1263 33.1263 32.3805 33.5937 31.4632C34.125 30.4204 34.125 29.0553 34.125 26.325V12.675C34.125 9.94475 34.125 8.57962 33.5937 7.5368C33.1263 6.61951 32.3805 5.87373 31.4632 5.40635C30.4204 4.875 29.0553 4.875 26.325 4.875L12.675 4.875C9.94475 4.875 8.57962 4.875 7.5368 5.40634C6.61951 5.87373 5.87373 6.61951 5.40634 7.5368C4.875 8.57962 4.875 9.94474 4.875 12.675Z"
                  stroke="#2D6A4F"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide font-[20px]">
                resource<span className="text-prymary ml-1.5">it</span>
              </span>
            </a>
          </div>

          <div>
            <h1 className="font-normal text-sm">
              © 2023 ADN Diginet. All Rights Reserved.{" "}
            </h1>
          </div>
          {/* socail */}
          <div className="flex gap-3.5">
            <div className="border border-[#000000] rounded-full w-10 h-10 flex items-center justify-center">
              <Image src={fb} />
            </div>
            <div className="border border-[#000000] rounded-full w-10 h-10 flex items-center justify-center">
              <Image src={twt} />
            </div>
            <div className="border border-[#000000] rounded-full w-10 h-10 flex items-center justify-center">
              <Image src={ln} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
