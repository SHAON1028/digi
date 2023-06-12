import FilterTalent from '@/app/coponent/findTalent/FilterTalent/FilterTalent';
import ResultTalent from '@/app/coponent/findTalent/ResultTalent/ResultTalent';
import React from 'react'

const FindTalentPage = () => {
  return (
    <div className="py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <p className="text-[9px] font-normal">Home / Find Talent</p>
      <div className="lg:grid grid-cols-7 lg:gap-12">
        {/* filter */}
        <div className=" col-span-2 ">
          <FilterTalent></FilterTalent>
        </div>
        {/* filter */}

        {/* result */}
        <div className=" col-span-5">
          <ResultTalent></ResultTalent>
        </div>
        {/* result */}
      </div>
    </div>
  );
}

export default FindTalentPage