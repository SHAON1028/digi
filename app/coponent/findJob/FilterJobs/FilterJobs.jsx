"use client";
import React from "react";
import Image from "next/image";
import srchicon from "../../../assets/icon/searchicon.png";
import { Slider } from "@mui/material";
import DiscreteSliderLabel from "../../rangeSlider/RangeSlider";
const FilterJobs = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium mt-5">Top Jobs</h1>

      {/* filter box */}
      <div className="p-6 border border-[#7CA090] mt-6 text-xs">
        <p className="font-medium">Filter By</p>
        <div className="border-b border-[#D9D9D9] my-2.5"></div>
        <p className="font-medium">Work mode</p>
        {/* work mode */}
        <div class=" mb-4 mt-2.5">
          <div className="mb-1.5 flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
            />
            <label
              for="default-radio-1"
              class="ml-2  font-normal text-gray-900 dark:text-gray-300"
            >
              Work from office(3447)
            </label>
          </div>
          <div className="mb-1.5 flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
            />
            <label
              for="default-radio-1"
              class="ml-2  font-normal text-gray-900 dark:text-gray-300"
            >
              Temp. WFH due to covid(78)
            </label>
          </div>
          <div className="mb-1.5 flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
            />
            <label
              for="default-radio-1"
              class="ml-2  font-normal text-gray-900 dark:text-gray-300"
            >
              Hybrid(61)
            </label>
          </div>
          <div className="mb-1.5 flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
            />
            <label
              for="default-radio-1"
              class="ml-2  font-normal text-gray-900 dark:text-gray-300"
            >
              Permanent Remote / WFH(19)
            </label>
          </div>
        </div>
        {/* work mode */}
        <div className="border-b border-[#D9D9D9] my-3.5"></div>
        <p className="font-medium">Experience</p>
        <fieldset className="space-y-1 sm:w-60 dark:text-gray-100">
          <input
            type="range"
            className="w-full accent-[#006A44] h-2"
            min="1"
            max="10"
          />
          <div aria-hidden="true" className="flex justify-between px-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
        </fieldset>

        {/* Salary */}

        <div>
          <p className="font-medium mt-5">Salary</p>
          <div className="border-b border-[#D9D9D9] my-3.5"></div>
          <div class=" mb-4 mt-2.5">
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                6-10 Lakhs(16)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                3-6 Lakhs(40)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                0-3 Lakhs(44)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                10-15 Lakhs(5)
              </label>
            </div>
          </div>
        </div>
        {/* Salary */}
        {/* Role category */}
        <div>
          <p className="font-medium mt-5">Role Category</p>
          <div className="border-b border-[#D9D9D9] my-3.5"></div>
          <div class=" mb-4 mt-2.5">
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Software Development(10)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                BD / Pre Sales(9)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Retail & B2C Sales(7)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Back Office(4)
              </label>
            </div>
          </div>
        </div>
        {/* role category */}

        {/* input field */}
        <p className="font-medium mt-5">Location</p>
        <div className="border border-[#BCD1C8] h-[38px] my-3 flex items-center gap-2">
          <Image className="ml-2.5" src={srchicon} />
          <input
            className="border-none bg-[#F5F5F5] outline-none"
            type="text"
            placeholder="Search Your Location"
          />
        </div>
        {/*  */}

        {/* education */}
        <div>
          <p className="font-medium mt-5">Education</p>
          <div className="border-b border-[#D9D9D9] my-3.5"></div>
          <div class=" mb-4 mt-2.5">
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Any Graduate(36)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                MBA/PGDM(4)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                Other Graduate(1)
              </label>
            </div>
            <div className="mb-1.5 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-3.5 h-3.5 text-[#545454] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none accent-[#006A44]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-normal text-gray-900 dark:text-gray-300"
              >
                B.Tech/B.E.(3)
              </label>
            </div>
          </div>
        </div>
        {/* radio btn */}
      </div>
    </div>
  );
};

export default FilterJobs;
