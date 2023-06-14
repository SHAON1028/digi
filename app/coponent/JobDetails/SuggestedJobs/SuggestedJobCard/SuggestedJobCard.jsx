import Image from 'next/image';
import React from 'react'
import loc from "../../../../assets/icon/icon2/loc.png";
import sal from "../../../../assets/icon/icon2/sal.png";
import ex from "../../../../assets/icon/icon2/ex.png";
import companyicon from "../../../../assets/icon/company/three.png";
const SuggestedJobCard = ({id}) => {
  return (
    <div>
      <div
        key={id}
        className={`${id === 4 ? "" : "border-b-2 border-[#BCD1C8] mr-3.5"}`}
      >
        <div className="flex gap-4 items-center  py-4 mb-5  ">
          {/* img */}
          <div className="border border-[#D8E3DE] w-16 h-14 flex items-center p-2 mt-3.5 gap-2.5">
            <Image src={companyicon} alt="" />
          </div>
          {/* info */}
          <div className="text-[8px]  w-3/5 ">
            <p className=" font-semibold">Customer Care Executive </p>
            <div className="font-normal text-[#6D6D6D]">
              <div className="flex items-center gap-2">
                <Image src={ex} alt="" />
                <p className="">6 - 11 years </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={sal} alt="" />
                <p className="">৳ 8-18 Lacs P.A.</p>
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center gap-2">
                  <Image src={loc} alt="" />
                  <p className="">Dhaka</p>
                </div>
                <p> Posted: 3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestedJobCard