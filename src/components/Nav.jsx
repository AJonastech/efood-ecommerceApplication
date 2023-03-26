/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import logo from "../assets/Logo.svg"
import {HiShoppingCart, HiMenu} from "react-icons/hi"
import {MdClose} from "react-icons/md"
import {motion} from "framer-motion"
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../App'
function Nav() {
  const navigate =useNavigate()
  const  person = JSON.parse(localStorage.getItem("userProfile")) || {name: "", picture:""};
  const loggedin =  JSON.parse(localStorage.getItem("loggedin"));
   const cart = useContext(cartContext);
   const [nav, setNav]=useState(false);
    const handleSidebar = ()=>{
           setNav(!nav)
    }
    return (
      <>
        <header className="fixed  w-full ">
          <div className="bg-white container border-b-2  z-1 px-4 mx-auto flex items-center justify-between">
            <div className="basis-[100px] grow-0 ">
              <img
                src={logo}
                className="w-[100%] h-[65px]"
                alt="Business Logo"
              />
            </div>
            <nav className="hidden md:block">
              <ul className=" md:flex justify-between">
                <Link to="/">
                  <li className="hover:text-red-500 cursor-pointer mx-2 text-lg">
                    Food
                  </li>
                </Link>
                <Link to="/localdish">
                  <li className="hover:text-red-500 cursor-pointer mx-2 text-lg">
                    Local Dishes
                  </li>
                </Link>
                <li className="hover:text-red-500 cursor-pointer mx-2 text-lg">
                  Drinks
                </li>
                <li className="hover:text-red-500 cursor-pointer mx-2 text-lg">
                  Contact Us
                </li>
              </ul>
            </nav>

            <div className="flex items-center relative ">
              <Link to="/cart">
                <HiShoppingCart className="text-red-500 mr-4 mt-2 text-2xl" />
                <p className="absolute text-[9px] top-[-0.75px] p-2 left-[17px] text-white bg-green-500 rounded-full w-[15px] flex items-center justify-center text-center h-[15px]">
                  {cart.cartData.length}
                </p>
              </Link>
              {loggedin === true ? (
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="flex items-center mb-[-5px]"
                >
                  <p className="text-sm">{person.name}</p>
                  <img
                    className="ml-3 w-[20px] h-[20px] rounded-full border-2"
                    src={person.picture}
                    alt="image"
                  />
                </div>
              ) : (
                <div className="">
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="bg-red-500 rounded-md text-white px-3 py-1"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={handleSidebar}>
                <HiMenu className="text-red-500 text-2xl" />
              </button>
            </div>
          </div>
        </header>
        {nav ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            className="md:hidden w-1/2 h-screen bg-red-500 fixed top-0 right-0"
          >
            <ul className="relative text-white w-full h-full flex items-center justify-center flex-col">
              <button
                onClick={handleSidebar}
                className="absolute text-white top-10 right-6"
              >
                {" "}
                <MdClose className="text-2xl text-red" />
              </button>
             <Link to="/"> <li className="py-3 text-lg">Food</li></Link>
             <Link to="/localdish"><li className="py-3 text-lg">Local Dishes</li></Link> 
              <li className="py-3 text-lg">Drinks</li>
              <li className="py-3 text-lg">Contact Us</li>
            </ul>
          </motion.div>
        ) : (
          <></>
        )}
      </>
    );
}

export default Nav
