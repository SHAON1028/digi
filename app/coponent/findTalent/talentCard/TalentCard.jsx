import React from 'react'
import Image from 'next/image';
import img1 from "../../../assets/image/Farhana-Meem-removebg-preview.png";

const TalentCard = () => {
  return (
    <div className="border border-[#BCD1C8] flex mb-2">
      <Image className="pt-3.5 pl-3 pb-3" src={img1} alt="" />
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

export default TalentCard