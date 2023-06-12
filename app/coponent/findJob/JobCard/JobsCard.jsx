import Image from 'next/image';
import React from 'react'
import companyicon from "../../../assets/image/Group 124.png"
const JobsCard = () => {
  return (
    <div className="border border-[#BCD1C8] flex mb-2">
      <Image className="mt-3.5 ml-3 mb-3" src={companyicon} width={97} height={25} alt="" />
      <div className="w-full">
        {/* 1 */}
        <div className="flex items-center">
          <div className="mt-[22px]">
            <h1 className="font-semibold text-base">Bertha J. Shields</h1>
            <p className="text-[10px] font-normal">
              Hands on Salesforce Solution Architect
            </p>
          </div>
          <div className="flex items-center justify-between ml-2">
            <div className="w-[10px] h-[10px] bg-[#57A783] rounded-full mr-1.5"></div>
            <p className=" text-[10px] font-normal mr-4">Open to work</p>
            <button className="border border-[#006A44] text-[10px] font-normal py-1 px-3">
              Full - Time
            </button>
          </div>
          <button className="bg-prymary text-white text-xs px-9 py-2  font-normal ml-52">
            Profile
          </button>
        </div>
        {/* txt */}
        <div>
          <p className="text-xs font-normal mt-1">
            Hi there! Based in NYC, I am 6x Certified Salesforce
            Admin/Dev/Consultant with excellent communication skills. I am
            passionate about creating solutions that my clients wantas opposed
            to a solution they have to deal with. I am also
          </p>
        </div>
        {/* skill */}
        <div className="ml-2 mt-0.5">
          {[...Array(10)].map((item, id) => {
            return (
              <button key={id} className="text-[8px] bg-[#EDF7F2] p-1.5 mr-2">
                Salesforce
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JobsCard