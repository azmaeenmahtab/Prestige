import smheroImg from "../assets/svgviewer-png-output.png";
import smDash from "../assets/small-dashboard.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faRotate } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SmallDashboard = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover max-w-[1200px] mx-auto bg-center mb-[250px] flex items-center rounded-3xl justify-between relative overflow-hidden"
        style={{ backgroundImage: `url(${smheroImg})`, height: "450px", backgroundColor:'' }}
      >
        {/* text part left */}
        <div className="max-w-[650px] pl-[100px] z-10">
          <h3 className="text-5xl text-white font-semibold tracking-wider mb-4">
            Start building today.
          </h3>
          <p className="text-[18px] text-[#A0AEC0] mb-5 max-w-[500px]">
            Our app eliminates the need for complex spreadsheets, endless email
            threads, empowering businesses to achieve greater efficiency.
          </p>
          {/* btn div */}
          <div className="flex">
          <input
  type="email"
  className="h-[56px] bg-gray-700 rounded-3xl py-4 px-8 text-white placeholder-white w-[340px] mr-1 border border-transparent focus:border-blue-500 focus:outline-none"
  placeholder="your@gmail.com"
/>


            <button className="text-black bg-white py-4 px-8 rounded-3xl border cursor-pointer hover:bg-white/80">
              Join waitlist
            </button>
          </div>
        </div>

        {/* img part right */}
        <img
          src={smDash}
          className="absolute bottom-0 right-[0px] max-w-[500px]"
          alt="dashboard"
        />
      </div>
    </>
  );
};

export default SmallDashboard;
