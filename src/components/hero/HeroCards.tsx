import React from "react";
import Image from "next/image";
import Circles from "../commonContent/Circles";

export default function HeroCards() {
  return (
    <>
      {/* container  */}
      <div className="md:mx-auto py-40 lg:py-0 px-10 lg:px-0 w-full h-auto lg:h-[1652px] md:max-w-[1124px] flex flex-col items-center justify-between sm:gap-20 md:gap-48 lg:gap-0  ">
        {/* heading and para  */}

        <div className="w-[300px] md:w-full flex flex-col items-center text-center gap-4 mb-14">
          <h4 className="text-xl text-[#737373] font-[400]">
            Featured Products
          </h4>
          <h3 className="text-2xl text-[#252B42] font-[700]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373] text-sm ">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* cards section */}

        {/* cards-container-1  */}
        <div className=" lg:px-10 xl:px-0 flex flex-wrap gap-0 md:gap-48 justify-center  lg:gap-10 lg:flex-nowrap  w-full md:max-w-[950px] lg:max-w-[1050px] h-auto lg:h-[615px] ">
          {/* card-1  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[240px] h-auto md:h-[427px] rounded-md  transition hover:scale-105 ">
            <div className="relative">
              <Image
                src="/Images/hero6.jpg"
                alt=""
                width={239}
                height={427}
                className="w-[350px] md:w-[240px] h-[427px] lg:h-auto object-cover"
              />
            </div>

            <div className="flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
          {/* card-2  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[239px] h-auto md:h-[427px] rounded-md  transition hover:scale-105">
            <div className="relative">
              <Image
                src="/Images/hero7.jpeg"
                alt=""
                width={239}
                height={427}
                className="w-[350px] md:w-[240px] h-[427px] lg:h-auto object-cover"
              />
            </div>
            <div className=" flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
          {/* card-3  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[239px] h-auto md:h-[427px] rounded-md  transition hover:scale-105">
            <div className="relative">
              <Image
                src="/Images/hero8.jpg"
                alt=""
                width={239}
                height={427}
                className="w-[350px] md:w-[240px] h-[427px] lg:h-auto object-cover"
              />
            </div>
            <div className=" flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
          {/* card-4  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[239px] h-auto md:h-[427px] rounded-md  transition hover:scale-105">
            <div className="relative">
              <Image
                src="/Images/hero9.jpg"
                alt=""
                width={239}
                height={427}
                className="w-[350px] md:w-[240px] h-[427px] lg:h-auto object-cover"
              />
            </div>
            <div className=" flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
        </div>

        {/* cards-container-2  */}
        <div className="lg:px-10 xl:px-0 flex flex-wrap gap-0 md:gap-48 justify-center lg:gap-10 lg:flex-nowrap  w-full md:max-w-[950px] lg:max-w-[1050px] h-auto lg:h-[615px] ">
          {/* card-5  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[240px] h-auto md:h-[427px]  rounded-md  transition hover:scale-105">
            <Image
              src="/Images/hero10.jpg"
              alt=""
              width={239}
              height={427}
              className="w-[350px] md:w-[240px] "
            />
            <div className="flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
          {/* card-6  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[240px] h-auto md:h-[427px]  rounded-md  transition hover:scale-105">
            <Image
              src="/Images/hero11.jpg"
              alt=""
              width={239}
              height={427}
              className="w-[350px] md:w-[240px] "
            />
            <div className=" flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
          {/* card-7  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[240px] h-auto md:h-[427px]  rounded-md  transition hover:scale-105">
            <Image
              src="/Images/hero12.jpg"
              alt=""
              width={239}
              height={427}
              className="w-[350px] md:w-[240px] "
            />
            <div className=" flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
          {/* card-8  */}
          <div className="flex flex-col gap-4 w-[350px] md:w-[240px] h-auto md:h-[427px]  rounded-md  transition hover:scale-105">
            <Image
              src="/Images/hero13.jpg"
              alt=""
              width={239}
              height={427}
              className="w-[350px] md:w-[240px] "
            />
            <div className=" flex flex-col items-center gap-4 h-[190px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
              <Circles />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
