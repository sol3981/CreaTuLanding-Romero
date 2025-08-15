import { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "./CartProvider";
import { Trash2, Plus, Minus } from 'lucide-react';


export function CartWidget () {
        const { 
        carrito, 
        precioTotal, 
        cantidad, 
        handleEliminarDelCarrito, 
        handleVaciarCarrito,
        handleActualizarCantidad 
    } = useContext(CartContext);

     const [data, setData] = useState('');

    const handleSendForm = (formData) => {
        setData(JSON.stringify(formData));
        console.log('Datos del formulario:', formData);
    };

    if (carrito.length == 0){
        return (
            <div className="cart-container">
                <h2>Carrito de Compras</h2>
                <p>Tu carrito está Vacío</p>
                <Link to="/" className="nav-link">Continuar Comprando</Link>
            </div>
        );
    }

  

    return (
        <div className="cart-container">
            <h2 className="titleText">Carrito de Compras ({cantidad} items)</h2>
            <div className="cart-items">
                {carrito.map(item => (
                    <div key={item.id} className="cart-item">
                        <img
                        src={item.imagen}
                        alt={item.nombre}
                        width="80"
                        height="80"
                        />

                        <div className="item-info"> 
                            <h4>{item.nombre}</h4>
                            <p className="item-precio">
                                {Intl.NumberFormat("es-AR", 
                                    {
                                        style: "currency",
                                        currency: "ARS"
                                    }).format(item.precio)}                        
                            </p>
                        </div>

                        <div className="quantity-controls">
                            <button onClick={()=>handleActualizarCantidad(item.id, item.cantidad -1)} className= "quantity-btn">
                                <Minus size={16}/>
                            </button>

                            <span className="quantity-display">{item.cantidad}</span>
                            <button onClick={() => handleActualizarCantidad(item.id, item.cantidad + 1)} className="quantity-btn">
                                <Plus size={16} />
                            </button>
                        </div>

                        <div className="item-total">
                            {Intl.NumberFormat("es-AR",{
                                style: "currency",
                                currency: "ARS"
                            }).format(item.precio * item.cantidad)}
                        </div>

                        <button onClick={() => handleEliminarDelCarrito (item.id)} className="remove-btn"><Trash2 size={16} /></button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3>
                    Total: {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS"
                    }).format(precioTotal)}
                </h3>

                <div className= "cart-actions">
                    <button onClick={handleVaciarCarrito} className="clear-cart-btn">Vaciar Carrito</button>
                    <Link to="/compra"><button className="checkout-btn">Proceder al Pago</button></Link>
                </div>


            </div>



            <p>{data}</p>
            
        </div>
    )
}
