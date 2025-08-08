import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { CartContext } from './CartProvider.jsx';
import { app } from '../firebaseConfig';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail.jsx';

export function ItemDetailConteiner() {
    const resultado2 = useContext(CartContext);
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const resultado = useParams();
    console.log("resultado:", resultado);
   

    useEffect(() => {
        if (resultado.id) {
            handleTraerDetalle();
        }
    }, [resultado.id]);

    const handleTraerDetalle = () => {        
        const db = getFirestore(app);
        const productosCollection = collection(db, "productos");
        const filtro = doc(productosCollection, resultado.id);
                       
        const elPedido = getDoc(filtro);

        elPedido 
            .then((respuesta) => {                                
                                
                if (respuesta.exists()) {
                    const data = respuesta.data();
                    setProducto(data);
                } else {
                    console.log("No se encontró el producto");
                    setError("Producto no encontrado");
                }
                setLoading(false);
                
            })       
            .catch((error) => {
               setError("Error al cargar el producto");
                setLoading(false);
            });
    };

    const handleClick = () => {
        resultado2.setCantidad(2);
    };

   

    if (loading) {
        
        return <div>Cargando producto...</div>;
    }

    if (error) {
        return <div style={{color: 'red'}}>Error: {error}</div>;
    }

    if (Object.keys(producto).length === 0) {
        return <div>No se encontraron datos del producto</div>;
    }

    

    return (
        <div>
        <ItemDetail producto={producto}/>
        </div>
    );
}