import { motion } from "framer-motion";

const Framer = () => {
  const logos = Array.from({ length: 10 });

  return (
    <div className="p-4 bg-[#101010] text-white pt-[100px] pb-[120px]">
      {/* Title */}
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold mb-[30px]">Trusted by the world leaders</h4>
      </div>

      {/* Fading container */}
      <div
        className="relative w-[800px] mx-auto overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Scrolling strip */}
        <motion.div
          className="flex space-x-6 bg-[#101010] relative z-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-6">
              {logos.map((_, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center gap-[10px] font-bold text-2xl text-white/20"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/10"
                  >
                    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
                  </svg>
                  <h4>Framer</h4>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Framer;
