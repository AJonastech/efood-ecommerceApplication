import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { motion ,AnimatePresence} from "framer-motion";

function SuccessAlert() {
  return (
    <div className="fixed   pt-[70px]  left-0 w-full flex justify-center">
       
      <motion.div
               
                 initial={{ opacity: 0, y: 50, scale: 0.3 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
           
        className="notifAlert rounded-md  px-3 flex items-center py-2 bg-white"
      >
        <BsCheckCircleFill className="  text-xl text-green-500" />
        <p className="ml-2 text-lg ">Item added to cart</p>
      </motion.div>
    
    </div>
  );
}

export default SuccessAlert;
