import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = CartContext.Provider;

export function CustomCartProvider ({children}) {

    const [cantidad,setCantidad] = useState (0)
    const [carrito , setCarrito] = useState ([])
    const [precioTotal , setPrecioTotal] = useState(0)

    const elValorDelContexto = {
        cantidad: cantidad,
        precioTotal: 0,
        carrito: [],
        setCantidad: setCantidad,

    }
    
    const handleAgregarAlCarrito = () => {}
    const handleEliminarDelCarrito = (id) => {}
    const handleVaciarCarrito= () => {
        setCarrito ([])
        setPrecioTotal (0)
        setCantidad (0)
        

    }

    return(
        <CartProvider value={elValorDelContexto}>

            {children}
        </CartProvider>
    )

}