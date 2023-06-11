import React from "react";
import Style from "./Hiring.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Hiring = () => {
  return (
    <div className="mt-28 py-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-[44px] font-medium mb-5">Hiring Made Easy</h1>
      <div className="flex gap-4">
        {/* 1st */}
        <div className="flex">
          {/* arrow */}
          <div className="flex items-center mr-3">
            <p className="w-52 box-border border-[#9DB1A9] border-2"></p>

            <div className="ml-[-13px]">
              <MdOutlineKeyboardArrowRight size={25} color="#9DB1A9" />
            </div>
          </div>
          {/* arrow */}
          <h1 className="text-prymary text-3xl border-2 border-prymary w-14 h-14 rounded-full flex items-center justify-center font-semibold">
            01
          </h1>
        </div>
        {/* 2st */}
        <div className="flex">
          {/* arrow */}
          <div className="flex items-center mr-3">
            <p className="w-64 box-border border-prymary border-2"></p>

            <div className="ml-[-13px]">
              <MdOutlineKeyboardArrowRight size={25} color="#2D6A4F" />
            </div>
          </div>
          {/* arrow */}
          <h1 className="text-prymary text-3xl border-2 border-prymary w-14 h-14 rounded-full flex items-center justify-center font-semibold">
            02
          </h1>
        </div>
        {/* 3st */}
        <div className="flex">
          {/* arrow */}
          <div className="flex items-center mr-3">
            <p className="w-64 box-border border-prymary border-2"></p>

            <div className="ml-[-13px]">
              <MdOutlineKeyboardArrowRight size={25} color="#2D6A4F" />
            </div>
          </div>
          {/* arrow */}
          <h1 className="text-prymary text-3xl border-2 border-prymary w-14 h-14 rounded-full flex items-center justify-center font-semibold">
            03
          </h1>
        </div>
        {/* 4st */}
        <div className="flex">
          {/* arrow */}
          <div className="flex items-center mr-3">
            <p className="w-52 box-border border-[#9DB1A9] border-2"></p>

            <div className="ml-[-13px]">
              <MdOutlineKeyboardArrowRight size={25} color="#9DB1A9" />
            </div>
          </div>
          {/* arrow */}
        </div>
      </div>
      {/* last */}

      <div className="mt-4 flex gap-20">
        <div>
          <h1 className="mb-2 font-semibold text-lg">
            Talk to One of Our Industry Experts
          </h1>
          <p className="text-sm font-normal">
            An expert on our team will work with you to <br />
            understand your goals, technical needs, and team dynamics.
          </p>
        </div>

        <div>
          <h1 className="mb-2 font-semibold text-lg">
            Work With Hand-Selected Talent
          </h1>
          <p className="text-sm font-normal">
            Within days, we'll introduce you to the right talent
            <br /> for your project. Average time to match is under 24 hours.
          </p>
        </div>

        <div>
          <h1 className="mb-2 font-semibold text-lg">
            The Right Fit, Guaranteed
          </h1>
          <p className="text-sm font-normal">
            Work with your new team member on a trial basis <br /> (pay only if
            satisfied), ensuring you hire the right people for the job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
