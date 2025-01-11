import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Cards from "./cards";

export default function Product() {
  return (
    <>
      <div className="mx-auto max-w-[1440px] h-auto md:h-[92px] flex justify-center items-center  mb-20">
        {/* container */}
        <div className="lg:max-w-[1036px] md:max-w-[950px] w-full h-[44px] flex flex-col lg:flex-row gap-8 justify-between items-center px-10 lg:px-5">
          <h3 className="text-2xl text-[#252B42] font-[700] ">Shop</h3>
          <div className="flex items-center gap-3 text-sm font-[700]">
            <Link href={"/"} className="text-[#252B42]">
              Home
            </Link>{" "}
            <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
            <Link href={"/products"} className="text-[#BDBDBD]">
              Shop
            </Link>
          </div>
        </div>
      </div>
      {/* container  */}
      <div className="mx-auto lg:max-w-[1088px] md:max-w-[950px] h-auto lg:h-[271px] ">
        {/* row */}
        <div className="px-10 lg:px-5 lg:max-w-[1088px] w-full h-auto lg:h-[231px] gap-4  flex flex-wrap justify-center lg:flex-nowrap">
          {/* cloth1 */}
          <div className="w-[240px] md:w-[205px] h-[280px] md:h-[223px] bg-[url('/Images/cloth1.png')]  bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>
          {/* cloth2 */}
          <div className="w-[240px] md:w-[205px] h-[280px] md:h-[223px] bg-[url('/Images/cloth2.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>{" "}
          {/* cloth3 */}
          <div className="w-[240px] md:w-[205px] h-[280px] md:h-[223px] bg-[url('/Images/cloth3.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>{" "}
          {/* cloth4 */}
          <div className="w-[240px] md:w-[205px] h-[280px] md:h-[223px] bg-[url('/Images/cloth4.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>{" "}
          {/* cloth5 */}
          <div className="w-[240px] md:w-[205px] h-[280px] md:h-[223px] bg-[url('/Images/cloth5.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h5 className="font-[700] text-[16px] text-white">Cloths</h5>
            <p className="text-sm text-white font-[400]">5 Items</p>
          </div>
        </div>
      </div>

      {/* showing results  */}
      <div className="mx-auto  lg:max-w-[1050px] w-full md:max-w-[950px] h-auto lg:h-[98px] my-20 lg:my-0">
        {/* container  */}
        <div className="px-10 lg:px-5 lg:max-w-[1050px] md:max-w-[950px] w-full h-auto lg:h-[50px] flex flex-wrap justify-between items-center  lg:flex-nowrap text-sm font-[700] text-[#737373] gap-3">
          <h6>Showing all 12 results</h6>
          <div className="w-[177px] h-[46px] flex items-center justify-between">
            <p>Views:</p>
            <i className="bi bi-microsoft"></i>

            <Image
              src="/Images/iconBar.png"
              alt="menu"
              width={16}
              height={16}
            />
          </div>
          <div className="w-full lg:w-[252px] h-[50px] flex items-center justify-between">
            <p className="flex items-center gap-2 font-[400]">
              Popularity <FaAngleRight className="text-[#BDBDBD] rotate-90" />{" "}
            </p>
            <button className="btn w-[94px] h-[50px] bg-[#23A6F0]">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* top companies  */}
      {/* company logos  */}
      <div className="mx-auto px-10 lg:px-5 lg:max-w-[1050px] md:max-w-[950px] w-full h-auto lg:h-[174px] flex flex-wrap lg:flex-nowrap  justify-around gap-[50px] items-center mb-20 lg:mb-0 ">
        <div className="relative">
          <Image
            src="/Images/logo1.png"
            alt="Company Logo"
            width={103}
            height={34}
            className="object-cover "
          />
        </div>
        <Image
          src="/Images/logo2.png"
          alt="Company Logo"
          width={83}
          height={58}
        />
        <Image
          src="/Images/logo3.png"
          alt="Company Logo"
          width={102}
          height={74}
        />
        <Image
          src="/Images/logo4.png"
          alt="Company Logo"
          width={103}
          height={42}
        />
        <Image
          src="/Images/logo5.png"
          alt="Company Logo"
          width={104}
          height={62}
        />
        <Image
          src="/Images/logo6.png"
          alt="Company Logo"
          width={104}
          height={74}
        />
      </div>
      <Cards />
    </>
  );
}
