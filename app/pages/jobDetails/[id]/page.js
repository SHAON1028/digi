import CompanyInfo from "@/app/coponent/JobDetails/Details/CompanyInfo/CompanyInfo";
import About from "@/app/coponent/JobDetails/Details/Description/About/About";
import Description from "@/app/coponent/JobDetails/Details/Description/Description";
import SuggestedJobCard from "@/app/coponent/JobDetails/SuggestedJobs/SuggestedJobCard/SuggestedJobCard";
import Image from "next/image";
import React from "react";
import match from "../../../assets/icon/icon2/match.png";
const JobDetailsPage = () => {
  return (
    <div className="py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <p className="text-[9px] font-normal">Home / Job Details Page </p>
      <div className="lg:grid grid-cols-7 lg:gap-5">
        <div className=" col-span-5  ">
          <CompanyInfo></CompanyInfo>

          {/* Description */}
          <Description></Description>
          {/* Description */}

          {/* about  */}
          <About></About>
          {/* about */}
        </div>

        {/* suggested jobs */}
        <div className=" col-span-2">
          {/* suggested */}
          <div className=" border border-[#7CA090] mt-1.5 pt-4 pl-4 ">
            <h1 className="font-medium text-lg">
              Jobs you might be interested in
            </h1>
            {/* card */}
            <div className="">
              {[...Array(5)].map((item, id) => {
                return <SuggestedJobCard key={id} id={id}></SuggestedJobCard>;
              })}
            </div>
            {/* card */}
            <p className="text-[8px] text-[#006A44] font-medium mb-4">
              View All
            </p>
          </div>

          {/* suggested */}
          {/*  */}

          {/* job match score 3 card */}
          {/* card 1 */}
          <div className=" border border-[#7CA090]  pt-4 pl-4 mt-3">
            <p className="text-xs font-medium text-[#006A44] mb-2">
              Your Job Match Score
            </p>

            <div className="ml-2 mt-0.5 flex flex-wrap mb-4">
              {[...Array(7)].map((item, id) => {
                return (
                  <div key={id} className="flex items-center">
                    <Image src={match} alt="" />
                    <p className="text-[8px] bg-[#EDF7F2] p-1.5 mr-2">
                      Salesforce
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* card 1 */}
          {/* card 2 */}
          <div className=" border border-[#7CA090]  pt-4 pl-4 mt-3">
            <p className="text-xs font-medium text-[#006A44] mb-2">Location</p>

            <div className="ml-2 mt-0.5 flex flex-wrap mb-4">
              {[...Array(4)].map((item, id) => {
                return (
                  <div key={id} className="flex items-center">
                    <Image src={match} alt="" />
                    <p className="text-[8px] bg-[#EDF7F2] p-1.5 mr-2">Dhaka</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* card 2 */}
          {/* card 3 */}
          <div className=" border border-[#7CA090]  pt-4 pl-4 mt-3">
            <p className="text-xs font-semibold">
              resource <span className="text-[#006A44]">it</span>
            </p>
            <p className="italic font-bold text-xs">
              FAST <span className=" text-[#006A44] ">FORWARD</span>
            </p>
            <p className="text-[#878787] text-[8px] font-normal py-1">
              Not getting enough profile views?
            </p>
            <p className="text-sm font-semibold pr-0.5 text-[#006A44] pb-3">
              Get a Featured Profile & increase your visibility to recruiters up
              to 3 times
            </p>
          </div>
          {/* card 3 */}
          {/* job match score 3 card */}
        </div>
        {/* suggested jobs */}
      </div>
    </div>
  );
};

export default JobDetailsPage;
