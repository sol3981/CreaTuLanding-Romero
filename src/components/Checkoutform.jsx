import { app } from '../firebaseConfig';
import { addDoc, collection, getFirestore } from "firebase/firestore";

export function CheckoutForm({ onSendForm }) {

    const x = 1;

    const handleClick = () => {
        onSendForm (x)
    }

    const handleCompra = () => {
        const db = getFirestore (app)
        const ventasCollection = collection(db, "ventas")

       const elPedido = addDoc(ventasCollection , {
            nombre : "sol",
            apellido : "romero",
            telefono : "3425332501",
            email : "solromero@gmail.com",
            carrito : [],

        })
        elPedido
            .then((respuesta)=>{
                console.log(respuesta.id)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
 

    return (
        <div>
            <div>

             <label htmlFor="nombre">Nombre</label>
             <input type="text" placeholder="Ej:Sol" />

            </div>
            <div>

             <label htmlFor="apellido">Apellido</label>
             <input type="text" placeholder="Ej:Romero" />

            </div><div>

             <label htmlFor="telefono">Telefono</label>
             <input type="text" placeholder="Ej:3425332501" />

            </div><div>

             <label htmlFor="email">Email</label>
             <input type="text" placeholder="Ej:solromero@gmail.com" />

            </div>
            


            <button onClick={handleClick}>Comprar</button>
            <button onClick={handleCompra}>Agregar producto</button>
        </div>
    )
}