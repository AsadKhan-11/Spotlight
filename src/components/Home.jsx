import React from "react";
import model from "../assets/model1.png";
import { motion } from "framer-motion";
import { IoGlobeOutline, IoStarSharp } from "react-icons/io5";
import Nav from "./Nav";
const Home = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2, // wait 2s before starting
        staggerChildren: 0.05, // each word comes after 0.05s
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="font-playfair relative text-center  bg-[#FFEDD5] h-dvh ">
      <Nav />
      <div className="relative gap-y-10 px-5 pt-5 items-end place-items-center grid grid-rows-[auto_1fr] h-full w-full">
        {/* row1 */}
        <div className=" mt-[10vh] relative lg:pb-20 pb-10 overflow-hidden  w-full   ">
          <motion.h1
            className="relative uppercase font-playfair flex justify-center items-center text-[40px]  sm:text-[80px]  md:text-[100px] lg:text-[130px] transform scale-x-125 scale-y-200  font-bold text-center"
            initial={{ y: "150px" }}
            animate={{
              y: "0",

              textShadow: "4px 4px 0px #FFEDD5, 8px 8px 0px #ed820e",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Spotlight
          </motion.h1>
          <div className="font-semibold font-playfair absolute bottom-0 w-full justify-between text-sm hidden lg:flex  items-end px-[5vw]">
            {/* Left text animation */}
            <motion.p
              className="text-[#ec9706]  "
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {"Your life is your movie, every day a new scene"
                .split(" ")
                .map((wordText, index) => (
                  <motion.span
                    key={index}
                    variants={word}
                    className="mr-1 inline-block"
                  >
                    {wordText}
                  </motion.span>
                ))}
            </motion.p>

            {/* Right text animation */}
            <motion.p
              className="text-[#ec9706] "
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {"Step up, take the lead, and make it unforgettable."
                .split(" ")
                .map((wordText, index) => (
                  <motion.span
                    key={index}
                    variants={word}
                    className="mr-1 inline-block"
                  >
                    {wordText}
                  </motion.span>
                ))}
            </motion.p>
          </div>
        </div>

        {/* row2 */}
        <div className="  relative items-end w-full h-full z-60 pb-5 flex justify-between">
          {/* Star icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 90 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="h-24 w-24 hidden lg:block absolute bottom-[40%] right-[20%] z-60"
          >
            <IoStarSharp className="h-full w-full text-[#ed820e] stroke-10 stroke-[#1d4557] " />
          </motion.div>

          <motion.div
            className="hidden lg:flex absolute bottom-1/5 left-1/7 uppercase flex-col items-start gap-0.5 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <p className="text-white text-xs">Starring</p>
            <span className="starring">The Chosen one</span>
            <span className="starring">The Protagonist</span>
            <span className="starring">The Showstopper</span>
            <span className="starring">The Vissionary</span>
          </motion.div>
          <motion.div
            className="absolute left-1/2 bottom-0 -translate-x-1/2 h-auto  min-w-[450px] lg:min-w-[400px]   "
            initial={{
              translateY: "100%",
            }}
            animate={{
              translateY: "0%",
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
          >
            <motion.div
              initial={{ filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" }}
              animate={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            >
              <img
                src={model}
                alt="Model Image"
                className="h-full w-auto object-contain drop-shadow-2xl   "
              />
            </motion.div>
          </motion.div>
          {/* Icons group (can overlap) */}
          <motion.div
            className="hidden sm:flex order-1  -space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <IoGlobeOutline className="h-10 w-10 text-[#ec9706]" />
            <IoGlobeOutline className="h-10 w-10 text-[#ec9706]" />
          </motion.div>

          {/* Right restricted box */}
          <motion.div
            className="order-3 hidden  text-[#ec9706] font-sans uppercase sm:grid grid-cols-[50px_1fr]  border-2 max-w-[150px] md:max-w-[200px]   text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <h3 className="row-span-2 flex items-center  text-center border-r-2 border-r-[#ec9706] justify-center text-4xl font-extrabold">
              R
            </h3>
            <h3 className="border-b font-semibold text-sm">Restricted</h3>{" "}
            <p className="leading-tight text-[10px] px-1">
              Rated for being really awesome{" "}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-[#2C5364] h-[35%] w-full absolute bottom-0 z-0"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default Home;
