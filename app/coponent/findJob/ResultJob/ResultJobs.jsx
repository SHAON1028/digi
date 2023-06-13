import React from 'react'
import TalentCard from '../../findTalent/talentCard/TalentCard';
import Image from 'next/image';
import srcIcon from "../../../assets/icon/searchicon.png";
import JobsCard from '../JobCard/JobsCard';

const ResultJobs = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium mt-5">Find your top jobs</h1>
      <p className="text-xs font-medium text-[#7B7B7B] mb-2">
        5 lakh+ Talents for you to explore
      </p>
      <div className="border border-[#7CA090] px-6">
        {/* search */}
        <div className="flex">
          <div className="bg-white mt-10 flex items-center py-3 px-4">
            <div className=" ">
              <Image
                className="mr-3 mt-2"
                alt=""
                src={srcIcon}
                width={12}
                height={12}
              />
            </div>
            {/* in1 */}
            <div className=" border-r-2 border-[#D9D9D9] h-[18px]">
              <input
                className="w-[260px] text-xs outline-none"
                type="text"
                placeholder="Enter skills / designations / companies"
              />
            </div>
            {/* in2 */}

            <select
              id="countries"
              class=" w-[180px] outline-none text-xs font-medium text-[#7B7B7B] ml-10 border-r-2 border-[#D9D9D9] h-[20px] "
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {/* in3 */}
            <div className="  h-[18px] pl-10">
              <input
                className="w-[100px] text-xs outline-none "
                type="text"
                placeholder="Enter location "
              />
            </div>
            {/* btn */}
          </div>
          <button className="bg-prymary text-white mt-10 h-[42px] px-10 text-xs">
            Search
          </button>
        </div>

        {/* search   */}
        <p className="mt-5 text-xs font-normal text-[#5A5A5A] mb-3">
          1 - 20 of 3605
        </p>
        {/* card */}
        {[...Array(8)].map((item, id) => (
          <JobsCard key={id}></JobsCard>
        ))}
        <div className="flex  justify-end my-6 text-[#006A44] font-medium">
          <div className="flex items-center gap-4">
            <p>Page</p>
            <select id="countries" className="border border-prymary px-4 py-1">
              <option selected>1</option>
              <option value="US">1</option>
              <option value="CA">2</option>
              <option value="FR">3</option>
              <option value="DE">4</option>
            </select>
            <p>of 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultJobs