import React from "react";
import model from "../assets/model1.png";
import { motion } from "framer-motion";
import { IoGlobeOutline, IoStarSharp } from "react-icons/io5";
const Home = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2, // wait 3.5s before starting
        staggerChildren: 0.05, // each word comes after 0.1s
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
    <div className="relative text-center  bg-[#FFEDD5] h-screen ">
      <div className="container">
        <div className="relative pb-20 overflow-hidden w-full max-w-[1024px]  ">
          <motion.h1
            className="relative uppercase mt-10 flex justify-center items-center text-[150px]  transform scale-x-125 scale-y-200 text-[#ec9706] font-bold text-center"
            initial={{ y: "150px" }}
            whileInView={{
              y: "0",

              textShadow: "4px 4px 0px #FFEDD5, 8px 8px 0px #ed820e",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Spotlight
          </motion.h1>

          {/* Left text animation */}
          <motion.p
            className="text-[#ec9706] absolute bottom-0 left-0 text-sm hidden lg:flex"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
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
            className="text-[#ec9706] absolute bottom-0 right-0 text-sm flex"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
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
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 90 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="h-24 w-24 absolute -bottom-14 right-0 z-60"
          >
            <IoStarSharp className="h-full w-full text-[#ed820e] stroke-10 stroke-[#1d4557] " />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 z-50">
          <motion.img
            src={model}
            alt="Model Image"
            className="h-full w-full "
            initial={{ y: "430px" }}
            whileInView={{ y: "0" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
          />
        </div>
        <motion.div
          className=" flex absolute bottom-0 left-7 z-60  "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <IoGlobeOutline className="h-10 w-10 text-[#ec9706] " />
          <IoGlobeOutline className="h-10 w-10 text-[#ec9706]" />
        </motion.div>
        <motion.div
          className="absolute text-[#ec9706] bottom-0 right-7 z-60 grid grid-cols-2 border-2 divide-x w-64 h-20 text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <h3 className="row-span-2 flex items-center justify-center text-4xl font-extrabold">
            R
          </h3>
          <h3 className="border-b font-semibold text-sm">Restricted</h3>
          <p className="leading-tight">
            Under 17 requires accompanying parent or adult guardian.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="bg-[#2C5364] h-[200px] w-full absolute bottom-0 z-0"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default Home;
