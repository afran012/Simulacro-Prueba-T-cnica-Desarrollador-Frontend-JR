import React from 'react';
import '../styles/css/List.css';
import ListCustomHook from './ListCustomHook';

export const List = () => {

    const {registro, deleteData } = ListCustomHook()


    console.log(registro)
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre Producto</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         registro.map(r => (
                             <tr key={r.id}>
                                 <td>{r.product}</td>
                                 <td>{r.precio}</td>
                                 <td><img src={r.imagen} width="40" height="50" alt=""/></td>
                                 <td><button onClick={() => deleteData(r.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
            </table>
        </div>
    )
}
