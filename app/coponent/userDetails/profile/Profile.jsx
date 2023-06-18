import Image from 'next/image';
import React from 'react'
import user from "../../../assets/image/user.png"
import edit from "../../../assets/icon/edit.png";
import email from "../../../assets/icon/email.png";
import phone from "../../../assets/icon/phone.png";
import calender from "../../../assets/icon/calender.png";
import location from "../../../assets/icon/location.png";
import salaryicon from "../../../assets/icon/icon2/sal.png";
const Profile = () => {
  return (
    <div>
      <div className="border border-[#7CA090] py-6 w-[336px]">
        <div className="flex items-center justify-end gap-12 -mt-[75px] pr-2">
          <Image className="bg-[#F5F5F5]" src={user} alt="" />
          <button className="flex pt-2 items-center gap-1">
            <Image className="h-4 w-4" src={edit} alt="" />
            <p>Edit</p>
          </button>
        </div>
        {/* end pp */}
        {/* name */}
        <div className="text-center leading-7 mt-2 ">
          <p className="text-[27px] font-medium">Sourav Aich</p>
          <p className="text-[19px] text-[#5B5B5B] font-normal">
            UI/UX Engineer
          </p>
          <div className="border-b border-[#BCD1C8] m-5 mt-4 mb-4 "></div>
        </div>
        <div className="pl-9 text-xs font-normal">
          {/* ADDRESS */}
          <div className="phn flex items-center gap-4">
            <Image className="" src={phone} alt="" />
            <p>+8801712979742</p>
          </div>
          {/* ADDRESS */}
          {/* email */}
          <div className="phn flex items-center gap-4 mt-3">
            <Image className="" src={email} alt="" />
            <p>souravss49@gmail.com</p>
          </div>
          {/* email */}
          {/* location */}
          <div className="phn flex items-center gap-4 mt-3">
            <Image className="" src={location} alt="" color="#006A44" />
            <p>
              House # 14,Road # 2, Sector # 3 Jashimuddin Avenue , Uttara Model
              Town
            </p>
          </div>
          {/* location */}
          {/* calender */}
          <div className="phn flex items-center gap-4 mt-3">
            <Image className="" src={calender} alt="" color="#006A44" />
            <p>45 Days</p>
            <p className="bg-[#006A44] text-[10px] text-white p-0.5">
              Availability to Join
            </p>
          </div>
          {/* calender */}
          {/* salary */}
          <div className="phn flex items-center gap-4 mt-2.5">
            <Image className="" src={salaryicon} alt="" color="#006A44" />
            <p> 1,30,000 Taka</p>
            <p className="bg-[#006A44] text-[10px] text-white p-0.5">
              Expected Salary
            </p>
          </div>
          {/* calender */}
        </div>
      </div>
    </div>
  );
}

export default Profile