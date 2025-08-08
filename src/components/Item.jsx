import { Plus } from 'lucide-react';
import {  useContext, useState } from 'react';
import {Link} from "react-router-dom";
import { CartContext } from './CartProvider';

export function Item({producto}) { 
    
    const [cantidad, setCantidad] = useState(0);      
    const resultado = useContext (CartContext);

    const handleClick = () => {
        const nuevaCantidad = cantidad + 1;
        setCantidad(nuevaCantidad);
        resultado.setCantidad(nuevaCantidad);
    }

   

    return (
           
        <article>
            <h3>{producto.nombre}</h3>
            <p className="subText">Precio: {Intl.NumberFormat("es-AR" , {style: "currency", currency: "ARS"}).format(producto.precio)}</p>                     
            <img src={producto.imagen} alt={producto.nombre} width="100" />
            <br />
            <Link to={`/productos/${producto.id}`} className="nav-link">Ver Detalles</Link>
            <Link to ="/carrito"><button onClick={handleClick} className="nav-link"><Plus/>Agregar al Carrito{cantidad > 0 && `(${cantidad})`}</button></Link>        </article>           
                                                   
                            
        
    );
}
