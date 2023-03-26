import React from 'react'
import hero from "../assets/heroImg.png"
import {motion} from "framer-motion"
function Hero() {
    return (
        <>
        <div className='flex flex-col md:items-start items-center px-5 pt-12 basis-1/2'>
        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
         className='text-blue-500 font-bold'>Enjoy Fast Delivery</motion.p>
        <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
        
        className='text-center md:text-left text-2xl font-bold md:text-3xl leading-9 md:my-6 my-4'>Enjoy The Fastest Food Delivery Here On The Mainland..</motion.h1>
        <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
        
        className='text-center md:text-left text-gray-500 mb-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, itaque laborum. At, quam quod nobis asperiores optio numquam sunt magnam.
        </motion.p>
        <div className='mb-12 md:mt-10 md:mb-0'>
        <motion.button 
              whileHover={{ scale: 1.1, zIndex: 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className='bg-green-500 text-white px-12 py-2 rounded-lg'>
          Order Now
        </motion.button>
        </div>
       
      </div>
      <div className=' basis-1/2'>
       <img className="  object-contain h-[400px] w-full" src={hero} alt="A hero image" />
  </div>
  </>

    )
}

export default Hero
