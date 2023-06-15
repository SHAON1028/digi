import React from 'react'
import Image from 'next/image';
import rcrt from "../../assets/icon/icon2/re.png"
import tal from '../../assets/icon/icon2/talent.png'
import Link from 'next/link';
const Register = ({ setCloseModal }) => {
  const handleCloseModal = () => {
    setCloseModal(false);
  };
  return (
    <div>
      <div className="pt-16 pl-[103px]">
        <p className="text-base font-medium  mb-6">Registration</p>
        <Link href="/pages/registration" onClick={() => handleCloseModal()}>
          <div className="border border-[#97B5A8] w-[383px] h-[102px] flex items-center justify-evenly gap-4 px-5">
            <Image src={rcrt} alt="" />
            <div className="">
              <p className="text-semi-bold mb-1 font-semibold ">
                Registration as Recruiters
              </p>
              <p className="text-xs  text-[##888888] bp-6">
                Startup-ready candidates, with all the information you need to
                vet them
              </p>
            </div>
          </div>
        </Link>
        <Link href="pages/registration">
          <div className="border border-[#97B5A8] w-[383px] h-[102px] flex items-center justify-evenly gap-4 px-5 mt-6">
            <Image src={tal} alt="" />
            <div className="">
              <p className="text-semi-bold mb-1 font-semibold ">
                Registration as Talents
              </p>
              <p className="text-xs  text-[##888888] bp-6">
                Unique jobs at startups and tech companies you can't find
                anywhere else
              </p>
            </div>
          </div>
        </Link>
        <p className="mt-6 text-xs">
          By clicking Register, you agree to the{" "}
          <span className="text-[#006A44]">
            Terms and Conditions &<br /> Privacy Policy
          </span>{" "}
          of resourceit.com
        </p>
      </div>
    </div>
  );
};

export default Register