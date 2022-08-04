import React, {useEffect, useState, useContext} from 'react';
import { FirebaseContext } from '../firebase';


const useClientes = orden => {

    const [clientes, guardarClientes] = useState([]);

    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerClientes = () => {
        firebase.db.collection('clientes').orderBy(orden, 'desc').onSnapshot(manejarSnapshot)
        }

        obtenerClientes();
    }, []);

    function manejarSnapshot(snapshot) {
        const clientes = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
        });
        
        guardarClientes(clientes);
    }

    return {
        clientes
    }
}
export default useClientes;