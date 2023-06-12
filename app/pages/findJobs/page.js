import FilterJobs from '@/app/coponent/findJob/FilterJobs/FilterJobs';
import ResultJobs from '@/app/coponent/findJob/ResultJob/ResultJobs';
import FilterTalent from '@/app/coponent/findTalent/FilterTalent/FilterTalent';
import ResultTalent from '@/app/coponent/findTalent/ResultTalent/ResultTalent';
import React from 'react'

const FindJobPage = () => {
  return (
    <div className="py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <p className="text-[9px] font-normal">Home / Find Jobs</p>
      <div className="lg:grid grid-cols-7 lg:gap-12">
        {/* filter */}
        <div className=" col-span-2 ">
          <FilterJobs></FilterJobs>
        </div>
        {/* filter */}

        {/* result */}
        <div className=" col-span-5">
          <ResultJobs></ResultJobs>
        </div>
        {/* result */}
      </div>
    </div>
  );
}

export default FindJobPage