export default function getPrice(cartInfo){
    var count = 0;
    let  priceArray = cartInfo.map((arr)=>{
         
         return arr.price* arr.Quantity;
       })
       for (let i=0; i<priceArray.length;i++){
         count+=priceArray[i];
       }
 return count;
       
   }
  