import {useEffect, useState } from 'react';

import axios from 'axios';
import {url} from '../helpers/url';

const ListCustomHook = () => {
    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
            axios.get(url)
            .then(response => {
                setRegistro(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
         axios.delete(url+id)
         .then(response => {
             getData();
           console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }
    return {
        registro,
        getData,
        deleteData
    }

};

export default ListCustomHook;
