import React from 'react'
import Image from "next/image";
import loc from "../../../../assets/icon/icon2/loc.png";
import sal from "../../../../assets/icon/icon2/sal.png";
import ex from "../../../../assets/icon/icon2/ex.png";
import companyicon from "../../../../assets/icon/company/three.png";
const CompanyInfo = () => {
  return (
    <div>
      <div className="border border-[#7CA090] mt-1.5 pt-5 pl-10">
        {/* 1stbox */}
        <div>
          <h1 className="font-medium text-lg">
            Job | JOB Openings For reputed BFSI client Transfer Agency
          </h1>
          <div className="flex justify-between items-center mr-10 ">
            <div>
              <div className="flex gap-4 items-center">
                {/* img */}
                <div className="border border-[#D8E3DE] w-28 h-24 flex items-center p-2 mt-3.5">
                  <Image src={companyicon} alt="" />
                </div>
                {/* info */}
                <div className="text-xs">
                  <p className="text-[#6D6D6D] font-semibold">BRAC Bank Ltd.</p>

                  <div className="font-normal text-[#6D6D6D]">
                    <p>Hiring for BFSI client</p>
                    <div className="flex items-center gap-1">
                      <Image src={ex} alt="" />
                      <p className="">6 - 11 years </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src={sal} alt="" />
                      <p className="">৳ 8-18 Lacs P.A.</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src={loc} alt="" />
                      <p className="">Dhaka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* btn */}
            <div className="flex gap-4 mt-12">
              <button className="border border-[#006A44] text-[#006A44] text-xs font-normal px-7 py-1.5">
                Save Jobs
              </button>
              <button className="bg-prymary text-white text-xs px-7 py-1.5  font-normal">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        {/* 1stbox */}
        <div className="border-b border-[#BCD1C8] mr-10 mt-9 mb-4 "></div>

        <div className="flex justify-between mb-5">
          <div className="text-xs font-normal flex gap-8 text-[#6D6D6D]">
            <p>Posted: 3 days ago</p>
            <p>Job Applicants: 30</p>
          </div>
          <div>
            <p className="font-medium text-xs text-[#006A44] mr-10">
              Send Me Jobs Like This
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo