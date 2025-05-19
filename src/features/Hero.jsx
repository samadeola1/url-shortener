import React from 'react'
import illustration from "../assets/illustration-working.svg"

const Hero = () => {
  return (
    <>
      <main className="bg-[#FFFFFF]">
        <div className="bg-[#FFFFFF] py-20 px-4 md:px-20 lg:px-[130px] flex flex-col md:flex-row items-center md:items-start">
          {/* Image Section */}
          <div className="mb-8 md:mb-0 md:order-2 md:ml-12 flex justify-center md:flex-1">
            <img
              src={illustration}
              alt="Illustration"
              className="w-full  animate__animated animate__backInRight  max-w-[400px] md:max-w-[600px] lg:max-w-[1000px]"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left md:max-w-[50%]">
            <h1 className="text-[32px] animate__animated animate__backInLeft  md:text-[40px] lg:text-[58px] font-bold text-[#36343F] mb-4 leading-tight">
              More than just shorter links
            </h1>
            <p className="text-[#9C9BA2] mb-8 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="bg-[#2BD1D0] text-white px-6 py-3 rounded-full pointer-events-none cursor-default hover:bg-[#9DE1E2]">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;