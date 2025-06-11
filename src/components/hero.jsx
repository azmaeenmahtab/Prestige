 import heroImg from "../assets/bg-img.png";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

 const Hero = () => {


    return (<><div className=" bg-no-repeat bg-cover w-screen bg-center h-[333px] flex flex-col items-center"
            style={{ backgroundImage: `url(${heroImg})` }}>

        {/* Ai button */}
    <div className="text-white w-[250px]">
        <a href="" className="flex items-center gap-[15px] border border-[#3CE8C3]/50 px-[4px] py-[5px] rounded-[20px] bg-[#3CE8C3]/10">
            <p><span className="mr-3 border border-[#3CE8C3] px-[7px] py-[1px] rounded-[12px] bg-[#3CE8C3]">New</span><span className="text-[#3CE8C3]/90">Introducing AI Editor</span></p>
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#64c4b9",}} />
        </a>

    </div>
    {/* title */}
    <div></div>
    {/* description */}
    <div></div>
    {/* 2 buttons */}
    <div></div>
    </div></>)
}

export default Hero;