import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import aipic from "../assets/ai-assistant-img.webp";
import analytics from "../assets/simple-analytics-img.webp";
import collab from "../assets/easy-collaboration-img.webp";
import automation from "../assets/smart-automation-img.webp";

const Pricing = () => {

    const [active, setActive] = useState("monthly");
    
  
  
   

  return (
    <div className="mb-[300px]">
      {/* text header top part */}
      <div className="text-center mb-[80px] max-w-[720px] mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 items-center gap-[5px] border border-teal-400/60 w-[100px] rounded-full px-[5px] py-[3px] bg-teal-400/10 text-teal-400">
        <svg 
        stroke="currentColor" 
        fill="none" 
        stroke-width="2" 
        viewBox="0 0 24 24" 
        aria-hidden="true" 
        height="16px" 
        width="16px" 
        xmlns="http://www.w3.org/2000/svg" 
        ><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Pricing</span>
        </div>
        <h3 className="text-5xl font-bold mb-4 tracking-wider text-white">
        Supercharge your growth
        </h3>
        <p className="text-gray-400 text-[18px] px-2.5 max-w-[790px]">
        Whether you're a small startup, a growing mid-sized business, or a large enterprise, we have plans tailored to your specific demands.
        </p>
      </div>

      {/* double button container*/}
      <div className="max-w-[198px] mb-[80px] mx-auto bg-[#171923] border border-[#2D3748] rounded-[32px] p-1 flex flex-wrap items-center justify-center gap-2 ">
          <div onClick={() => setActive("monthly")} className={`flex gap-2 items-center justify-center w-[90px] h-[40px] rounded-[32px] px-4 py-2 cursor-pointer transition-all duration-300 ${active === "monthly" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
            <h4>Monthly</h4>
          </div>

          <div onClick={() => setActive("yearly")} className={`flex gap-2 items-center justify-center w-[90px] h-[40px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "yearly" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
            <h4>Yearly</h4>
          </div>

        </div>

        {/* pricing plan card container */}
        <div className="max-w-[1215px] mx-auto grid grid-cols-3 gap-8 px-5 pricingCard1000px">
            {/* first card */}
            <div className="max-w-[370px]  text-white px-[37px] pt-[72px] bg-[#171923] border border-[#2D3748]/80 rounded-3xl">
                <h3 className="text-3xl text-center">Starter</h3>

                <p className="text-[#718096] mt-5 max-w-[295px]">For driven individuals who want to start with essential features and resources to kickstart your journey.</p>

                <div className="py-[70px] border-b border-gray-400/20">
                <h3 className="text-4xl font-semibold  text-center">${active === "monthly" ? "9" : "90"}<span className="text-gray-500 text-[16px]">/month</span></h3>

                {/* this part will bw showed when monthly button clicked */}
                {active === "yearly" && (
                <p className="text-teal-500 text-center mt-2.5">Save 8% with annual billing</p>)}
                </div>

                <ul className="my-[40px]">
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                </ul>

                <div className="flex justify-center items-center">
                  <button className="mb-[40px] text-white bg-[#171923] w-full rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Get started
                  </button>
                </div>
            </div>
            {/* second card */}
            <div className="max-w-[370px]  text-white px-[37px] pt-[72px] bg-[#171923] border border-[#2D3748]/80 rounded-3xl">
                <h3 className="text-3xl text-center">Starter</h3>

                <p className="text-[#718096] mt-5 max-w-[295px]">For driven individuals who want to start with essential features and resources to kickstart your journey.</p>

                <div className="py-[70px] border-b border-gray-400/20">
                <h3 className="text-4xl font-semibold  text-center">${active === "monthly" ? "19" : "149"}<span className="text-gray-500 text-[16px]">/month</span></h3>

                {/* this part will bw showed when monthly button clicked */}
                {active === "yearly" && (
                <p className="text-teal-500 text-center mt-2.5">Save 12% with annual billing</p>)}
                </div>

                <ul className="my-[40px]">
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                </ul>

                <div className="flex justify-center items-center">
                  <button className="mb-[40px] text-black bg-white w-full rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-white/80 transition-all">
                    Get started
                  </button>
                </div>
            </div>
            {/* third card */}
            <div className="max-w-[370px]  text-white px-[37px] pt-[72px] bg-[#171923] border border-[#2D3748]/80 rounded-3xl pricingLastCardMargin1000px">
                <h3 className="text-3xl text-center">Starter</h3>

                <p className="text-[#718096] mt-5 max-w-[295px]">For driven individuals who want to start with essential features and resources to kickstart your journey.</p>

                <h3 className="text-4xl font-semibold py-[70px] border-b border-gray-400/20 text-center">Custom</h3>

                <ul className="my-[40px]">
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                    <li className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    <p>Standard analytics</p>
                    </li>
                </ul>

                <div className="flex justify-center items-center">
                  <button className="mb-[40px] text-white bg-[#171923] w-full rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Get started
                  </button>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Pricing;
