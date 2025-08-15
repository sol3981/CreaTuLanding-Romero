import { Plus } from 'lucide-react';
import {  useContext, useState } from 'react';
import {Link} from "react-router-dom";
import { CartContext } from './CartProvider';

export function Item({producto}) { 
    
    const [cantidadLocal, setCantidadLocal] = useState(0);      
    const {handleAgregarAlCarrito, carrito} = useContext(CartContext);

    const productoEnCarrito = carrito.find(item=> item.id == producto.id);
    const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;

    const handleClick = () => {
       handleAgregarAlCarrito(producto);
       const nuevaCantidadLocal = cantidadLocal +1;
       setCantidadLocal(nuevaCantidadLocal);
       alert (`${producto.nombre} agregado al carrito!`);
    };

   

    return (
           
        <article >
            <div className="home-container">
              <h3 className='titleText name-product'>{producto.nombre}</h3>
              <p className="subText">Precio: {Intl.NumberFormat("es-AR" , {style: "currency", currency: "ARS"}).format(producto.precio)}</p>                     
              <img src={producto.imagen} alt={producto.nombre} width="350"  />
              <br />
              <Link to={`/productos/${producto.id}`} className="nav-link">Ver Detalles</Link> <br />
              <button onClick={handleClick} className="nav-link" ><Plus/>Agregar al Carrito{cantidadEnCarrito > 0 && `(${cantidadEnCarrito})`}</button>  
            </div>  
        </article>           
                                                   
                            
        
    );
}
