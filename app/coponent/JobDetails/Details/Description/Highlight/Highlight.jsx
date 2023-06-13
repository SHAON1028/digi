import React from 'react'
import Image from "next/image";
import hiicon from "../../../../../assets/icon/icon2/highlightIcon.png";
import match from "../../../../../assets/icon/icon2/match.png";
const Highlight = () => {
  return (
    <div>
      {/* highlight */}
      <div className="border border-[##D8E3DE] pt-5 pl-6 mb-8">
        <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3">
          Job Highlights{" "}
        </h2>
        <div className="text-xs font-medium text-[#6D6D6D] pl-6 mt-1">
          <div className="flex items-center">
            <Image alt="" src={hiicon} />
            <p>
              Job Highlights Shift Timing :: US shifts(10PM-7AM). . Work Mode:
              Hybrid. . Interview: Virtual.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <Image alt="" src={hiicon} />
              <p>
                Manage teams BAU tasks to successfully meet set deadlines,
                adhere to monthly team schedule and assisting others
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center">
                <Image alt="" src={hiicon} />
                <p>Bachelors / University degree or equivalent experience</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3 mt-5">
          Your Job Match Score{" "}
        </h2>
        <div className="ml-2 mt-0.5 flex">
          {[...Array(10)].map((item, id) => {
            return (
              <div key={id} className="flex items-center">
                <Image src={match} alt="" />
                <p className="text-[8px] bg-[#EDF7F2] p-1.5 mr-2">Salesforce</p>
              </div>
            );
          })}
        </div>
        <p className="text-[#878787] text-xs ml-2 font-normal">
          Your profile is missing the skills required for this job. Take these
          courses to increase your chances of getting hired.
        </p>
        <div className="mt-3.5 mb-6 text-xs ml-2 font-medium flex gap-4">
          <p className="text-[#878787] text-xs ml-2 font-medium">
            Job Category{" "}
          </p>
          <p>Bank</p>
          <p>Finance </p>
          <p>IT</p>
        </div>
      </div>
      {/* highlight */}
    </div>
  );
}

export default Highlight