import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aipic from "../assets/ai-img.webp";
import analytics from "../assets/sa-img.webp";
import collab from "../assets/easy-collaboration-img.webp";
import automation from "../assets/smart-automation-img.webp";
import gridpic1 from "../assets/easy-collaboration-1.webp";
import gridpic2 from "../assets/easy-collaboration-2.webp";
import gridpic3 from "../assets/easy-collaboration-3.webp";



const Feature4 = ( ) => {



    return (<div>
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
        <h3 className="text-5xl font-bold mb-4 tracking-wider text-white">And so much more</h3>
        <p className="text-gray-400 text-[18px] w-[750px]">
        All the features you need to build a better experience, explore the possibilities, and unlock the full potential of what we have to offer.</p>
      </div>




        {/* first ai content part */}
        <div className="text-center mt-[90px] text-gray-300">
          
            <div>
              <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-[40px]">
                <div className="text-left max-w-[560px] pt-5">
                  <div className="flex items-center gap-4 text-teal-400">
                    <div className="flex items-center justify-center  w-12 h-12 border border-teal-400/30 rounded-2xl bg-teal-400/20">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]"><path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path></svg>
                    </div>
                    <h4 className="font-semibold">AI Assistant</h4>
                  </div>

                  <h3 className="text-[32px] font-semibold text-white my-3.5 max-w-[520px] tracking-wide">Your ultimate productivity and companion</h3>


                  <p className=" text-gray-400">Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.</p>

                    {/* learn more button */}
                  <div className="flex justify-start items-center">
                  <button className="mt-[50px] text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                  </div>

                    {/* vedio editing part */}
                  <div className="mt-12 flex gap-10">
                    {/* left part  */}
                    <div>

                    <svg stroke="currentColor" 
                    fill="currentColor" 
                    stroke-width="0" 
                    viewBox="0 0 512 512" 
                    height="20px" 
                    width="20px" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-teal-400">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z">
                    </path>
                    </svg>

                    <h4 className="mt-3 text-white font-semibold mb-2">Vedio editing</h4>

                    <p className="text-gray-500 max-w-[280px]">Seamlessly transform raw footage into polished masterpieces.</p>

                    <div className="flex justify-start items-center transition-all">
                    <button className="font-semibold text-white hover:text-gray-400 py-4 cursor-pointer transition-colors flex items-center">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </button>
                    </div>


                    </div>
                    {/* right part */}
                    <div>

                    <svg stroke="currentColor" 
                    fill="currentColor" 
                    stroke-width="0" 
                    viewBox="0 0 512 512" 
                    height="20px" 
                    width="20px" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-teal-400">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z">
                    </path>
                    </svg>

                    <h4 className="mt-3 text-white font-semibold mb-2">Vedio editing</h4>

                    <p className="text-gray-500 max-w-[280px]">Seamlessly transform raw footage into polished masterpieces.</p>

                    <div className="flex justify-start items-center transition-all">
                    <button className="font-semibold text-white hover:text-gray-400 py-4 cursor-pointer transition-colors flex items-center">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </button>
                    </div>



                    </div>
                  </div>
                </div>
                {/* image part right side */}
                <div className="max-w-[550px] max-h-[650px] pt-0" >
                <img
                src={aipic}
                alt=""
                className=""
                />

             
                </div>
              </div>
            </div>
        </div>


        {/* second analytic content */}
        <div className="text-center mt-[90px] text-gray-300 mb-[300px]">
          
            <div>
              <div className="max-w-[1280px] mx-auto flex flex-row-reverse justify-between items-center gap-8 px-[40px]">
                <div className="text-left max-w-[560px] pt-5 pl-2">
                  <div className="flex items-center gap-4 text-purple-400">
                    <div className="flex items-center justify-center  w-12 h-12 border border-purple-400/80 rounded-xl bg-[#322659]">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" className=""><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path><path d="M7 20l10 0"></path><path d="M9 16l0 4"></path><path d="M15 16l0 4"></path><path d="M8 12l3 -3l2 2l3 -3"></path></svg>
                    </div>
                    <h4 className="font-semibold">Simple Analytics</h4>
                  </div>

                  <h3 className="text-[32px] font-semibold text-white my-3.5 max-w-[540px] tracking-wide">Help you track what really matters to you</h3>


                  <p className=" text-gray-400">It helps businesses make informed predictions and anticipate trends, enabling proactive decision-making and planning.</p>

                    {/* learn more button */}
                  <div className="flex justify-start items-center">
                  <button className="mt-[50px] text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                  </div>

                    {/* vedio editing part */}
                  <div className="mt-12 flex gap-10">
                    {/* right part  */}
                    <div>

                    <svg stroke="currentColor" 
                    fill="currentColor" 
                    stroke-width="0" 
                    viewBox="0 0 512 512" 
                    height="20px" 
                    width="20px" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-purple-400">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z">
                    </path>
                    </svg>

                    <h4 className="mt-3 text-white font-semibold mb-2">Charts tracking</h4>

                    <p className="text-gray-500 max-w-[280px]">Built-in analytics and reporting capabilities help gather insights.</p>

                    <div className="flex justify-start items-center transition-all">
                    <button className="font-semibold text-white hover:text-gray-400 py-4 cursor-pointer transition-colors flex items-center">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </button>
                    </div>


                    </div>
                    {/* left part */}
                    <div>

                    <svg stroke="currentColor" 
                    fill="currentColor" 
                    stroke-width="0" 
                    viewBox="0 0 512 512" 
                    height="20px" 
                    width="20px" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-purple-400">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z">
                    </path>
                    </svg>

                    <h4 className="mt-3 text-white font-semibold mb-2">Vedio editing</h4>

                    <p className="text-gray-500 max-w-[280px]">Seamlessly transform raw footage into polished masterpieces.</p>

                    <div className="flex justify-start items-center transition-all">
                    <button className="font-semibold text-white hover:text-gray-400 py-4 cursor-pointer transition-colors flex items-center">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </button>
                    </div>



                    </div>
                  </div>
                </div>
                {/* image part right side */}
                <div className="max-w-[550px] max-h-[650px] pt-0" >
                <img
                src={analytics}
                alt=""
                className=""
                />

             
                </div>
              </div>
            </div>
        </div>
          

        {/* third - collaboration part */}
        <div className="max-w-[1200px] mx-auto flex justify-between gap-8 mb-12">
                <div className="text-left max-w-[550px]  pt-5">
                  <div className="flex items-center gap-4 text-orange-300">
                    <div className="flex items-center justify-center w-12 h-12 border border-orange-300/60 rounded-2xl bg-yellow-900">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"></path></svg>
                    </div>
                    <h4 className="font-semibold">Easy Collaboration</h4>
                  </div>
                  <h3 className="text-[32px] font-semibold text-white my-3.5 max-w-[470px] tracking-wide">The best solution for seamless productive teamwork</h3>
                  <p className="text-gray-400">Working together on documents has never been easier, allowing you and your team to collaborate and provide feedback.</p>
                  
                </div>
                <div className="flex justify-center items-center">
                  <button className="mt-[50px] text-white bg-[#171923] rounded-full px-6 py-4 border border-gray-400/40 cursor-pointer hover:bg-gray-200/15 transition-all">
                    Learn more
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-white" />
                  </button>
                </div>
                
                
        </div>
        {/* grid */}
        <div className="grid grid-cols-3 max-w-[1200px] mx-auto mb-[280px] gap-5">
            <div><img src={gridpic1} alt="" className="rounded-3xl" /></div>
            <div><img src={gridpic2} alt="" className="rounded-3xl" /></div>
            <div><img src={gridpic3} alt="" className="rounded-3xl" /></div>

            <div className="ml-2.5"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" class="text-orange-300"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"></path></svg><h4 class="mt-3 text-white font-semibold mb-2">Vedio editing</h4><p class="text-gray-500 max-w-[380px]">The ability to set varying levels of permissions for different users, ensuring data security and full access control.</p><div class="flex justify-start items-center transition-all"><button class="font-semibold text-white hover:text-gray-400 py-4 cursor-pointer transition-colors flex items-center">Learn more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></button></div></div>

            <div className="ml-2.5"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" class="text-orange-300"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"></path></svg><h4 class="mt-3 text-white font-semibold mb-2">Vedio editing</h4><p class="text-gray-500 max-w-[380px]">The ability to set varying levels of permissions for different users, ensuring data security and full access control.</p><div class="flex justify-start items-center transition-all"><button class="font-semibold text-white hover:text-gray-400 py-4 cursor-pointer transition-colors flex items-center">Learn more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></button></div></div>

            <div className="ml-2.5"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" class="text-orange-300"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"></path></svg><h4 class="mt-3 text-white font-semibold mb-2">Vedio editing</h4><p class="text-gray-500 max-w-[380px]">The ability to set varying levels of permissions for different users, ensuring data security and full access control.</p><div class="flex justify-start items-center transition-all"><button class="font-semibold text-white hover:text-gray-400 py-4 cursor-pointer transition-colors flex items-center">Learn more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></button></div></div>

        </div>
        
        
        
        </div>)
}

export default Feature4;