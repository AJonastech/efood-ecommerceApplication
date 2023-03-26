/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { authContext } from "../App";
import { client } from "../utils/SanityClient";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import Nav from "../components/Nav";
function Login() {
  const [user, setUser] = useState([]);
  const loggedIn = useContext(authContext);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  const logOut = () => {
    googleLogout();
    loggedIn.setLoggedin(false);
    localStorage.removeItem("userProfile");
    localStorage.removeItem("loggedin");
  };
  const postSanity = (data) => {
    const { id, name, picture } = data;
    const doc = {
      _id: id,
      _type: "user",
      userName: name,
      image: picture,
    };
    localStorage.setItem("userProfile", JSON.stringify(data));
    localStorage.setItem("loggedin", true);
    client
      .createIfNotExists(doc)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("The Error:", err);
      });
  };
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          postSanity(res.data);
          loggedIn.setLoggedin(true);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  const person = JSON.parse(localStorage.getItem("userProfile")) || {
    name: "",
    picture: "",
  };

  return (
    <main className="w-full bg-dark-500 h-full">
      {!loggedIn.loggedin && (
        <div className="px-5 bg-slate-50 w-full  h-screen">
          <div className="flex justify-center mt-12">
            <img
              className="w-[150px] h-[80px]"
              src={logo}
              alt="business logo"
            />
          </div>
          <h2 className="text-center md:text-xl text-lg">
            Please Sign in to Continue Shopping with us
          </h2>
          <div className="flex justify-center">
            <button onClick={login} className="flex mt-8 flex-row items-center">
              <FcGoogle className="w-[40px] h-[40px] border-2" />
              <p className="bg-blue-500 flex items-center text-white h-[40px] text-lg md:text-xl px-2">
                Please Sign in with Google
              </p>
            </button>
          </div>
          <Link to="/">
            <p className="text-md text-center mt-10 underline">
              Or go back to the homepage
            </p>
          </Link>
        </div>
      )}
      {loggedIn.loggedin && (
        <main>
          <Nav />
          <section className="container pt-[90px]">
            <div className="flex justify-center px-5 md:px-0 w-full">
              <div className="flex flex-col py-7 items-center px-3 border-2 ">
                <div className="flex text-lg mb-3">
                  Welcome,<p className="text-blue-500 ml-2">{person.name}</p>{" "}
                </div>
                <p className="mb-3 text-center text-md ">
                  {" "}
                  You are signed in as {person.email}
                </p>
                <picture  className="w-[80px] h-[80px] rounded-full mt-3 mb-3">
                  <img
                    className="w-full rounded-full"
                    src={person.picture && person.picture}
                    alt="your profile photo"
                  />
                </picture>
                <div>
                  <div className="flex  justify-between">
                    <div className="mr-5">
                      <button
                        onClick={logOut}
                        className="text-white  bg-red-500 w-[90px] px-1 rounded-md py-2"
                      >
                        Sign Out
                      </button>
                    </div>
           
                    <div className="ml-5">
                      <button
                        onClick={() => {
                          navigate("/cart");
                        }}
                        className="text-white bg-blue-500 w-[90px] text-md inline-block px-1 rounded-md py-2"
                      >
                        To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </main>
  );
}

export default Login;
