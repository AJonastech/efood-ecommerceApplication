import chefone from "../assets/chefs/chef1.png"
import cheftwo from "../assets/chefs/chef2.png"
import chefthree from "../assets/chefs/chef3.png"
import cheffour from "../assets/chefs/chef4.png"
function returnStr(a){
    return  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    interdum nisl et nunc facilisis, a commodo eros mollis. Nunc
    vel pellentesque est. Curabitur at odio sit amet libero
    vulputate efficitur ac nec justo. Nulla vitae mauris quam.
    Nulla quam massa, faucibus id pretium ac, mattis eu velit.
    Donec sed risus a lacus fringilla finibu${a}`
}
export const Chefdata = [
    {
        name : "Agu Jonas",
        role : "The Cookist ",
        image : chefone,
        about : returnStr("adj dd d")
    },
    {
        name : "Entekume Jeff",
        role : "Assistant cookist",
        image : cheftwo,
        about : returnStr("bd d dh d")
    },
    {
        name : "Akande Peter",
        role : "Master Cookist",
        image : chefthree,
        about : returnStr("cdhdhd jdjd")
    },
    {
        name : "Ekemmini Samson",
        role : "Kid cookist",
        image : cheffour,
        about : returnStr("dhdhd dhdh")
    }
]
