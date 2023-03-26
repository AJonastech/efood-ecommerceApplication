/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Nav from "../components/Nav";
import { useState, useContext } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { cartContext } from "../App";
import emptyImg from "../assets/delivery.png";
import { authContext } from "../App";
import Noitem from "../components/Noitem";
import SpendingDetails from "../components/SpendingDetails";
import { useNavigate } from "react-router-dom";


function Cart() {
  const [cartInfo, setCartInfo] = useState(
    JSON.parse(localStorage.getItem("cartData"))
      ? JSON.parse(localStorage.getItem("cartData"))
      : []
  );
  const cart = useContext(cartContext);
const loginStatus = useContext(authContext);
//Handles the click on payout
const navigate = useNavigate();
const handleCheckout = ()=>{
    if(loginStatus.loggedin===false){
        navigate("/login")
    }
}


function deleteCart(id){
const newData = cartInfo.filter((arr, arrid)=>{
 return arrid !== id;
})
localStorage.setItem("cartData", JSON.stringify(newData));
setCartInfo(newData); 
cart.setCartData(newData);
}

  return (
    <main className="w-full relative">
      <Nav />
      <br />
      <br />
      <br />
      <br />

      <section className="container px-4  md:px-0  mx-auto  ">
        {cartInfo.length > 0 && (
          <div className="px-3 rounded-2xl pb-5 mb-[9rem] bg-gray-100 ">
            <div className=" pt-3  flex justify-between">
              <p className="text-[16px] font-bold flex-wrap flex md:text-lg">
                Shopping Cart
              </p>
              <div>
                <button
                  onClick={() => {
                    localStorage.clear();
                    cart.setCartData([]);
                    setCartInfo([]);
                    localStorage.clear();
                  }}
                  className="text-red-500 text-[16px] md:text-lg text-underline underline font-medium cursor-pointer"
                >
                  {" "}
                  Remove
                </button>
              </div>
            </div>

            <br />

            {cartInfo.map((cartdata, id) => (
              <div
                key={id}
                className="flex mb-3 rounded-xl border-2  items-center px-2 py-1"
              >
                <div className="basis-1/4">
                  <img
                    className="w-[50px] h-[50px] object-cover md:w-[70px] md:h-[70px]"
                    src={cartdata.imageUrl}
                    alt="product image"
                  />
                </div>
                <div className="basis-1/4">
                  <p className="text-[14px] flex-wrap flex md:text-lg">
                    {cartdata.name}
                  </p>
                  <small className="text-[11px] block">{cartdata.Choice}</small>
                  <small className="text-green-500 text-[11px]">
                    available
                  </small>
                </div>
                <div className="basis-1/4">
                  <p className="text-[13px] md:text-[15px] ">
                    Quantity: {cartdata.Quantity}
                  </p>
                </div>
                <div className="basis-1/4 flex flex-col  items-center">
                  <div className='text-[14px] mb-[-4px] md:text-lg"'>
                    <TbCurrencyNaira className="inline-block mr-[-5px] mt-[-3px] text-lg" />{" "}
                    {cartdata.price}
                  </div>
                  <div className="mb-[-4px]">
                    <button>
                      <small className="text-blue-500 text-underline underline font-medium cursor-pointer">
                        Save for later
                      </small>
                    </button>
                  </div>
                  <div>
                    <button
                    onClick={()=>{
                    deleteCart(id);
                    }
                    }
                    >
                      <small className="text-red-500 text-underline underline font-medium cursor-pointer">
                        {" "}
                        Remove
                      </small>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <SpendingDetails cartInfo={cartInfo} handleCheckout={handleCheckout}/>
          </div>
        )}
        {cartInfo.length === 0 && (
          <>
          <Noitem emptyImg={emptyImg}/>
          </>
        )}
      </section>
      
    </main>
  );
}

export default Cart;
