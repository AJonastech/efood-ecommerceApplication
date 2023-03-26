import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'

function Payout() {
    return (
        <section className="absolute w-full top-0 flex justify-center items-center right-0 h-screen bg-red-500">
      <form className="bg-white pt-6 p-4 rounded-lg shadow-md w-[100%] max-w-[500px]">
        <p className="text-lg md:text-2xl font-semibold text-center">Pay On Delivery</p>
        <p className="text-center mb-4"><small>Enter Your Details Here</small></p>
  <div className="mb-5">
   
    <input
      className=" appearance-none border-2 text-md rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
    
      type="text"
      placeholder="Enter Name"
    />
  </div>
  <div className="mb-5">
   
    <input
      className=" appearance-none border-2 text-md rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
    
      type="text"
      placeholder="Enter Number"
    />
  </div>
  <div className="mb-5">
   
    <input
      className=" appearance-none border-2 text-mdrounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
    
      type="text"
      placeholder="Enter City"
    />
  </div>
  <div className="mb-5">
  
    <input
      className="appearance-none border-2 text-md rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
    
      type="text"
      placeholder="Enter Address"
    />
  </div>
 <div className="text-center">
    <div className="mb-4 flex justify-center text-lg ">Total payment is <p className="text-green-500">&nbsp;<TbCurrencyNaira className="inline-block text-xl mt-[-3px] mr-[-5px]"/> 14000&nbsp;</p> on delivery </div>
 <button className="bg-green-500 text-white px-4 py-2 rounded-md"> Order Now</button>
 </div>
</form>

      </section>
    )
}

export default Payout
