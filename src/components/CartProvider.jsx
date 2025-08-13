import { createContext, useState } from "react";

export const CartContext = createContext();



export function CustomCartProvider({children}) {
    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);

    
    const updateTotals = (carritoActualizado) => {
        const totalItems = carritoActualizado.reduce((total, item) => total + item.cantidad, 0);
        setCantidad(totalItems);
        
        const total = carritoActualizado.reduce((total, item) => total + (item.precio * item.cantidad), 0);
        setPrecioTotal(total);
    };

    
    const handleAgregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            const existingProduct = prevCarrito.find(item => item.id === producto.id);

            if (existingProduct) {
                
                const updatedCarrito = prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
                updateTotals(updatedCarrito);
                return updatedCarrito;
            } else {
                const nuevoProducto = { ...producto, cantidad: 1 };
                const updatedCarrito = [...prevCarrito, nuevoProducto];
                updateTotals(updatedCarrito);
                return updatedCarrito;
            }
        });
    };

    
    const handleEliminarDelCarrito = (id) => {
        setCarrito(prevCarrito => {
          
            const updatedCarrito = prevCarrito.filter(item => item.id !== id);
            updateTotals(updatedCarrito);
            return updatedCarrito;
        });
    };

   
    const handleVaciarCarrito = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setCantidad(0);
    };

    
    const handleActualizarCantidad = (id, nuevaCantidad) => {
        if (nuevaCantidad <= 0) {
            handleEliminarDelCarrito(id);
            return;
        }
        
        setCarrito(prevCarrito => {
            const updatedCarrito = prevCarrito.map(item =>
                item.id === id 
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            );
            
            updateTotals(updatedCarrito);
            return updatedCarrito;
        });
    };

    const elValorDelContexto = {
        cantidad: cantidad,
        precioTotal: precioTotal,
        carrito: carrito,
        setCantidad: setCantidad,
        handleAgregarAlCarrito: handleAgregarAlCarrito,
        handleEliminarDelCarrito: handleEliminarDelCarrito,
        handleVaciarCarrito: handleVaciarCarrito,
        handleActualizarCantidad: handleActualizarCantidad,
    };

    return (
    <CartContext.Provider value={elValorDelContexto}>
        {children}
    </CartContext.Provider>
   );
}