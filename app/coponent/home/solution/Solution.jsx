import React from 'react'
import solutionimg from "../../../assets/image/solution.png"
import Image from 'next/image';
import rightarrow from "../../../assets/icon/arrowright.png"
const Solution = () => {
  return (
    <div className=" mt-28  py-3  mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl  md:px-24 lg:px-8">
      <div className="flex gap-7 border border-[#BCD1C8] lg:w-[1196px] lg:h-[580px] pt-[72px]">
        {/* left */}
        <div className=" ml-16">
          <p className="mb-3 text-sm font-bold ">
            Resource it{" "}
            <span className="bg-[#57A783] text-white px-1 py-0.5">
              Business
            </span>
          </p>
          <div className="w-[661px] ">
            <h1 className="mb-7 text-4xl font-bold w-96">
              A business solution for teams
            </h1>
            <div className="text-[#5F5F5F]">
              <p className="mb-8 text-xl font-medium">
                Upgrade to a curated experience packed <br /> with tools and
                benefits, dedicated to businesses
              </p>
              {/* 1 */}
              <div className="flex gap-4 mb-2.5 ">
                <Image src={rightarrow} />
                <p className="text-lg font-medium">
                  Connect to freelancers with proven business experience
                  {/* Get matched with the perfect talent by a
              customer success manager */}
                  {/* Manage teamwork and boost productivity
              with one powerful workspace */}
                </p>
              </div>
              {/* 2*/}
              <div className="flex gap-4 mb-2.5 ">
                <Image src={rightarrow} />
                <p className="text-lg font-medium">
                  Get matched with the perfect talent by a customer success
                  manager
                </p>
              </div>
              {/* 3 */}
              <div className="flex gap-4 ">
                <Image src={rightarrow} />
                <p className="text-lg font-medium">
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </p>
              </div>
            </div>
            <button className=" bg-prymary px-10 py-2 text-white mt-8">
              Explore Business
            </button>
          </div>
        </div>

        {/* right */}
        <div className="mt-12">
          <Image src={solutionimg} />
        </div>
      </div>
    </div>
  );
}

export default Solution