import Image from 'next/image';
import React from 'react'
import companyicon from "../../../assets/image/Group 124.png"
import locationicon from "../../../assets/icon/icon2/locicon.png"
import Link from 'next/link';
const JobsCard = () => {
  return (
    <Link href="/pages/jobDetails/1">
      <div className="border border-[#BCD1C8] flex mb-2">
        <div className="flex items-center justify-center mr-4">
          {" "}
          <Image
            className="mt-3.5 ml-3 mb-3 w-[97px] h-[20px]"
            src={companyicon}
            alt=""
          />
        </div>
        <div className="">
          {/* 1 */}
          <div className="flex items-center justify-between mr-4">
            <div className="mt-[22px]">
              <h1 className="font-semibold text-base">
                Hiring Freshers / Experienced People For BPO & KPO
              </h1>

              <div className="flex gap-1">
                <Image src={locationicon} alt="" />
                <p className="text-[10px] font-normal">
                  Location: Netscribes, Dhaka
                </p>
              </div>
              <div className="text-[10px] font-normal flex gap-2 my-0.5">
                <p>৳ 3-8 Lacs P.A.</p>
                <p>Exp 0-5 Years</p>
              </div>
            </div>

            <button className="bg-prymary text-white text-xs px-9 py-2  font-normal ml-5">
              Full Details
            </button>
          </div>
          {/* txt */}
          <div>
            <p className="text-xs font-normal mt-1 pr-2">
              Hiring Freshers / Experienced For BPO & KPO Related Profiles.
              Please apply & our of our executive will get in touch with you.
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
    </Link>
  );
}

export default JobsCard