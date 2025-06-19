import personImg from "../assets/segun_adebayo.jpg";

const Review = () => {
  return (
    <div>
      {/* text header top part */}
      <div className="text-center mb-[80px] max-w-[720px] mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 items-center gap-[5px] border border-teal-400/60 w-[140px] rounded-full px-[5px] py-[3px] bg-teal-400/10 text-teal-400">
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Testimonials</span>
        </div>
        <h3 className="text-5xl font-bold mb-4 tracking-wider text-white">
          What are people saying
        </h3>
        <p className="text-gray-400 text-[18px] w-[780px]">
          Our customers continue to be the core of our business and their feedback vividly illustrates the success of our efforts.
        </p>
      </div>

      {/* animation part */}
      <div className="relative max-w-[1200px] mx-auto overflow-hidden mb-[300px]">
       {/* Left fading edge */}
<div className="absolute left-0 top-0 h-full w-[650px] z-20 pointer-events-none bg-[linear-gradient(to_right,#0f0f0f,rgba(255,0,0,0))]" />

{/* Right fading edge */}
<div className="absolute right-0 top-0 h-full w-[650px] z-20 pointer-events-none bg-[linear-gradient(to_left,#0f0f0f,rgba(255,0,0,0))]" />



        {/* scrolling strip */}
        <div className="flex gap-7 animate-scroll-slow opacity-90 w-fit">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-7 bg-gray-800 max-w-[380px] border border-gray-300/50 rounded-3xl text-white shrink-0"
            >
              <p className="pb-6">
                With its powerful help desk features and automation capabilities, we have been able to provide faster and more personalized support to our clients.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img src={personImg} className="w-10 h-10 rounded-full" alt="" />
                  <div className="text-sm">
                    <h5 className="font-semibold">Emily Johnson</h5>
                    <p>Business Manager</p>
                  </div>
                </div>
                {/* framer logo */}
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
                  </svg>
                  <h4 className="font-bold">Framer</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* animation styles */}
      <style>
        {`
          @keyframes scroll-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-slow {
            animation: scroll-slow 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Review;
