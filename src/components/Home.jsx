import React from "react";
import model from "../assets/model1.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="relative text-center  bg-[#FFEDD5] h-screen ">
      <div className="container">
        <div className="relative pb-20 overflow-hidden w-full max-w-[1024px]  ">
          <motion.h1
            className="relative uppercase mt-10 h-full w-full text-[150px]  transform scale-x-125 scale-y-200 text-[#ec9706] font-bold text-center"
            initial={{ y: "150px" }}
            whileInView={{
              y: "0",

              textShadow: "4px 4px 0px #FFEDD5, 8px 8px 0px #ed820e",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Spotlight
          </motion.h1>

          <p className="text-[#ec9706] absolute bottom-0 left-0 text-sm hidden lg:block">
            Your life is your movie, every day a new scene
          </p>
          <p className="text-[#ec9706] absolute bottom-0 right-0 text-sm">
            Step up, take the lead, and make it unforgettable."
          </p>
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
