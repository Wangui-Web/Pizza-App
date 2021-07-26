import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza5.jpg";
import pizza3 from "./images/pizza3.jpg";

export const ProductData = [
    {
        image: pizza1,
        id:Math.floor(Math.random() *2000000),
        alt:"Pizza1",
        name: "Supreme Pizza",
        desc: "Ingredients: Roma Tomatoes,Onions, Chicken, Periperi,Feta Cheese,olives,basil and Oregano Sauce",
        price: "Price: Ksh.850 medium, Ksh.1050 large, Ksh.150 Per Slice",
        button: "Place your Order"
    },
    {
        image: pizza2,
        id: Math.floor(Math.random() * 2000000),
        alt:"Pizza2",
        name: "Veggie Pizza",
        desc: "Ingredients: Roma Tomatoes,Onions, Lettuce, Periperi,olives,basil and Oregano and Grape Sauce",
        price: "Price: Ksh.950 medium, Ksh.1150 large, Ksh.200 Per Slice",
        button: "Place your Order"
    },
    {
        image: pizza3,
        id: Math.floor(Math.random() * 2000000),
        alt:"Pizza3",
        name: "Cheesy Pizza",
        desc: "Ingredients: Roma Tomatoes,Onions,Italian Sausage,Feta Cheese,Olives,Basil,Mozerella Cheese or Permesan Cheese and Marinara Sauce",
        price: "Price: Ksh.900 medium, Ksh.1000 large, Ksh.180 Per Slice",
        button: "Place your Order"
    }
]