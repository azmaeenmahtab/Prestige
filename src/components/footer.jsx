const Footer = () => {




    return (
        <div className="max-w-[1200px] mx-auto">
        {/* lists div container */}
        <div className="flex justify-between items-start mb-[90px]">
            {/* icon / name div */}
        <div className="flex gap-[4px] items-center">
          <img
            src="../src/assets/logo-removebg-preview.png"
            className="w-[22px] h-[20px] mb-[4px]"
            alt=""
          />
          <p className="text-white font-medium text-[16px]">Prestige</p>
        </div>

        {/* product list div */}
        <div>
            <ul className="text-gray-500 space-y-3.5 ">
                <li className="text-white font-semibold">Product</li>
                <li className="cursor-pointer hover:text-white">Pricing</li>
                <li className="cursor-pointer hover:text-white">Feature</li>
                <li className="cursor-pointer hover:text-white">Integration</li>
                <li className="cursor-pointer hover:text-white">Changelog</li>
            </ul>
        </div>

        {/* company list div */}
        <div>
            <ul className="text-gray-500  space-y-3.5">
                <li className="text-white font-semibold">Company</li>
                <li className="cursor-pointer hover:text-white">About</li>
                <li className="cursor-pointer hover:text-white">Blog</li>
                <li className="cursor-pointer hover:text-white">Customers</li>
                <li className="cursor-pointer hover:text-white">Careers <span className="ml-2 text-sm border border-teal-400/60 w-[100px] rounded-full px-[10px] py-[3px] bg-teal-400/10 text-teal-400">Hiring</span></li>
            </ul>
        </div>

        {/* resources div */}
        <div className="">
            <ul className="text-gray-500 space-y-3.5">
                <li className="text-white font-semibold">Resources</li>
                <li className="cursor-pointer hover:text-white">FAQ</li>
                <li className="cursor-pointer hover:text-white">Contact</li>
                <li className="cursor-pointer hover:text-white">Terms of service</li>
                <li className="cursor-pointer hover:text-white">Privacy policy</li>
                <li className="cursor-pointer hover:text-white">404</li>
            </ul>
        </div>


        </div>

        {/* all ok bar */}
        <div className="flex justify-end mb-5">
            <div className="flex items-center gap-2 py-1 px-2.5 bg-gray-900 rounded-3xl max-w-[190px]">
            <svg className="text-green-500" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>
            <p className="text-gray-400">All systems normal</p>
            </div>
        </div>

        {/* all reserved */}
        <div className="flex justify-between items-center border-t border-white/40 pt-2 pb-[30px]">
            <div className="text-gray-400 text-sm">
                <p>© 2023 Prestige. All rights reserved.</p>
            </div>
            <div className="flex gap-4 h-[50px] items-center">
            <svg className="text-gray-400 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg" ><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path></svg>
            <svg className="text-gray-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg" ><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>
            </div>
        </div>
        <button className="fixed bottom-4 right-4 z-50 bg-white text-black text-[13px] font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></span> Get template
</button>





        </div>
    )
}

export default Footer;