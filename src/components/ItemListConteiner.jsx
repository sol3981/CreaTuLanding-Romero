import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { app } from '../firebaseConfig';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { Item } from './Item.jsx';

export function ItemListConteiner() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const resultado = useParams()
    console.log("resultado:", resultado)

          
    const handleTraerProductos = () => {
        const db = getFirestore (app)
        const productosCollection = collection (db, "productos")
        const elPedido = getDocs (productosCollection)
       
        elPedido 
            .then((res)=>{                                
                const productosFinales = []

                res.docs.forEach((producto)=>{
                    const finalProduct ={
                        id: producto.id,
                        ...producto.data()
                    }

                    productosFinales.push(finalProduct)

                })

                console.log(productosFinales)
                setProductos(productosFinales)
                setLoading(false)
            })       
            .catch(() =>{
                console.log ("Error al obtener los productos")
                setLoading(false)
            })
    }
 
    const handleTraerProductosCategoria=()=>{
        const db = getFirestore (app)
        const productosCollection = collection (db, "productos")
        const filtro = query(productosCollection,where("categoria", "==", resultado.categoria))
        const elPedido = getDocs (filtro)
        

        elPedido 
            .then((res)=>{                                
                const productosFinales = []

                res.docs.forEach((producto)=>{
                    const finalProduct={
                        id : producto.id,
                        ...producto.data()
                    }
                    productosFinales.push(finalProduct)

                })

                console.log(productosFinales)
                setProductos(productosFinales)
                setLoading(false)
            })       
            .catch(() =>{
                console.log ("Error al obtener los productos")
                setLoading(false)
        })
    }

    useEffect(() => {
        if (resultado.categoria){
            handleTraerProductosCategoria()
        } else {
            handleTraerProductos()
        }     
    },[resultado.categoria]);


    if (loading) {
        return <div>Cargando productos...</div>;
    }

    

    
    return (
        <div>
            <h2 className="titleText">Nuestros Productos</h2>
            {productos.map((producto, indice) => {
                return(
                    <Item key={producto.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }} producto = {producto}/>
                )
                
            })}
        </div>
    )
}