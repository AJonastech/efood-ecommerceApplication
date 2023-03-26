import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { client } from '../utils/SanityClient'
import { motion } from 'framer-motion';
import {TbCurrencyNaira} from "react-icons/tb"
import { Link } from 'react-router-dom';

function LocalDishes() {
    const [localfood, setLocalfood] = useState([]);
    useEffect(()=>{
    
        const query = `*[_type == 'food' && category == 'localDish'] {
            _id,
            name,
            category,
            'imageUrl': image.asset->url,
            price,
            description,
            details
          }
          `
          client.fetch(query)
          .then((response) => setLocalfood(response))
    },[])
  



    return (
       <main className='relative w-full'>
        <Nav/>
        <section className='pt-[80px] container mx-auto'>
        <h2 className='text-xl text-center mb-7 md:text-2xl'>SPECIAL NIGERIAN MEALS</h2>
        <h1 className='text-blue-500 mb-4  text-center md:text-left font-bold text-2xl md:text-3xl'>Food Is Always Ready 24/7</h1>
        <h2 className='text-lg md:text-left text-center md:text-xl mb-7'>Check Out Our Menu And Order</h2>
        <div className="grid-container px-5 md:px-0">
        { localfood.map((food,id)=>(
    <Link to={`/food-details/${food._id}`} className='border-0 outline-none' ><div key={id} className="h-[350px] border-2">
            <div className='h-[60%] '>
               
               <motion.img
                whileHover={{scale: 0.95}}

               className="h-full  w-full object-cover" src={food.imageUrl} alt="service image" />
            </div>
            <div>
                <h2 className='text-lg text-center mt-3 font-medium md:text-xl'>{food.name}</h2>
                <h2 className='text-lg  text-center text-red-500 mt-1 font-medium md:text-xl'><TbCurrencyNaira className='inline mt-[-3px]'/>{food.price}</h2>
                <p className='text-center '>{food.category}</p>
                <div className='text-center'>
                 
                <small ><i>Best offer till next year</i></small>
                </div>

            </div>
        </div>
       </Link>
))
}
         </div>
        </section>
       </main>
    )
}

export default LocalDishes
