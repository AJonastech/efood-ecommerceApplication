import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { foodContext } from "../App";
import { cartContext } from "../App";
import Nav from "../components/Nav";
import {TbCurrencyNaira} from "react-icons/tb"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import { motion } from "framer-motion";
import SuccessAlert from "../components/SuccessAlert"
function FoodDetails() {
  const foodData = useContext(foodContext);
  const cart = useContext(cartContext);
  const [choice, setChoice]= useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [notif, setNotif] = useState(false)
  const foodid = useParams();
  const neededFood = foodData.filter((arr) => {
    return arr._id === foodid.id;
  });
useEffect(()=>{
  localStorage.setItem("cartData", JSON.stringify(cart.cartData))
},[cart.cartData])
 const populateCart = ()=>{
    const object ={...neededFood[0],
        Quantity: quantity,
        Choice: choice
    };
   
  cart.setCartData([...cart.cartData, object])
 
setNotif(true)
setTimeout(()=>{
    setNotif(false)
},3000)
 }
console.log(localStorage.getItem("cartData"))
  return (
    <main className="w-full relative">
      
      <Nav />
      {
        notif ? <SuccessAlert/> :<></>
      }
      
      <section className="pt-12 container mx-auto">
        <h2 className="text-xl mt-10 text-center mb-7 md:text-2xl">
          FOOD DETAILS
        </h2>
        <div className="container px-5 md:px-0  flex flex-col md:flex-row">
          <div className="h-[350px] basis-[100%]  ">
            <motion.img src={neededFood[0].imageUrl} className="w-full h-[280px] md:h-[350px] object-cover" alt="product image" />
          </div>
          <div className="h-[350px] basis-[100%]  md:px-4">
            <h1 className="text-lg md:text-xl text-center mt-2 mb-3 font-semibold uppercase">{neededFood[0].name}</h1>
            <div className="mb-5">
            <p className="text-lg md:text-xl font-medium inline"> Price: </p>
            <TbCurrencyNaira className="text-xl mt-[-3px] inline"/>
            <p className="text-lg inline">{neededFood[0].price}</p>
            </div>
            <div className="mb-4 flex md:flex-row flex-col md:items-center" >
            <p className="text-lg md:text-xl font-medium inline mb-3"> Choices: </p>
          <div className="flex flex-col md:flex-row ml-4">
          <button onClick={()=>{setChoice("Small")}} className="text-white w-[100%] md:w-[70px] mb-3 mr-2 bg-blue-500 rounded-md py-3 md:py-2">
                Small
            </button>
            <button onClick={()=>{setChoice("Medium")}} className="text-white w-[100%] md:w-[74px] mb-3 mr-2 bg-blue-500 rounded-md py-3 md:py-2">
                Medium
            </button>
            <button onClick={()=>{setChoice("Large")}} className="text-white w-[100%] md:w-[70px] mb-3 bg-blue-500 rounded-md  py-3 md:py-2">
                Large
            </button>
          </div>
            </div>
            <div className="flex mb-4">
            <p className="text-lg md:text-xl font-medium inline mr-3"> Quantity:  </p>
           <div className="flex">
           <button onClick={()=>{
            quantity !== 1 ? setQuantity(quantity=>quantity-1): setQuantity(1)
           }}className=" border-2 p-1 mr-2 ">
              <AiOutlineMinus className="text-2xl text-green-500 font-bold"/>
            </button>
            <p className="h-[30px] w-[30px]   mr-2 text-center pt-[0.5px]  pt-[4px] rounded-full  bg-green-500 text-white">{quantity}</p>
            <button onClick={()=>{setQuantity(quantity=>quantity+1)}}className=" border-2 p-1">
              <AiOutlinePlus className="text-2xl text-green-500 font-bold"/>
            </button>
           </div>
            </div>
            <div className="mb-4">
            <p className="text-lg md:text-xl font-medium inline"> Description: </p>
            <p className="inline">{neededFood[0].description}</p>
            </div>
            <div>
          <motion.button 
          onClick={populateCart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className='bg-green-500 text-white px-12  py-2 rounded-lg'>
          Order Now
        </motion.button>
          </div>
          </div>
       
         
        </div>
      </section>
      <section className=" px-5 md:px-0  container mx-auto leading-10 mt-[5em]">
        More Details: Food is essential for all living organisms. Plants prepare
        their own food and store in their special organs as fruits, tubers,
        seeds, etc. Animals and human beings depend on this stored food of
        plant. Bigger animals depend on smaller animals for their food. Human
        beings also depend on animals for their food. Importance of food
        Foodprovides energy. Food is needed for growth. Food helps in
        maintaining good health. Food maintains body functions. Food is
        necessary to heal wounds. Ingredients Food comprises of ingredients. An
        ingredient is a part of mixture that is added to prepare a dish.
        Ingredients vary with different types of food. Ingredients can be
        obtained from plant sources and animal sources. Example: To prepare
        boiled rice, rice and water are used, so rice and water are the
        ingredients for boiled rice. Vegetables, salt, water and spices are used
        in cooking vegetable curry, so vegetables, salt, water and spices are
        ingredients of vegetable curry.
      </section>
    </main>
  );
}

export default FoodDetails;
