import { Truck, Package } from 'lucide-react';
import { ItemCount } from './ItemCount';

export function ItemDetail({ producto }) { 
        

    return (           
        <article className="detalle-container">
            <h2>{producto.nombre}</h2>
            
            <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                width="400" 
                style={{ borderRadius: '8px', marginBottom: '15px' }}
            />
            
            <p className="subText" style={{ fontSize: '24px', color: '#2c5530', fontWeight: 'bold' }}>
                Precio: {Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(producto.precio)}
            </p>
            
            <p style={{ margin: '15px 0', lineHeight: '1.6' }}>
                <strong>Descripción:</strong> {producto.descripción}
            </p>

            <p><strong>Categoría:</strong> {producto.categoria}</p>
            
           
            <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
                <Package size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                <strong>Stock disponible:</strong> {producto.stock || 'Disponible'} unidades
            </div>

            
            <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#e8f5e8', borderRadius: '5px' }}>
                <Truck size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                <strong>Envío:</strong> 
                <ul style={{ marginTop: '8px', paddingLeft: '25px' }}>
                    <li>Envío gratis en compras superiores a $50.000</li>
                    <li>Tiempo de entrega: 3-5 días hábiles</li>
                    <li>Retiro gratis en sucursal</li>
                </ul>
            </div>

            <ItemCount producto={producto}/>

          
        </article>                                                         
    );
}