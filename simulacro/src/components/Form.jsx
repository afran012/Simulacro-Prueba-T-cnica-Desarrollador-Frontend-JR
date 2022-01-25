import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/css/Form.css';

export const Form = () => {

    const [producto, setProducto] = useState({
        product: '',
        imagen: '',
        precio: ''
    })

    const { product , imagen , precio} = producto;

    const postData = () => {
         axios.post(url,producto)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setProducto({
          ...producto,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            producto.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Productos</h2>
           <hr/>
               <div>
                   <label>Nombre Producto</label>
                   <input id="inputNombre" name="product" value={product} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Precio</label>
                   <input id="inputNumero" type="number" name="precio" value={precio} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
