import React from 'react'
import bgImage from "../../../assets/image/bgimg.png"
import Style from "./Count.module.css"
const Count = () => {
  return (
    <div className="mt-28 py-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex  justify-between ">
        <div>
          <h1 className="text-5xl font-semibold">3 million</h1>
          <p className="font-medium text-lg mt-3">
            Rated Talents Covering <br /> 8,766 skills
          </p>
        </div>
        <div className="border-r-4 border-[#C2E4D5] h-[151px]"></div>
        <div>
          <h1 className="text-5xl font-semibold">$ 150 million</h1>
          <p className="font-medium text-lg mt-3">
            Earned by Talents <br /> with top Talents earning
          </p>
        </div>
        <div className="border-r-4 border-[#C2E4D5] h-[151px]"></div>
        <div>
          <h1 className="text-5xl font-semibold">10 minutes</h1>
          <p className="font-medium text-lg mt-3">
            To task a freelancer, with 90% of <br /> projects completed in 7
            days
          </p>
        </div>
      </div>
      {/* img solutoin */}
      <div className="mt-20 ">
        <div className={Style.show_bg_2}>
          <div>
            <div className="mt-44 ml-24 text-white">
              <h1 className="text-7xl font-bold">
                A business <br /> solution for teams
              </h1>
              <div className="text-4xl  mt-6">
                <p className={Style.txt}>
                  Work with the largest network of independent 
                  professionals and get things done—from quick 
                  turnarounds to big transformations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count