import Profile from '@/app/coponent/userDetails/profile/Profile';
import React from 'react'
import Image from 'next/image';
import edit from "../../assets/icon/edit.png"
import { Chartskill } from '@/app/coponent/chart/Chartskill';

const ProfilePage = () => {
  return (
    <div className="lg:flex  py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 gap-6 ">
      {/* left side */}

      <div className="w-3/10 mt-[122px] ">
        <Profile></Profile>

        {/* chart */}
        <div className="border border-[#7CA090] pr-2 w-[336px] mt-5">
          <div className="flex justify-end">
            <button className="flex pt-2 items-center gap-1">
              <Image className="h-4 w-4" src={edit} alt="" />
              <p>Edit</p>
            </button>
          </div>
          <p className="text-[#006A44] text-xs font-medium pl-8">
            Key Skills Match
          </p>
        </div>
        <div className=''>
          <Chartskill></Chartskill>
        </div>
        {/* cahrt */}
      </div>
      <div className="w-7/10">right</div>
    </div>
  );
}

export default ProfilePage