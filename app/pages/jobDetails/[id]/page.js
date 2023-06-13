import CompanyInfo from '@/app/coponent/JobDetails/Details/CompanyInfo/CompanyInfo';
import Highlight from '@/app/coponent/JobDetails/Details/Description/Highlight/Highlight';
import React from 'react'

const JobDetailsPage = () => {
  return (
    <div className="py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <p className="text-[9px] font-normal">Home / Job Details Page </p>
      <div className="lg:grid grid-cols-7 lg:gap-12">
        <div className=" col-span-5  ">
          <CompanyInfo></CompanyInfo>

          {/* Description */}
          <div className="border border-[#7CA090] mt-1.5 pt-5 px-10">
            <Highlight></Highlight>

            <div className="ml-[20px]">
              <p className="text-base font-medium">Job description</p>
              <div className="text-xs font-medium text-[#545454] leading-4 my-4">
                <p>Hi All,</p>
                <p>Greetings from BRAC Bank Ltd.</p>
                <p>
                  It was a pleasure talking to you, and thanks for showing
                  interest in the discussed profile.
                </p>
                <p>Cash & Trade Process Sr Supervisor ::Dhaaka Location</p>
                <p>Shift Timing :: US shifts(10PM-7AM)</p>
                <p>Work Mode: Hybrid</p>
                <p>Interview: Virtual</p>
                <p>Location: Gurgaon</p>
              </div>
              <div className="text-xs  font-medium mb-4">
                <p>Key Skilss,</p>
                <p>Finance Bank IT </p>
              </div>

              <div className="text-xs font-medium text-[#545454] leading-4 my-4">
                <p>
                  Please find the attached Job descriptions and let me know if
                  you are interested.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          {/* Description */}
        </div>

        {/* suggested jobs */}
        <div className=" col-span-2"></div>
        {/* suggested jobs */}
      </div>
    </div>
  );
}

export default JobDetailsPage