/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {Chefdata} from "../utils/Chefdata"
import family from "../assets/family.png"
import { useState, useEffect } from 'react'
import {motion} from "framer-motion"


function Chefs() {
    const [chef, setChef]= useState(0);
   
    
    useEffect(() => {
        
        const interval = setInterval(() => {
          setChef(chef =>chef % 3 + 1);
        }, 3000); // update index three every second
    
        return () => clearInterval(interval);
      }, []);
 
  
        return (


          <div>
            <h2 className="text-center mb-7 md:text-left text-xl font-bold md:text-2xl">
              OUR CHEFS
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="px-5 md:px-0 md:mb-0 mb-7 basis-1/2">
                <motion.p
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{duration:1}}
                className="leading-10  mt-4">
                {Chefdata[chef].about}
                </motion.p>
                <div className="flex mt-5">
                  <img
                    className="w-[50px] object-cover rounded-full h-[50px]"
                    src={Chefdata[chef].image}
                    alt="Chef's Picture"
                  />
                  <div className="ml-3">
                    <p className="font-bold">{Chefdata[chef].name}</p>
                    <p>
                      <small>{Chefdata[chef].role}</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 px-5">
                <motion.img
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{duration:1}}
                  className="w-full h-[300px] object-cover"
                  src={Chefdata[chef].image}
                  alt="A hppy Family"
                />
              </div>
            </div>
          </div>
          
        );
}

export default Chefs
