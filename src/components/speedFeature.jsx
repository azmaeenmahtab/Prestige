import animate3 from "../assets/assistant.webp";
import animate1 from "../assets/collaboratio.webp";
import animate2 from "../assets/automation.webp";
import { useEffect, useRef, useState } from "react";

const SpeedFeature = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);
  const items = [
    {
      title: "Easy Collaboration",
      description:
        "Working together on documents has never been easier, allowing you and your team to collaborate and provide constructive feedback.",
      image: animate1,
    },
    {
      title: "Smart Automation",
      description:
        "You can focus on the creative aspects of content creation while leaving time-consuming tasks to our intelligent system.",
      image: animate2,
    },
    {
      title: "AI Assistant",
      description:
        "Designed to integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.",
      image: animate3,
    },
  ];

  useEffect(() => {
    startAutoCycle();
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex]);

  const startAutoCycle = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
  };

  const handleClick = (index) => {
    if (index !== activeIndex) {
      clearTimeout(timeoutRef.current);
      setActiveIndex(index);
    }
  };

  return (
    <div className="mb-[300px]">
      {/* text header top part */}
      <div className="text-center mb-[80px] max-w-[720px] mx-auto flex flex-col items-center">
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
        <h3 className="text-5xl font-bold mb-4 tracking-wider text-white">
          Speed up your workflow
        </h3>
        <p className="text-gray-400 text-[18px] w-[750px]">
          We are excited to present our stunning solutions designed to address your
          unique needs and provide a seamless user experience.
        </p>
      </div>

      {/* animation part main container */}
      <div className="max-w-[1100px] min-h-[499px] relative mx-auto flex justify-between items-center">
        {/* text container */}
        <div className="max-w-[410px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-white px-1 py-2 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <div
                className={`flex justify-between items-center ${
                  index !== activeIndex ? "border-b border-gray-400" : ""
                }`}
              >
                <h4 className="font-semibold my-4 ">{item.title}</h4>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    index === activeIndex ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                  ></path>
                </svg>
              </div>
              {index === activeIndex && (
                <>
                  <p className="text-gray-400 pt-2 pb-7 pr-0">{item.description}</p>
                  <div className="h-[2px] bg-teal-400/20 w-full relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-teal-400"
                      style={{ animation: "fillBar 3s linear forwards" }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* animating img container */}
        <div className="max-w-[600px] overflow-hidden  bg-gray-900 rounded-3xl flex items-center justify-center">
          <img
            key={activeIndex}
            src={items[activeIndex].image}
            alt="feature-img"
            className="bounce-once"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeedFeature;
