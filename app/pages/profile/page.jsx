import Profile from "@/app/coponent/userDetails/profile/Profile";
import React from "react";
import Image from "next/image";
import edit from "../../assets/icon/edit.png";
import tree from "../../assets/icon/tree.png";
import fb from "../../assets/icon/fb.png";
import twitter from "../../assets/icon/twitter.png";
import web from "../../assets/icon/web.png";
import linkedin from "../../assets/icon/linkedin.png";
import match from "../../assets/icon/icon2/match.png"
import { Chartskill } from "@/app/coponent/chart/Chartskill";

const ProfilePage = () => {
  return (
    <div className="lg:flex  py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 gap-6 ">
      {/* left side */}
      <div className="w-3/10 mt-[122px] ">
        <Profile></Profile>
        {/* chart */}
        <div className="border border-[#7CA090] pr-2 w-[336px] mt-5">
          <div className="flex justify-end">
            <button className="flex pt-2 items-center gap-1">
              <Image className="h-4 w-4" src={edit} alt="" />
              <p>Edit</p>
            </button>
          </div>
          <p className="text-[#006A44] text-xs font-medium pl-8">
            Key Skills Match
          </p>
          <div className=" flex justify-center items-center">
            <div className="w-[200px] pb-5">
              <Chartskill></Chartskill>
            </div>
          </div>
        </div>
        {/* cahrt */}
        {/* certification */}
        <div className="border border-[#7CA090] pr-2 w-[336px] mt-5 pl-9 pb-5">
          <div className="flex justify-between items-center ">
            <p className="#006A44 text-xs font-medium">Certifications</p>
            <button className="flex pt-2 items-center gap-1">
              <Image className="h-4 w-4" src={edit} alt="" />
              <p>Edit</p>
            </button>
          </div>

          <div>
            <div className="mt-4">
              <div className="flex gap-2">
                <Image src={tree} alt="" />
                <h1 className="text-xs font-normal">
                  Agile Methods for UX Design
                </h1>
              </div>
              <div className="pl-7">
                <p className="text-[9px] text-[#6D6D6D]">
                  Interaction Design Foundation (IxDF) <br /> Issued Jan 2023{" "}
                  <br />
                  Credential ID 137265
                </p>
                <button className="border border-[#006A44] text-[#006A44] text-[10px] font-normal px-7 py-1.5 mt-1.5">
                  Show credential
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-2">
                <Image src={tree} alt="" />
                <h1 className="text-xs font-normal">
                  Agile Methods for UX Design
                </h1>
              </div>
              <div className="pl-7">
                <p className="text-[9px] text-[#6D6D6D]">
                  Interaction Design Foundation (IxDF) <br /> Issued Jan 2023{" "}
                  <br />
                  Credential ID 137265
                </p>
                <button className="border border-[#006A44] text-[#006A44] text-[10px] font-normal px-7 py-1.5 mt-1.5">
                  Show credential
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* certification */}

        {/* profile summery */}
        <div className="border border-[#7CA090] pr-2 w-[336px] mt-5 pl-9 pb-5">
          <div className="flex justify-between items-center ">
            <p className="#006A44 text-xs font-medium">Profile Summary</p>
            <button className="flex pt-2 items-center gap-1">
              <Image className="h-4 w-4" src={edit} alt="" />
              <p>Edit</p>
            </button>
          </div>
          <div className="mt-5 text-xs font-normal">
            {/* web */}
            <div className="phn flex items-center gap-4">
              <Image className="" src={web} alt="" />
              <p>www.souravaich.com</p>
            </div>
            {/* web */}
            {/* fb */}
            <div className="phn flex items-center gap-4 mt-3">
              <Image className="" src={fb} alt="" />
              <p>www.facebook.com/souravaich</p>
            </div>
            {/* fb */}
            {/* twitter */}
            <div className="phn flex items-center gap-4 mt-3">
              <Image className="" src={twitter} alt="" color="#006A44" />
              <p>www.twitter.com/aichsourav</p>
            </div>
            {/* twitter */}
            {/* linkedin */}
            <div className="phn flex items-center gap-4 mt-3">
              <Image className="" src={linkedin} alt="" color="#006A44" />
              <p>www.linkdin.com/souravaich</p>
            </div>
          </div>
        </div>
        {/* profile summery */}
        {/* fastforward */}
        <div className="border border-[#7CA090] pr-2 w-[336px] mt-5 pl-9 pb-5">
          <div class=" mt-5 ">
            <div className=" w-64 ">
              <p className="text-xl font-bold tracking-wide">
                resource <span className="text-[#006A44]">it</span>
              </p>
              <p className="italic font-bold text-xl text-[#006A44] mb-2">
                FASTFORWARD
              </p>
              <p className="text-[#878787] text-xs font-normal py-1">
                Not getting enough profile views?
              </p>
              <p className="text-sm font-semibold pr-0.5 text-[#006A44] pb-3 mb-2">
                Get a Featured Profile & increase your visibility to recruiters
                up to 3 times
              </p>
            </div>
          </div>
        </div>
        {/* fastforward */}
      </div>
      {/* -------------------------------------------------------------------------------------------- */}
      <div className="w-7/10">
        <h1 className="text-3xl font-medium mt-12">Profile Details</h1>
        <p className="text-xs font-medium text-[#7B7B7B] mb-2">
          5 lakh+ Talents for you to explore
        </p>
        {/* profile details card */}
        <div className="border border-[#7CA090] lg:w-[832px] mt-5 py-4 px-6  gap-4 ">
          <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3">
            Objective
          </h2>
          <p className="text-xs text-[#5A5A5A] pl-3.5 mt-1">
            To obtain a challenging position in a high quality engineering
            environment where my efforts, energy, potential and academic skills
            will add value to organizational operations. engineering environment
            where my efforts, energy, potential and academic skills will add
            value to organizational operations.
          </p>
          <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3 mt-5">
            Key Skills
          </h2>
          <div className="ml-2 mt-0.5 flex flex-wrap ">
            {[...Array(10)].map((item, id) => {
              return (
                <div key={id} className="flex items-center">
                  <Image src={match} alt="" />
                  <p className="text-[8px] bg-[#EDF7F2] p-1.5 mr-2">
                    Salesforce
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-[#878787] text-xs ml-2 font-normal mt-3">
            Your profile is missing the skills required for this job. Take these
            courses to increase your chances of getting hired.
          </p>
          <div className="mt-3.5 mb-6 text-xs ml-2 font-medium flex gap-4">
            <p className="text-[#878787] text-xs ml-2 font-medium">
              Job Category{" "}
            </p>
            <p>Bank</p>
            <p>Finance </p>
            <p>IT</p>
          </div>
        </div>
        {/*  profile details card */}

        {/* Employment History */}
        <h1 className="text-3xl font-medium my-5">Employment History</h1>
        <div className="border border-[#7CA090] lg:w-[832px]  py-4 px-6  gap-4 ">
          {/* 1 */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3">
                Experience 1
              </h2>
              <p className="text-white bg-[#006A44] text-[10px] p-1.5">
                Present Salary ৳ 1,10,000
              </p>
            </div>
            <div className="text-xs font-medium flex justify-between mt-2 ml-1">
              <div>
                <p>Company Name</p>
                <p className="text-[#717171] mt-1.5">ABVCG group</p>
              </div>
              <div>
                <p>Company Business</p>
                <p className="text-[#717171] mt-1.5">Software Company</p>
              </div>
              <div>
                <p>Designation</p>
                <p className="text-[#717171] mt-1.5">Lead UI/UX Designer</p>
              </div>
              <div>
                <p>Employment Period</p>
                <p className="text-[#717171] mt-1.5">
                  11/12/2020 to 11/12/2022
                </p>
              </div>
            </div>
            <div className="flex justify-between text-xs ml-1 mt-2">
              <div>
                <p>Company Name</p>
                <p className="text-[#717171] mt-1.5">ABVCG group</p>
              </div>
              <div>
                <p>Company Business</p>
                <p className="text-[#717171] mt-1.5">Software Company</p>
              </div>
            </div>
            <p className="text-xs py-1.5">Responsibilities</p>
            <p className="text-xs text-[#717171]">
              Your profile is missing the skills required for this job. Take
              these courses to increase your chances of getting hired. Your
              profile is missing the skills required for this job. Take these
              courses to increase your chances of getting hired.
            </p>
          </div>
          {/* 2 */}
          <div>
            <div className="flex justify-between items-center mt-10">
              <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3">
                Experience 1
              </h2>
              <p className="text-white bg-[#006A44] text-[10px] p-1.5">
                Present Salary ৳ 1,10,000
              </p>
            </div>
            <div className="text-xs font-medium flex justify-between mt-2 ml-1">
              <div>
                <p>Company Name</p>
                <p className="text-[#717171] mt-1.5">ABVCG group</p>
              </div>
              <div>
                <p>Company Business</p>
                <p className="text-[#717171] mt-1.5">Software Company</p>
              </div>
              <div>
                <p>Designation</p>
                <p className="text-[#717171] mt-1.5">Lead UI/UX Designer</p>
              </div>
              <div>
                <p>Employment Period</p>
                <p className="text-[#717171] mt-1.5">
                  11/12/2020 to 11/12/2022
                </p>
              </div>
            </div>
            <div className="flex justify-between text-xs ml-1 mt-2">
              <div>
                <p>Company Name</p>
                <p className="text-[#717171] mt-1.5">ABVCG group</p>
              </div>
              <div>
                <p>Company Business</p>
                <p className="text-[#717171] mt-1.5">Software Company</p>
              </div>
            </div>
            <p className="text-xs py-1.5">Responsibilities</p>
            <p className="text-xs text-[#717171]">
              Your profile is missing the skills required for this job. Take
              these courses to increase your chances of getting hired. Your
              profile is missing the skills required for this job. Take these
              courses to increase your chances of getting hired.
            </p>
          </div>
          {/* 3 */}
          <div>
            <div className="flex justify-between items-center mt-10">
              <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3">
                Experience 1
              </h2>
              <p className="text-white bg-[#006A44] text-[10px] p-1.5">
                Present Salary ৳ 1,10,000
              </p>
            </div>
            <div className="text-xs font-medium flex justify-between mt-2 ml-1">
              <div>
                <p>Company Name</p>
                <p className="text-[#717171] mt-1.5">ABVCG group</p>
              </div>
              <div>
                <p>Company Business</p>
                <p className="text-[#717171] mt-1.5">Software Company</p>
              </div>
              <div>
                <p>Designation</p>
                <p className="text-[#717171] mt-1.5">Lead UI/UX Designer</p>
              </div>
              <div>
                <p>Employment Period</p>
                <p className="text-[#717171] mt-1.5">
                  11/12/2020 to 11/12/2022
                </p>
              </div>
            </div>
            <div className="flex justify-between text-xs ml-1 mt-2">
              <div>
                <p>Company Name</p>
                <p className="text-[#717171] mt-1.5">ABVCG group</p>
              </div>
              <div>
                <p>Company Business</p>
                <p className="text-[#717171] mt-1.5">Software Company</p>
              </div>
            </div>
            <p className="text-xs py-1.5">Responsibilities</p>
            <p className="text-xs text-[#717171]">
              Your profile is missing the skills required for this job. Take
              these courses to increase your chances of getting hired. Your
              profile is missing the skills required for this job. Take these
              courses to increase your chances of getting hired.
            </p>
          </div>
        </div>
        {/* Employment History */}

        {/* Education */}
        <h1 className="text-3xl font-medium my-5">Education</h1>
        <div className="border border-[#7CA090] lg:w-[832px]  py-4 px-6  gap-4 ">
          <div className="bsc mb-3.5">
            <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3 ">
              BSc
            </h2>
            <div className="text-xs font-medium grid grid-cols-3 gap-2  mt-2 ml-2">
              <div>
                <p>Exam Title</p>
                <p className="text-[#717171] mt-1.5">
                  BSc in Computer Science <br /> & Engineering
                </p>
              </div>
              <div>
                <p>Major</p>
                <p className="text-[#717171] mt-1.5">
                  Computer Science & Engineering
                </p>
              </div>
              <div>
                <p>Institute</p>
                <p className="text-[#717171] mt-1.5">
                  International University of Business <br /> Agriculture and
                  Technology
                </p>
              </div>
              <div>
                <p>Result</p>
                <p className="text-[#717171] mt-1.5">3.10 out 4.00</p>
              </div>
              <div>
                <p>Pas.Year</p>
                <p className="text-[#717171] mt-1.5">11/12/2015</p>
              </div>
              <div>
                <p>Duration</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
            </div>
          </div>
          <div className="hsc mb-3.5">
            <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3">
              HSC
            </h2>
            <div className="text-xs font-medium grid grid-cols-3 gap-2  mt-2 ml-2">
              <div>
                <p>Exam Title</p>
                <p className="text-[#717171] mt-1.5">
                  BSc in Computer Science <br /> & Engineering
                </p>
              </div>
              <div>
                <p>Major</p>
                <p className="text-[#717171] mt-1.5">
                  Computer Science & Engineering
                </p>
              </div>
              <div>
                <p>Institute</p>
                <p className="text-[#717171] mt-1.5">
                  International University of Business <br /> Agriculture and
                  Technology
                </p>
              </div>
              <div>
                <p>Result</p>
                <p className="text-[#717171] mt-1.5">3.10 out 4.00</p>
              </div>
              <div>
                <p>Pas.Year</p>
                <p className="text-[#717171] mt-1.5">11/12/2015</p>
              </div>
              <div>
                <p>Duration</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
            </div>
          </div>
          <div className="ssc mb-3.5">
            <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3">
              SSC
            </h2>
            <div className="text-xs font-medium grid grid-cols-3 gap-2  mt-2 ml-2">
              <div>
                <p>Exam Title</p>
                <p className="text-[#717171] mt-1.5">
                  BSc in Computer Science <br /> & Engineering
                </p>
              </div>
              <div>
                <p>Major</p>
                <p className="text-[#717171] mt-1.5">
                  Computer Science & Engineering
                </p>
              </div>
              <div>
                <p>Institute</p>
                <p className="text-[#717171] mt-1.5">
                  International University of Business <br /> Agriculture and
                  Technology
                </p>
              </div>
              <div>
                <p>Result</p>
                <p className="text-[#717171] mt-1.5">3.10 out 4.00</p>
              </div>
              <div>
                <p>Pas.Year</p>
                <p className="text-[#717171] mt-1.5">11/12/2015</p>
              </div>
              <div>
                <p>Duration</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
            </div>
          </div>
        </div>
        {/* Education */}

        {/* personal details */}
        <h1 className="text-3xl font-medium my-5">Personals Details</h1>
        <div className="border border-[#7CA090] lg:w-[832px]  py-4 px-6  gap-4 ">
          <div className="bsc mb-3.5 ">
            <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3 ">
              Personals Info
            </h2>
            <div className="text-xs font-medium grid grid-cols-3 gap-3  mt-2 ml-3">
              <div>
                <p>Name</p>
                <p className="text-[#717171] mt-1.5">
                  BSc in Computer Science <br /> & Engineering
                </p>
              </div>
              <div>
                <p>Father's Name</p>
                <p className="text-[#717171] mt-1.5">
                  Computer Science & Engineering
                </p>
              </div>
              <div>
                <p>Mother's Name</p>
                <p className="text-[#717171] mt-1.5">
                  International University of Business <br /> Agriculture and
                  Technology
                </p>
              </div>
              <div>
                <p>Date of Birth</p>
                <p className="text-[#717171] mt-1.5">3.10 out 4.00</p>
              </div>
              <div>
                <p>Gender</p>
                <p className="text-[#717171] mt-1.5">11/12/2015</p>
              </div>
              <div>
                <p>Religion</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>National Id</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Passport Number</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Primary Mobile</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Secondary Mobile</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Emergency Contact</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Alternate Email</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Blood Group</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Weight (kg)</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
              <div>
                <p>Passport Number</p>
                <p className="text-[#717171] mt-1.5">04 Years</p>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#006A44] text-xs font-medium border-l-2 border-[#006A44] pl-3 mb-1">
              Address Info
            </h2>
            <div className=" text-xs font-medium ml-3">
              <p>Present Address</p>
              <p className="text-[#717171] font-normal">
                Road#19,House#37,Sector#13,Uttara, Uttara West, Dhaka
              </p>
              <p className="mt-1">Present Address</p>
              <p className="text-[#717171] font-normal">
                Road#19,House#37,Sector#13,Uttara, Uttara West, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* personal details */}
      </div>
    </div>
  );
};

export default ProfilePage;
