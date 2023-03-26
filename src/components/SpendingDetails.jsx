import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import getPrice from "../utils/CartCount";
function SpendingDetails({cartInfo, handleCheckout}) {
    return (
        <div className="border-2  px-2 py-5 rounded-xl">
        <p className="text-[16px] font-medium flex-wrap flex md:text-lg">
          Spending Details
        </p>
        <p> {cartInfo.length} item(s)</p>
        <p>Discount: <TbCurrencyNaira className="inline-block text-lg mt-[-2px] mr-[-6px]"/> 0</p>
        <p>Delivery Fee:<TbCurrencyNaira className="inline-block text-lg mt-[-2px] mr-[-6px]"/> 0 </p>
        <p className="text-green-500 text-[16px]  md:text-lg">Total Spent:<TbCurrencyNaira className="inline"/>{getPrice(cartInfo)} </p>
        <div className="pb-10">
          <div className="my-1 mt-5">
              <button onClick={handleCheckout} className="text-white bg-blue-500 px-4 py-2 rounded-md">
                  Pay on delivery
              </button>   
          </div>
          <br/>
          <div className="my-1">
              <Link className="text-white bg-red-500 px-8 py-2 rounded-md">
              Credit Card
              </Link>
          </div>
        </div>
      </div>
    )
}

export default SpendingDetails
