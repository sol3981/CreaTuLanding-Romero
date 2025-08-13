import { app } from '../firebaseConfig';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from 'react';

export function CheckoutForm({ onSendForm }) {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    });

    const x = 1;

    const handleClick = () => {
        onSendForm(x)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleCompra = () => {
        const db = getFirestore(app);
        const ventasCollection = collection(db, "ventas");

        const elPedido = addDoc(ventasCollection, {
            nombre: formData.nombre,
            apellido: formData.apellido,
            telefono: formData.telefono,
            email: formData.email,
            carrito: [], // Aquí deberías pasar el carrito real
            fecha: new Date().toISOString(),
        });

        elPedido
            .then((respuesta) => {
                console.log(respuesta.id);
                // Aquí agregamos el alert
                alert("¡Gracias por su compra!");
                
                // Opcional: limpiar el formulario después de la compra
                setFormData({
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    email: ''
                });
            })
            .catch((error) => {
                console.log(error);
                alert("Hubo un error al procesar su compra. Inténtelo nuevamente.");
            })
    }

    return (
        <div className="checkout-form">
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej: Sol" 
                />
            </div>
            
            <div>
                <label htmlFor="apellido">Apellido</label>
                <input 
                    type="text" 
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    placeholder="Ej: Romero" 
                />
            </div>
            
            <div>
                <label htmlFor="telefono">Telefono</label>
                <input 
                    type="text" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Ej: 3425332501" 
                />
            </div>
            
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ej: solromero@gmail.com" 
                />
            </div>
            
            
            <button onClick={handleCompra}>Confirmar Compra</button>
        </div>
    )
}