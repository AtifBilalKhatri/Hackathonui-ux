import Circles from "@/components/commonContent/Circles";
import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <>
      {/* conatiner  */}
      <div className="px-10 lg:px-0 mx-auto max-w-[1124px] h-auto xl:h-[1778px] flex flex-col py-12 gap-12">
        {/* cards container 1 */}
        <div className="lg:max-w-[1048px] md:max-w-[950px] h-auto xl:h-[488px] flex flex-wrap justify-center gap-[30px]">
          {/* card 1 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product1.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 2 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product2.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 3 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product3.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 4 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product4.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
        {/* cards container 2  */}
        <div className="lg:max-w-[1048px] md:max-w-[950px] h-auto xl:h-[488px] flex flex-wrap justify-center gap-[30px]">
          {/* card 1 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product5.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 2 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product6.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 3 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product7.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 4 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product8.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
        {/* cards container 3  */}
        <div className="lg:max-w-[1048px] md:max-w-[950px] h-auto xl:h-[488px] flex flex-wrap justify-center gap-[30px]">
          {/* card 1 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product9.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 2 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product10.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 3 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product11.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
          {/* card 4 */}
          <div className="w-[238px] h-[488px]">
            <div className="relative">
              <Image
                src={"/Images/product12.jpeg"}
                alt="model"
                width={230}
                height={300}
                className="w-[239px] h-[300px]"
              />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 h-[188px]">
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
