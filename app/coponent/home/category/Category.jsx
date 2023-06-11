import Link from "next/link";
import React from "react";
import staricon from "../../../assets/icon/star.png"
import skillicon from "../../../assets/icon/skill.png"
import Image from "next/image";
const Category = () => {
  return (
    <div className=" mt-28  py-3  mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl  md:px-24 lg:px-8">
      <div>
        <h1 className="text-[2.5rem] font-medium mb-1">
          Browse talent by category
        </h1>
        <div className="font-medium text-lg">
          Looking for work?{" "}
          <span className="text-prymary">
            <Link href="" className="underline">
              Browse jobs
            </Link>
          </span>
        </div>
      </div>

      {/* category card */}
     <div className="grid grid-cols-4 gap-3 mt-10">
        {
           [...Array(8)].map((item,id)=>{
            return (
              <div
                key={id}
                className="w-72 h-32 border-[1px] border-[#BCD1C8] flex justify-center items-center"
              >
                <div>
                  <p className="text-lg font-semibold">Development & IT</p>
                  <div>
                    <div className="flex gap-2 text-xs font-normal mt-1">
                      {/* star */}
                      <div className="flex items-center gap-1.5">
                        <Image src={staricon} alt="" />
                        <p>4.85/5</p>
                      </div>
                      {/* skill */}
                      <div className="flex items-center gap-1.5">
                        <Image src={skillicon} alt="" />
                        <p>1883 skills</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
           })
        }
     </div>
    </div>
  );
};

export default Category;
