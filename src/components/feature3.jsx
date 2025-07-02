import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import aipic from "../assets/ai-assistant-img.webp";
import analytics from "../assets/simple-analytics-img.webp";
import collab from "../assets/easy-collaboration-img.webp";
import automation from "../assets/smart-automation-img.webp";


export default function Feature3() {
  const [active, setActive] = useState("ai");
  const [animate, setAnimate] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);


  useEffect(() => {
    if (active === "ai" || active === "analytics" || active === "collab" || active === "automation") {
      const timer = setTimeout(() => setAnimateImage(true), 50);
      return () => {
        clearTimeout(timer);
        setAnimateImage(false);
      };
    } else {
      setAnimateImage(false);
    }
  }, [active]);
  
  

  return (
    
    <>
      <div className="p-6 py-0 mb-[284px] bg-[#101010] text-white">
        {/* heading part */}
        <div className="text-center mb-[80px] w-full max-w-[720px] mx-auto flex flex-col items-center">
          <div className="flex justify-center mb-6 items-center gap-[5px] border border-teal-400/60 w-[100px] rounded-full px-[5px] py-[3px] bg-teal-400/10 text-teal-400">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <path d="M219.68,117.26a12,12,0,0,0-7.47-8.5L157.77,88.35l14-70A12,12,0,0,0,151.23,7.81l-112,120a12,12,0,0,0,4.56,19.43l54.44,20.41-14,70a12,12,0,0,0,20.54,10.54l112-120A12,12,0,0,0,219.68,117.26ZM116.05,200.93l7.72-38.58a12,12,0,0,0-7.56-13.59L69,131.07l70.93-76-7.72,38.58a12,12,0,0,0,7.56,13.59L187,124.93Z" />
            </svg>
            <span>Feature</span>
          </div>
          <h3 className="text-5xl font-bold mb-4 tracking-wider">Other features</h3>
          <p className="text-gray-400 text-[18px]">Our platform is designed to provide you with an exceptional user experience, catering to the needs of ambitious professionals and visionary entrepreneurs.</p>
        </div>
        {/* button pannel part */}
        <div className="max-w-[916px] mx-auto bg-[#171923] border border-[#2D3748] rounded-[32px] p-1 flex  items-center justify-center gap-2 ">
          <div onClick={() => setActive("ai")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-[32px] px-4 py-2 cursor-pointer transition-all duration-300 ${active === "ai" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  className="mr-[8px]"><path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path></svg>
            <h4>AI Assistant</h4>
          </div>

          <div onClick={() => setActive("analytics")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "analytics" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="mr-[8px]"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path><path d="M7 20l10 0"></path><path d="M9 16l0 4"></path><path d="M15 16l0 4"></path><path d="M8 12l3 -3l2 2l3 -3"></path></svg>
            <h4>Simple Analytic</h4>
          </div>

          <div onClick={() => setActive("collab")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "collab" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="mr-[8px]"><path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"></path></svg>
            <h4>Easy Collaboration</h4>
          </div>

          <div onClick={() => setActive("automation")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "automation" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path></svg>
            <h4>Smart Automation</h4>
          </div>
        </div>

        {/* feature animation part */}
        {/* ai assistant part */}
        <div className="text-center mt-[90px] text-gray-300">
          {active === "ai" && (
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8 animateBtnContent1000">
                <div className="text-left max-w-[450px] pt-5 animateBtnTextContentWidth1000 animateBtnText1000">

                  <div>
                  <div className="flex items-center gap-4 text-teal-400">
                    <div className="flex items-center justify-center  w-12 h-12 border border-teal-400/30 rounded-2xl bg-teal-400/20">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]"><path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path></svg>
                    </div>
                    <h4 className="font-semibold">AI Assistant</h4>
                  </div>
                  <h3 className="text-[32px] font-semibold text-white my-3.5 max-w-[370px]">Your new ultimate productivity companion</h3>
                  <p className=" text-gray-400">Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.</p>
                  </div>

                    <div className="flex justify-center items-center w-[155px]">
                  <button className="mt-[50px] mx-auto text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all w-[155px]">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                  </div>
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={aipic}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : "hidden"}`}
/>

             
                </div>
              </div>
            </>
          )}
          {/* simple analytic part */}
          {active === "analytics" && (
            
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="text-left max-w-[450px]  pt-5">
                  <div className="flex items-center gap-4 text-purple-400">
                    <div className="flex items-center justify-center  w-12 h-12 border border-purple-400/80 rounded-2xl bg-[#322659]">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" className=""><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path><path d="M7 20l10 0"></path><path d="M9 16l0 4"></path><path d="M15 16l0 4"></path><path d="M8 12l3 -3l2 2l3 -3"></path></svg>
                    </div>
                    <h4 className="text-purple-400 font-semibold">Simple Analytics</h4>
                  </div>
                  <h3 className="text-3xl font-semibold text-white my-4">Help you track what really matters to you</h3>
                  <p className="text-base">Built-in analytics and reporting capabilities help businesses gather insights, track KPI, and make data-driven decisions.</p>
                  <div className="flex justify-center items-center">
                  <button className="mt-[50px] mx-auto text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                  </div>  
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={analytics}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : "hidden"}`}
/>


                </div>
              </div>
            </>
          )}
          {/* easy collaboration part */}
          {active === "collab" && (
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="text-left max-w-[450px]  pt-5">
                  <div className="flex items-center gap-4 text-orange-300">
                    <div className="flex items-center justify-center w-12 h-12 border border-orange-300/60 rounded-2xl bg-yellow-900">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"></path></svg>
                    </div>
                    <h4 className="font-semibold">Easy Collaboration</h4>
                  </div>
                  <h3 className="text-[32px] font-semibold text-white my-3.5 max-w-[370px]">Solution for seamless productive teamwork</h3>
                  <p className="text-gray-400">Working together on documents has never been easier, allowing you and your team to collaborate and provide constructive feedback.</p>
                  <div className="flex justify-center items-center">
                  <button className="mt-[50px] text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                  </div>
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={collab}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : "hidden"}`}
/>


                </div>
              </div>
            </>          )}
            {/* automation part */}
          {active === "automation" && (
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="text-left max-w-[450px]  pt-5">
                  <div className="flex items-center gap-4 text-green-400/60">
                    <div className="flex items-center justify-center w-12 h-12 border border-green-400/60 rounded-2xl bg-teal-400/20">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path></svg>
                    </div>
                    <h4 className="font-semibold text-green-400/60">Smart Automation</h4>
                  </div>
                  <h3 className="text-3xl font-semibold text-white my-4">Streamline your entire workflow fast</h3>
                  <p className="text-base max-w-[430px]">You can focus on the creative aspects of content creation while leaving time-consuming tasks to our intelligent system.</p>
                  <div className="flex justify-center items-center">
                  <button className="mt-[50px] text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                  </div>
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={automation}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : "hidden"}`}
/>


                </div>
              </div>
            </>          )}
        </div>
      </div>
    </>
  );
}
