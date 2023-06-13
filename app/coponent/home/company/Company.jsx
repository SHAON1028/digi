import React from "react";
import Image from "next/image";
import one from "../../../assets/icon/company/one.png";
import two from "../../../assets/icon/company/two.png";
import three from "../../../assets/icon/company/three.png";
import four from "../../../assets/icon/company/four.png";
import five from "../../../assets/icon/company/five.png";
import six from "../../../assets/icon/company/six.png";
import seven from "../../../assets/icon/company/seven.png";
import eight from "../../../assets/icon/company/eight.png";
import nine from "../../../assets/icon/company/nine.png";
import ten from "../../../assets/icon/company/ten.png";
import eleven from "../../../assets/icon/company/eleven.png";
import twelve from "../../../assets/icon/company/twelve.png";
import thirteen from "../../../assets/icon/company/thirteen.png";
import fourteen from "../../../assets/icon/company/fourteen.png";
const Company = () => {
  return (
    <div className="mt-28 py-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-[44px] font-medium">Top companies hiring now</h1>
      {/* company */}
      <div className="flex items-center  justify-evenly mt-10 ">
        <Image alt="" src={one} />
        <Image alt=""src={two} />
        <Image alt=""src={seven} />
        <Image alt=""src={four} />
        <Image alt=""src={five} />
        <Image alt=""src={six} />

        <Image alt="" src={three} />
      </div>
      <div className="flex items-center justify-evenly ">
        <Image alt="" src={eight} />
        <Image alt="" src={nine} />
        <Image alt="" src={twelve} />
        <Image alt="" src={thirteen} />
        <Image alt="" src={fourteen} />
        <Image alt="" src={ten} />
        <Image alt="" src={eleven} />
      </div>

      {/* company */}
      {/* card div */}
      <h1 className="font-medium text-[44px] mt-20">
        Grow your career through learning
      </h1>
      <p className="text-lg font-semibold text-[#4B4B4B] mt-3">
        By resource it learning
      </p>
      <div className="flex gap-4">
        <div className="mt-14">
          <div className="w-[387px] h-[327px] border border-[#BCD1C8] pl-8 pt-12">
            <p className="text-xs mb-2 font-normal">Data Science</p>
            <p className="text-md font-semibold mb-6">
              Artificial Intelligence
            </p>
            <p className="text-xs mb-2 font-normal w-[307px]">
              Learn in demand AI skills like Deep learning, NLP, Computer vision
              and more for career growth across different roles.Learn in demand
              AI skills like Deep learning, NLP, Computer vision and more for
              career growth across different roles.
            </p>
            <div className="flex gap-4 mt-6 text-xs font-normal">
              <p className="border border-prymary p-1.5">600 courses</p>
              <p className="border border-prymary p-1.5">28 providers</p>
            </div>
          </div>
        </div>
        {/* card div */}
        <div className="mt-14">
          <div className="w-[387px] h-[327px] border border-[#BCD1C8] pl-8 pt-12">
            <p className="text-xs mb-2 font-normal">Cloud Technologies </p>
            <p className="text-md font-semibold mb-6">AWS</p>
            <p className="text-xs mb-2 font-normal w-[307px]">
              Get certified for high demand cloud computing skills for Cloud
              Practitioner, Architect, Developer, and Operations roles. Get
              certified for high demand cloud computing skills for Cloud
              Practitioner, Architect, Developer, and Operations roles.
            </p>
            <div className="flex gap-4 mt-6 text-xs font-normal">
              <p className="border border-prymary p-1.5">600 courses</p>
              <p className="border border-prymary p-1.5">28 providers</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-14">
            <div className="w-[387px] h-[327px] border border-[#BCD1C8] pl-8 pt-12">
              <p className="text-xs mb-2 font-normal">Programming</p>
              <p className="text-md font-semibold mb-6">
                Data Structures & Algorithms
              </p>
              <p className="text-xs mb-2 font-normal w-[307px]">
                Master DS and Algorithms for entry level engineering roles in
                product companies and for competitive programming. Master DS and
                Algorithms for entry level engineering roles in product
                companies and for competitive programming.
              </p>
              <div className="flex gap-4 mt-6 text-xs font-normal">
                <p className="border border-prymary p-1.5">600 courses</p>
                <p className="border border-prymary p-1.5">28 providers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
