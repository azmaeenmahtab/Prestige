import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import aipic from "../assets/ai-assistant-img.webp";

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

        <div className="max-w-[920px] mx-auto bg-[#171923] border border-[#2D3748] rounded-[32px] p-1 flex flex-wrap items-center justify-center gap-2">
          <div onClick={() => setActive("ai")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "ai" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
            <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <h4>AI Assistant</h4>
          </div>

          <div onClick={() => setActive("analytics")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "analytics" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
            <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm4 4h2v-6H7v6zm4-10h2v10h-2V7zm4 6h2v-4h-2v4zm4-8h2v16h-2V5z"/>
            </svg>
            <h4>Simple Analytic</h4>
          </div>

          <div onClick={() => setActive("collab")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "collab" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
            <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <h4>Easy Collaboration</h4>
          </div>

          <div onClick={() => setActive("automation")} className={`flex gap-2 items-center justify-center w-[220px] h-[55px] rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${active === "automation" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
            <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24">
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.02-.26 1.97-.71 2.8l1.46 1.46C19.56 14.59 20 13.34 20 12c0-4.42-3.58-8-8-8zm6.29 11.2L17.17 14.1A5.978 5.978 0 0 1 12 18c-3.31 0-6-2.69-6-6 0-1.02.26-1.97.71-2.8L5.25 7.74C4.44 9.41 4 10.66 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-1.31.42-2.52 1.13-3.5l1.46 1.46c-.45.83-.71 1.78-.71 2.8 0 3.31 2.69 6 6 6 1.34 0 2.59-.44 3.6-1.17z"/>
            </svg>
            <h4>Smart Automation</h4>
          </div>
        </div>

        <div className="text-center mt-[90px] text-gray-300">
          {active === "ai" && (
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="text-left max-w-[450px]">
                  <div className="flex items-center gap-4 text-teal-400">
                    <div className="flex items-center justify-center p-4 w-12 h-12 border border-teal-400/30 rounded-2xl bg-teal-400/20">
                      <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162z" />
                      </svg>
                    </div>
                    <h4>AI Assistant</h4>
                  </div>
                  <h3 className="text-3xl font-semibold text-white my-4">Your new ultimate productivity companion</h3>
                  <p className="text-base">Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.</p>
                  <button className="mt-8 text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 hover:border-teal-400 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={aipic}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : ""}`}
/>


                </div>
              </div>
            </>
          )}

          {active === "analytics" && (
            
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="text-left max-w-[450px]">
                  <div className="flex items-center gap-4 text-teal-400">
                    <div className="flex items-center justify-center p-4 w-12 h-12 border border-teal-400/30 rounded-2xl bg-teal-400/20">
                      <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162z" />
                      </svg>
                    </div>
                    <h4>AI Assistant</h4>
                  </div>
                  <h3 className="text-3xl font-semibold text-white my-4">Your new ultimate productivity companion</h3>
                  <p className="text-base">Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.</p>
                  <button className="mt-8 text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 hover:border-teal-400 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={aipic}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : ""}`}
/>


                </div>
              </div>
            </>
          )}

          {active === "collab" && (
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="text-left max-w-[450px]">
                  <div className="flex items-center gap-4 text-teal-400">
                    <div className="flex items-center justify-center p-4 w-12 h-12 border border-teal-400/30 rounded-2xl bg-teal-400/20">
                      <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162z" />
                      </svg>
                    </div>
                    <h4>AI Assistant</h4>
                  </div>
                  <h3 className="text-3xl font-semibold text-white my-4">Your new ultimate productivity companion</h3>
                  <p className="text-base">Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.</p>
                  <button className="mt-8 text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 hover:border-teal-400 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={aipic}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : ""}`}
/>


                </div>
              </div>
            </>          )}

          {active === "automation" && (
            <>
              <div className="max-w-[890px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="text-left max-w-[450px]">
                  <div className="flex items-center gap-4 text-teal-400">
                    <div className="flex items-center justify-center p-4 w-12 h-12 border border-teal-400/30 rounded-2xl bg-teal-400/20">
                      <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162z" />
                      </svg>
                    </div>
                    <h4>AI Assistant</h4>
                  </div>
                  <h3 className="text-3xl font-semibold text-white my-4">Your new ultimate productivity companion</h3>
                  <p className="text-base">Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.</p>
                  <button className="mt-8 text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 hover:border-teal-400 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                </div>
                <div className="bg-[#171923] rounded-[24px] h-[400px] w-full max-w-[400px] relative overflow-hidden">
                <img
  src={aipic}
  alt=""
  className={`absolute top-0 left-0 w-full h-full object-cover ${animateImage ? "bounce-once" : ""}`}
/>


                </div>
              </div>
            </>          )}
        </div>
      </div>
    </>
  );
}
