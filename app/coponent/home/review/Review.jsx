import React from 'react'
import Image from 'next/image';
import rimg from "../../../assets/image/review.png"

const Review = () => {

    const d = new Date();
    console.log()
  return (
    <div className="mt-28 py-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="font-medium text-[44px]">Talents Review</h1>
      <div  >
        {/* review */}
        <div className="height- [721px] mt-12 grid grid-cols-3 gap-3">
          {/* review card */}
          {[...Array(9)].map((item, key) => {
            return (
              <div
                key={key}
                className="w-96 h-44 bg-[#F2F7F5] border rounded-lg p-4"
              >
                {/* profile */}
                <div>
                  <div className="flex gap-2">
                    <Image alt='' src={rimg} height={40} width={40} />
                    <div>
                      <p className="text-sm font-bold text-prymary">
                        Darin Nguyen
                      </p>
                      <p className="text-sm font-normal ">@staking</p>
                    </div>
                  </div>
                  <p className="py-3 text-lg font-normal">
                    Faucibus eu condimentum maecenas sollicitudin vitae.
                  </p>

                  <div className="flex justify-between">
                    <p className="underline font-normal text-sm text-[#3C3C43]">
                      show original
                    </p>
                    <p className=" font-normal text-sm text-[#3C3C43]">
                      {" "}
                      {d.toLocaleString().slice(0, 7)}
                    </p>
                  </div>
                </div>
                {/* cmnt */}
                <div></div>
                {/* date */}
                <div></div>
              </div>
            );
          })}
          {/* review card */}
        </div>
        {/* button */}
        <div className="flex items-center justify-center mt-4">
          <button className="text-prymary border-2 border-prymary px-16 py-2 text-base font-bold">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review