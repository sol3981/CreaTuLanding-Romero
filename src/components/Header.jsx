import { NavBar } from "./NavBar";
export function Header ({name}) {
    return (
      <header className="header fixed-top ">            
        <h1 className="titleText">{name}</h1>
        <NavBar />        
      </header>               
          
        
    )
   
}