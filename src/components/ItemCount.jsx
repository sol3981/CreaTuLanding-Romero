import { Plus, Minus, Truck, Package } from 'lucide-react';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './CartProvider';

export function ItemCount() {

    const [cantidad, setCantidad] = useState(1);
    const resultado = useContext(CartContext);

    const handleAgregar = () => {
        setCantidad(cantidad + 1);
    };

    const handleQuitar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleClick = () => {
        resultado.setCantidad(cantidad);
    };
    



    return(
        <div>
            
            <div className="detalle-producto">
                <span><strong>Cantidad:</strong></span>
                <button className="btn-cantidad"onClick={handleQuitar} disabled={cantidad <= 1}>
                    <Minus size={16} />
                </button>
                <span  style={{ padding: '0 15px', fontSize: '18px', fontWeight: 'bold' }}>
                    {cantidad}
                </span>
                <button className="btn-cantidad" onClick={handleAgregar}><Plus size={16} /></button>
            </div>

            
            <div className="detalle-botones">
                <Link to="/">
                    <button className="btn-producto">
                        Volver a Productos
                    </button>
                </Link>
                
                <Link to="/carrito">
                    <button className="btn-producto" onClick={handleClick} >
                        <Plus size={16} />Agregar al Carrito ({cantidad})
                    </button>
                </Link>
            </div>
        </div>
    )
}
    








