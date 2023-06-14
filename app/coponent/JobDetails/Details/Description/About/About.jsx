import Image from 'next/image';
import React from 'react'
import companyicon from "../../../../../assets/icon/company/three.png";
const About = () => {
  return (
    <div>
      <div className="mt-8 border border-[#7CA090] mt-1.5 pt-5 px-12">
        <p className="text-base font-medium">About Company</p>
        <div className="flex gap-4 items-center">
          {/* img */}
          <div className="border border-[#D8E3DE] w-72 h-24 flex items-center p-2 mt-6 mr-2  ">
            <Image src={companyicon} alt="" />
          </div>
          {/* info */}
          <div className="text-xs">
            <p className="text-[#6D6D6D] text-xs font-normal ">
              BRAC Bank is a private commercial bank in Bangladesh, operated by
              the BRAC development organisation, focused on Small and Medium
              Enterprises (SME). The bank has its head office in Dhaka,
              Bangladesh. Ahsan H. Mansur is the chairman of BRAC Bank and Selim
              R. F. Hussain the managing director.
            </p>
          </div>
        </div>
        <p className="text-[#6D6D6D] text-xs font-normal mt-8">
          BRAC Bank was founded on 4 July 2001 to reach the large number of
          unbanked people which were not covered by traditional bank.[3] The
          main concept of the bank was to facilitate Small and Medium
          Enterprises.[3] BRAC Bank was found by Fazle Hasan Abed, the founder
          of BRAC and BRAC University. In 2005, BRAC Bank established BRAC
          Afghanistan Bank in 2006 as a greenfield venture.[6][7][8]
        </p>
        <p className="text-[#6D6D6D] text-xs font-normal mt-8">
          In August 2009, BRAC Bank purchased 51 per cent of Equity Partners
          Limited and Equity Partners Securities Limited.[12] They are later
          renamed to BRAC EPL Stock Brokerage Limited and BRAC EPL Investments
          Limited.[13] BRAC Saajan Exchange Limited was established in 2011
          through the purchase of Saajan Worldwide Money Transfer Limited,
          established in 2009, in Great Britain.[14] BRAC Bank sponsored Wasfia
          Nazreen seven summit expedition.
        </p>
        <p className="text-[#6D6D6D] text-xs font-normal mt-8 pb-7">
          In August 2009, BRAC Bank purchased 51 per cent of Equity Partners
          Limited and Equity Partners Securities Limited.[12] They are later
          renamed to BRAC EPL Stock Brokerage Limited and BRAC EPL Investments
          Limited.[13] BRAC Saajan Exchange Limited was established in 2011
          through the purchase of Saajan Worldwide Money Transfer Limited,
          established in 2009, in Great Britain.[14] BRAC Bank sponsored Wasfia
          Nazreen seven summit expedition.
        </p>
      </div>
    </div>
  );
}

export default About