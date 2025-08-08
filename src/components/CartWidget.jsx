import { useState } from "react";
import { CheckoutForm } from "./Checkoutform";

export function CartWidget () {

    const [data, setData] = useState("Sin data recibida")

    const handleSendForm = (data) => {
        setData(data)
    }

    return (
        <div className="cart-container">
            <h1 className="texto">carrito</h1>
            <p>{data}</p>
            <CheckoutForm
               onSendForm = {handleSendForm}
            />
        </div>
    )
}
