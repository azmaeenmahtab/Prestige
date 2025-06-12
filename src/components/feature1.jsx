const Feature1 = () => {
  return (
    <div className="p-6 pb-0 mb-[300px] bg-[#101010] text-white">
      {/* Text content */}
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
        <h3 className="text-5xl font-bold mb-4 tracking-wider ">Product features</h3>
        <p className="text-gray-400 text-[18px]">
          Discover an extensive suite of robust tools and functionalities thoughtfully designed to enhance your interactions on our platform.
        </p>
      </div>

      {/* Card container */}
      <div className="grid grid-cols-3 gap-8 max-w-[1280px] mx-auto px-[30px]">
        {/* Example card */}
        <div className="p-[40px] bg-[#171923] rounded-2xl shadow-lg border border-gray-500/30">
        <div>
            <svg 
            stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 24 24" 
            height="20px" 
            width="20px" 
            xmlns="http://www.w3.org/2000/svg"
            className="" 
            ><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 00-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 000-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"></path>
            </svg>
        </div>
          <h5 className=" text-[16px] font-semibold mb-[10px] pt-[10px]">Data Tracking</h5>
          <p className=" text-[16px] text-gray-400 max-w-[300px]">Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.</p>
        </div>
        <div className="p-[40px] bg-[#171923] rounded-2xl shadow-lg border border-gray-500/30">
        <div>
            <svg 
            stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 24 24" 
            height="20px" 
            width="20px" 
            xmlns="http://www.w3.org/2000/svg"
            className="" 
            ><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 00-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 000-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"></path>
            </svg>
        </div>
          <h5 className=" text-[16px] font-semibold mb-[10px] pt-[10px]">Data Tracking</h5>
          <p className=" text-[16px] text-gray-400 max-w-[300px]">Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.</p>
        </div><div className="p-[40px] bg-[#171923] rounded-2xl shadow-lg border border-gray-500/30">
        <div>
            <svg 
            stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 24 24" 
            height="20px" 
            width="20px" 
            xmlns="http://www.w3.org/2000/svg"
            className="" 
            ><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 00-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 000-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"></path>
            </svg>
        </div>
          <h5 className=" text-[16px] font-semibold mb-[10px] pt-[10px]">Data Tracking</h5>
          <p className=" text-[16px] text-gray-400 max-w-[300px]">Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.</p>
        </div><div className="p-[40px] bg-[#171923] rounded-2xl shadow-lg border border-gray-500/30">
        <div>
            <svg 
            stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 24 24" 
            height="20px" 
            width="20px" 
            xmlns="http://www.w3.org/2000/svg"
            className="" 
            ><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 00-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 000-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"></path>
            </svg>
        </div>
          <h5 className=" text-[16px] font-semibold mb-[10px] pt-[10px]">Data Tracking</h5>
          <p className=" text-[16px] text-gray-400 max-w-[300px]">Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.</p>
        </div><div className="p-[40px] bg-[#171923] rounded-2xl shadow-lg border border-gray-500/30">
        <div>
            <svg 
            stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 24 24" 
            height="20px" 
            width="20px" 
            xmlns="http://www.w3.org/2000/svg"
            className="" 
            ><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 00-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 000-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"></path>
            </svg>
        </div>
          <h5 className=" text-[16px] font-semibold mb-[10px] pt-[10px]">Data Tracking</h5>
          <p className=" text-[16px] text-gray-400 max-w-[300px]">Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.</p>
        </div><div className="p-[40px] bg-[#171923] rounded-2xl shadow-lg border border-gray-500/30">
        <div>
            <svg 
            stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 24 24" 
            height="20px" 
            width="20px" 
            xmlns="http://www.w3.org/2000/svg"
            className="" 
            ><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 00-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 000-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"></path>
            </svg>
        </div>
          <h5 className=" text-[16px] font-semibold mb-[10px] pt-[10px]">Data Tracking</h5>
          <p className=" text-[16px] text-gray-400 max-w-[300px]">Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.</p>
        </div>
         

        {/* Repeat or map more cards here */}
      </div>
    </div>
  );
};

export default Feature1;
