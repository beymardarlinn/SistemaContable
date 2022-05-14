import React, {useState, useEffect} from 'react';


const useValidacion = (stateInicial, validar, fn) => {
    
    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);
    
    useEffect(()=> {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0;
            
            if (noErrores) {
                fn(); //fn=funcion qse ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    //funcions se ejcuta cuando el usuario escribe
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    //se ejecuta cuando se ase submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }

    ///cuando se realiza el evento blur
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
    }
    
    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidacion;