// import React from 'react'

// "use client"
import img1 from "../../../assets/image/heroImg.png";
import Image from "next/image";
import srcIcon from "../../../assets/icon/searchicon.png";
import saveChildren from "../../../assets/icon/saveChildren.png";
import metlife from "../../../assets/icon/metlife.png";
import eastern from "../../../assets/icon/eastern.png";
import bankasia from "../../../assets/icon/bankasia.png";
const HeroSection = () => {
  return (
    <div className="py-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="lg:grid grid-cols-2 gap-[70px]">
        {/* left */}
        <div className="col-span-1">
          <p className="w-[537px] font-semibold text-5xl leading-[61px] mt-[87px]">
            This is how good companies find good company.
          </p>

          {/* search box */}
          <div className="mt-[51px] mb-[41px] w-[577px] h-[60px] bg-[#FFFFFF] flex  ">
            <div className="flex items-center ml-[19px] gap-6">
              <Image src={srcIcon} alt="" />
              <div className=" border-r-2 border-[#D9D9D9]">
                <input
                  className="w-[180px]  outline-none"
                  type="text"
                  placeholder="Search Talent/ Jobs"
                />
              </div>
              <div>
                {/* <label for="countries_disabled" class=" text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                <select class="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-dark  dark:placeholder-gray-900  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[#878787]">
                  <option selected>Select For Talents </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <button className="bg-prymary text-lg text-white px-6 py-3 my-1 mr-2.5 ml-[30px]">
              Search
            </button>
          </div>
          {/* search box */}

          {/* popular */}

          <div className="lg:flex items-center gap-[11px]">
            <p className="text-sm font-normal">Popular:</p>
            <button className="text-xs font-normal text-[#504D4D]  border border-[#6A867A] py-2 px-5 ">
              Development
            </button>
            <button className="text-xs font-normal text-[#504D4D]  border border-[#6A867A] py-2 px-6  ">
              AI Services
            </button>
            <button className="text-xs font-normal text-[#504D4D]  border border-[#6A867A] py-2 px-2">
              Sales & Marketing
            </button>
            <button className="text-xs font-normal text-[#504D4D]  border border-[#6A867A] py-2 px-2">
              Customer Support
            </button>
          </div>
          {/* popular */}

          {/* trusted */}
          <div className="mt-10 flex items-center">
            <p className="font-normal text-sm text-[#707070] mr-6">
              Trusted by :
            </p>
            <div className="flex gap-5 items-center">
              <Image src={saveChildren} alt="" />
              <Image src={metlife} alt="" />
              <Image src={bankasia} alt="" />
              <Image src={eastern} alt="" />
            </div>
          </div>
          {/* trusted */}
        </div>
        {/* right */}

        <Image
          src={img1}
          width={585}
          height={508}
          className="mt-14"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default HeroSection;
