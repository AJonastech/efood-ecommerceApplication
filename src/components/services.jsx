/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { serviceData } from '../utils/services';
import {motion} from "framer-motion"
function Services() {
    return (
      <div className="grid-container px-5 md:px-0">
        {serviceData.map((arr,id)=>(
            <div key={id} className="h-[350px] border-2">
            <div className='h-[50%]'>
               
               <motion.img
                whileHover={{scale: 0.8}}

               className="h-full w-full object-contain" src={arr.image} alt="service image" />
            </div>
            <div>
                <h2 className='text-lg text-center mt-2 font-medium md:text-xl'>{arr.title}</h2>
                <p className='text-center px-3 text-gray-500'>{arr.description}</p>

            </div>
        </div>
        ))
        }
      </div>
    );
}

export default Services
