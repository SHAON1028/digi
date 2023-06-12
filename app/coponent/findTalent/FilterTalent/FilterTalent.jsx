import React from "react";
import Image from "next/image";
import srchicon from "../../../assets/icon/searchicon.png";
const FilterTalent = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium mt-5">Top Talents Find</h1>

      {/* filter box */}
      <div className="p-6 border border-[#7CA090] mt-6 text-xs">
        <p className="font-medium">Filter By</p>
        <div className="border-b border-[#D9D9D9] my-2.5"></div>
        <p className="font-medium">Category</p>
        <p className="font-semibold text-[#006A44] my-1.5">All categories</p>
        {/* category List */}
        <ul>
          {[...Array(12)].map((item, id) => {
            return (
              <li
                key={id}
                className="font-normal mb-1.5 cursor-pointer  hover:text-[#006A44] hover:font-semibold"
              >
                Accounting & Consulting
              </li>
            );
          })}
        </ul>
        <div className="border-b border-[#D9D9D9] my-3.5"></div>
        <p className="font-medium">Location</p>
        {/* input field */}
        <div className="border border-[#BCD1C8] h-[38px] my-3 flex items-center gap-2">
          <Image className="ml-2.5" src={srchicon} />
          <input
            className="border-none bg-[#F5F5F5] outline-none"
            type="text"
            placeholder="Search Your Location"
          />
        </div>
        {/*  */}
        <p className="font-medium">Talent type</p>
        {/* radio btn */}
        <div>
          <div class=" mb-4 mt-2.5">
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Full - Time
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Part-Time
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Contractual
              </label>
            </div>
          </div>
        </div>
        {/* radio btn */}
      </div>
    </div>
  );
};

export default FilterTalent;
