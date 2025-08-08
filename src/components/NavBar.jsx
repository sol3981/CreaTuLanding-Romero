import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { ItemListConteiner } from "./ItemListConteiner";

export function NavBar () {

    const resultado = useContext(CartContext)
    console.log ("Resultado:", resultado)



    return (
    <nav>
         <NavLink to="/" className="nav-link  subText">Home</NavLink>         
         <NavLink to="/categoria/aros" className="nav-link  subText">Aros</NavLink>         
         <NavLink to="categoria/anillos" className="nav-link  subText">Anillos</NavLink>
         <NavLink to="categoria/collares" className="nav-link  subText">Collares</NavLink>
         <NavLink to="/carrito" className="nav-link  subText">
         <ShoppingCart/>
          {resultado.cantidad}
         </NavLink>
  
     
   </nav>
   )
}