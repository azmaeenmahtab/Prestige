import { useState } from "react";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import aipic from '../assets/ai-assistant-img.webp'

const Feature3 = () => {
  const [active, setActive] = useState("ai");

  return (
    <div className="p-6 py-0 mb-[284px] bg-[#101010] text-white">
      {/* Header content */}
      <div className="text-center mb-[80px] w-[720px] mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 items-center gap-[5px] border border-teal-400/60 w-[100px] rounded-full px-[5px] py-[3px] bg-teal-400/10 text-teal-400">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 256 256"
            height="1rem"
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            className="text-teal-400"
          >
            <path d="M219.68,117.26a12,12,0,0,0-7.47-8.5L157.77,88.35l14-70A12,12,0,0,0,151.23,7.81l-112,120a12,12,0,0,0,4.56,19.43l54.44,20.41-14,70a12,12,0,0,0,20.54,10.54l112-120A12,12,0,0,0,219.68,117.26ZM116.05,200.93l7.72-38.58a12,12,0,0,0-7.56-13.59L69,131.07l70.93-76-7.72,38.58a12,12,0,0,0,7.56,13.59L187,124.93Z" />
          </svg>
          <span>Feature</span>
        </div>
        <h3 className="text-5xl font-bold mb-4 tracking-wider">Other features</h3>
        <p className="text-gray-400 text-[18px]">
          Our platform is designed to provide you with an exceptional user experience, catering to the needs of ambitious professionals and visionary entrepreneurs.
        </p>
      </div>

      {/* Button group */}
      <div className="max-w-[920px] mx-auto bg-[#171923] border border-[#2D3748] rounded-[32px] p-1 flex items-center">
        {/* AI Assistant */}
        <div
          className={`flex gap-4 justify-center items-center w-[230px] h-[55px] rounded-full px-4 py-2 cursor-pointer ${
            active === "ai" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActive("ai")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="16px"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
          </svg>
          <h4>AI Assistant</h4>
        </div>

        {/* Simple Analytic */}
        <div
          className={`flex gap-4 justify-center items-center w-[230px] h-[55px] rounded-full px-4 py-2 cursor-pointer ${
            active === "analytics" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActive("analytics")}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
            <path d="M7 20l10 0"></path>
            <path d="M9 16l0 4"></path>
            <path d="M15 16l0 4"></path>
            <path d="M8 12l3 -3l2 2l3 -3"></path>
          </svg>
          <h4>Simple Analytic</h4>
        </div>

        {/* Easy Collaboration */}
        <div
          className={`flex gap-4 justify-center items-center w-[230px] h-[55px] rounded-full px-4 py-2 cursor-pointer ${
            active === "collab" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActive("collab")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"></path>
          </svg>
          <h4>Easy Collaboration</h4>
        </div>

        {/* Smart Automation */}
        <div
          className={`flex gap-4 justify-center items-center w-[230px] h-[55px] rounded-full px-4 py-2 cursor-pointer ${
            active === "automation" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActive("automation")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path>
          </svg>
          <h4>Smart Automation</h4>
        </div>
      </div>

      {/* Content below based on selected */}
      <div className="text-center mt-[90px] text-gray-300">
        {active === "ai" && (
            <div className="max-w-[890px] mx-auto flex justify-between">
                {/* text */}
                <div className="text-left max-w-[450px]">
                    {/* icon */}
                    <div className="flex justify-start items-center gap-4 text-teal-400">
                        <div className="flex justify-center items-center p-6 w-[48px] h-[48px] border border-teal-400/30 rounded-2xl bg-teal-400/20">
                            <div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"  className="text-teal-400"><path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path></svg></div>
                        </div>
                        <h4>AI Assistant</h4>
                    </div>
                    {/* title */}
                    <h3 className="text-3xl/relaxed font-semibold text-white my-[14px] max-w-[400px] ">Your new ultimate productivity companion</h3>
                    {/* descripption */}
                    <p className="text-[16px]">Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.</p>
                    {/* btn */}
                    <div className="flex items-center justify-center">
                        <button className="mt-[50px] text-white bg-[#171923] rounded-full px-[30px] py-[16px] border border-gray-400/40 ">Learn more<FontAwesomeIcon icon={faAngleRight} style={{color: "white",marginLeft:"10px"}} /></button>
                    </div>
                    
                </div>
                {/* image */}
                <div className="bg-[#171923] rounded-[24px] pb-0  h-[px] max-w-[400px]">
                                <img src={aipic} alt="" />
                </div>
            </div>
        )}










        {active === "analytics" && <p>Analyze your data easily and make smarter decisions.</p>}
        {active === "collab" && <p>Collaborate with your team effortlessly in real-time.</p>}
        {active === "automation" && <p>Automate repetitive tasks and boost productivity.</p>}
      </div>
    </div>
  );
};

export default Feature3;
