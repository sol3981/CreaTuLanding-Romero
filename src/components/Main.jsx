import {Routes, Route} from "react-router-dom"
import { Home } from "./Home"
import { ItemListConteiner } from "./ItemListConteiner"
import { Item } from "./Item.jsx"
import { CartWidget } from "./CartWidget.jsx"
import { ItemDetailConteiner } from "./ItemDetailContainer.jsx"


export function Main ({name}){
  return (
    <main className="contMain container-fluid">
     <Routes>
      <Route path="/"  element= {<Home/>}  />      
      <Route path="/categoria/:categoria"  element= {<ItemListConteiner/>} />
      <Route path ="/carrito" element= {<CartWidget />} />      
      <Route path ="/productos/:id" element= {<ItemDetailConteiner />} />
      <Route path ="/item/:id" element= {<Item />} />
            
     </Routes>

      
      
    </main>
  )
    
}
