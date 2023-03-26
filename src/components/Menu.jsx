/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from 'react'
import { foodContext } from '../App'
import { useContext } from 'react'
import {TbCurrencyNaira} from "react-icons/tb"
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
function Menu() {
    const foods = useContext(foodContext);
    useEffect(()=>{
        console.log(foods);
    })
    return (
        
<div className="grid-container mt-12 px-5 md:px-0">
{foods.map((food,id)=>(
    <Link key={id} to={`/food-details/${food._id}`} className='border-0 outline-none'>
  
    <div  className="h-[350px] border-2">
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
        
    
    )
}

export default Menu
