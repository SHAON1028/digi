"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const popins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const Navbar = () => {

     const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* header */}
      <div class="">
        <div class=" py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <div class="flex items-center">
              <Link
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
              </Link>
              <ul class="flex items-center hidden space-x-8 lg:flex font-medium font-[15px] mt-1 popins.className">
                <li>
                  <Link
                    href="/pages/findTalent"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Find Talents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/findJobs"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Why chose us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li className="border border-prymary py-[4px] pl-[33px] pe-[28px] flex  items-center">
                <a
                  href="/"
                  aria-label="Sign in"
                  title="Sign in"
                  class="font-medium tracking-wide  text-prymary pr-[8px]  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Login
                </a>
                <IoIosArrowDown />
              </li>
              <li className="flex items-center">
                <a
                  href="/"
                  class="font-medium tracking-wide   pr-[8px]  transition-colors duration-200 hover:text-teal-accent-400"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Registration
                </a>
                <IoIosArrowDown />
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 " viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide  uppercase">
                            Company
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Sign in"
                            title="Sign in"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Sign in
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="border-b-[1px] w-full"></div>
      {/* sub menu */}
      <ul className="flex text-[12px] py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-normal">
        <li className="mr-[18px]">Development & IT</li>
        <li className="mr-[18px]">Design & Creative</li>
        <li className="mr-[18px]">Sales & Marketing</li>
        <li className="mr-[18px]">Writing & Translation</li>
        <li>Admin & Customer Support</li>
      </ul>
    </div>
  );
}

export default Navbar