import React, { useState, useEffect} from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import DetalleReporteCategoria from '../components/layout/DetalleReporteCategoria';
import Boton from '../components/ui/Boton';


const Contenedor = styled.div`
  max-width: 1200px;
  width: 60%;
  margin: 0 auto;
`;
const ContenedorSelect = styled.div`
    background: #378de5;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 3.5rem; /* 80px */
    width: 100px;
    padding: 0px 1rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: #66b2f3;
    }
`;
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
`;
const Opciones = styled.div`
    background: #0770db;
    position: absolute;
    top: 4rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
    align-items: center;
`;
const Opcion = styled.div`
    padding: 0.5rem; /* 20px */
    display: flex;
    align-items: center;
    &:hover {
        background: #66b2f3;
    }
`;

const reporteCategoria = () => {
    
    const [pedidos, setPedidos] = useState([]);
    const [newPedidos, setNewPedidos] = useState([]);
  
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);
    const [tipo, cambiarTipo] = useState('Enero');
    const [tipoM, cambiarTipoM] = useState('1641009600000');

    const [pedidosFiltrados, setPedidosFiltrados] = useState([])
     


    const obtenerPedidos = async () => {
      const { data } = await axios('/api/obtenerOrdenes');
      setPedidos(data);
    }
  
    useEffect(() => {
        obtenerPedidos()
    }, [])    


{/*    const porCategorias = pedidos.reduce((total, producto) => {
        total[producto.categoria] += producto.catidad;
        return total;
    }, {
        'Café': 0,
        'Hamburguesas': 0,
        'Pizzas': 0,
        'Donas': 0,
        'Pasteles': 0,
        'Galletas': 0,
    });*/}  
    //console.log(porCategorias)

    const meses = [
        {id: 'Enero', texto: 'Enero'},
        {id: 'Febrero', texto: 'Febrero'},
        {id: 'Marzo', texto: 'Marzo'},
        {id: 'Abril', texto: 'Abril'},
        {id: 'Mayo', texto: 'Mayo'},
        {id: 'Junio', texto: 'Junio'},
        {id: 'Julio', texto: 'Julio'},
        {id: 'Agosto', texto: 'Agosto'},
        {id: 'Septiembre', texto: 'Septiembre'},
        {id: 'Octubre', texto: 'Octubre'},
        {id: 'Noviembre', texto: 'Noviembre'},
        {id: 'Diciembre', texto: 'Diciembre'},
    ]

    const handleClick = (e) => {
        cambiarTipo(e.currentTarget.dataset.valor);
    }

    const convertirFecha = () => {
        if(tipo === 'Enero'){
            cambiarTipoM(Date.parse("2022/01/01"))
        }else if(tipo === 'Febrero'){
            cambiarTipoM(Date.parse("2022/02/01"))
        } else if (tipo === 'Marzo'){
            cambiarTipoM(Date.parse("2022/03/01"))
        } else if(tipo === 'Abril'){
            cambiarTipoM(Date.parse("2022/04/01"))            
        } else if(tipo === 'Mayo'){
            cambiarTipoM(Date.parse("2022/05/01"))            
        } else if(tipo === 'Junio'){
            cambiarTipoM(Date.parse("2022/06/01"))            
        } else if(tipo === 'Julio'){
            cambiarTipoM(Date.parse("2022/07/01"))            
        } else if(tipo === 'Agosto'){
            cambiarTipoM(Date.parse("2022/08/01"))            
        } else if(tipo === 'Septiembre'){
            cambiarTipoM(Date.parse("2022/09/01"))            
        } else if(tipo === 'Octubre'){
            cambiarTipoM(Date.parse("2022/10/01"))            
        } else if(tipo === 'Noviembre'){
            cambiarTipoM(Date.parse("2022/11/01"))            
        } else if(tipo === 'Diciembre'){
            cambiarTipoM(Date.parse("2022/12/01"))            
        }
    }

    useEffect(()=>{
        convertirFecha()

    },[tipo])
    
    const verPedidosMes = () => {

        //console.log(tipoM)

//        console.log(new Date(tipoM))

        const f = new Date(tipoM);
    //    console.log(f)

        const mesA = f.getMonth();
        console.log(mesA);

        const filtrofecha = pedidos.filter(pedido => {
            //const fecha = Number(pedido.fecha);
            const f = new Date(Number(pedido.fecha));
            const mes = f.getMonth();
            console.log(mes)

            return ((mes) === (mesA))
        })   
        
        setPedidosFiltrados(filtrofecha)  
        console.log(pedidosFiltrados) 
    }

    
    return (
        <Layout>
        <h2 css={css`margin: 20px 40px;`}>Pedidos Por Mes - Producto</h2>
        <div css={css`display: flex;`}>
            <div css={css`margin-left: 80px;`}>
                <Boton 
                    onClick={()=>verPedidosMes()}
                >Ver Pedidos</Boton>
                
                <div css={css`margin-top: 20px;`}>                
                    <label css={css`margin-bottom: 10px;`} htmlFor=''>Selecionar Mes:</label>
                    <ContenedorSelect onClick={()=> cambiarMostrarSelect(!mostrarSelect)}>
                        
                        <OpcionSeleccionada>{tipo}</OpcionSeleccionada>
                        {mostrarSelect &&
                            <Opciones>
                                {meses.map((mes)=>{
                                    return <Opcion
                                            key={mes.id}
                                            data-valor={mes.id}
                                            onClick={handleClick}
                                        >{mes.texto}</Opcion>
                            })}
                            </Opciones>
                        }
                    </ContenedorSelect>                        
                </div>
            </div>

            <Contenedor>  
                <ul>
                  {pedidosFiltrados.map((pedido) => (
                    <DetalleReporteCategoria
                        key={pedido.id}
                        pedido={pedido}
                    />
                  ))}                  
                </ul>
            </Contenedor>        
        </div>
        </Layout>
    );
}
 
export default reporteCategoria;