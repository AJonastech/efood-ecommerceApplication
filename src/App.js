import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import { client } from "./utils/SanityClient";
import { createContext } from "react";
import { useState, useEffect } from "react";
import LocalDishes from "./Pages/LocalDishes";
import FoodDetails from "./Pages/FoodDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
export const foodContext = createContext();
export const cartContext = createContext();
export const authContext = createContext();
function App() {

  const [foodData, setFoodData] = useState([]);
  const [cartData, setCartData]= useState(JSON.parse(localStorage.getItem("cartData")) ?JSON.parse(localStorage.getItem("cartData")) : []);
  const [loggedin, setLoggedin]= useState(localStorage.getItem("loggedin") || false)

  useEffect(() => {
    const query = `*[_type == 'food'] {
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
      .then((response) => setFoodData(response))



  }, [])



  return (
<authContext.Provider value={{loggedin,setLoggedin}}>


    <foodContext.Provider value={foodData}>
      <cartContext.Provider value={{cartData,setCartData}}>

      
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/localdish" element={<LocalDishes/>}/>
        <Route path="/food-details/:id" element={<FoodDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes> 
   </cartContext.Provider>
    </foodContext.Provider>
</authContext.Provider>
  );
}

export default App;
