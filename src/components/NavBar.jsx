import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { ItemListConteiner } from "./ItemListConteiner";

export function NavBar ({isOpen, onClose}) {

    const handleLinkClick = () => {
        onClose();
    }

    const resultado = useContext(CartContext)
    console.log ("Resultado:", resultado)



    return (
    <nav className={`nav-menu ${isOpen ? `active` : ""}`}>
         <NavLink to="/" className="nav-link  subText" onClick={handleLinkClick}>Home</NavLink>         
         <NavLink to="/categoria/aros" className="nav-link  subText"  onClick={handleLinkClick}>Aros</NavLink>         
         <NavLink to="categoria/anillos" className="nav-link  subText"  onClick={handleLinkClick}>Anillos</NavLink>
         <NavLink to="categoria/collares" className="nav-link  subText"  onClick={handleLinkClick}>Collares</NavLink>
         <NavLink to="/carrito" className="nav-link cart-link subText" onClick={handleLinkClick}>
         <ShoppingCart/>
          <span className="cart-count">{resultado.cantidad}</span>
         </NavLink>
  
     
   </nav>
   )
}