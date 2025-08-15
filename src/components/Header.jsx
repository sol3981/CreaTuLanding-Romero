import { useState } from "react";
import { NavBar } from "./NavBar";
export function Header ({name}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen (!isMenuOpen);
  }

    return (
      <header className="header fixed-top">   
        <div className="header-container">    
         <h1 className="titleTextHome">{name}</h1>
         <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
         >
         <span></span>
         <span></span>
         <span></span>
         </button>
         
         <NavBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> 
        </div>             
      </header>  
                        
          
        
    )
   
}