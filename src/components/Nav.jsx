import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <div className="font-playfair absolute top-0 bg-transparent w-full">
      <div className=" p-5 flex justify-between w-full">
        <motion.h1
          className="uppercase text-xl"
          initial={{ y: "-50px", opacity: 0 }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          WebForge
        </motion.h1>

        <motion.div
          className=""
          initial={{ y: "-50px", opacity: 0 }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <CiMenuBurger size={30} />
        </motion.div>
      </div>
    </div>
  );
};

export default Nav;
