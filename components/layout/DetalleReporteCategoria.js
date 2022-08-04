import React, {useEffect, useContext, useState} from 'react';
import {useRouter} from 'next/router'
import { FirebaseContext } from '../../firebase';
import Layout from './Layout';
import Error404 from './404';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';


const ContenedorProducto = styled.div`
    margin: 0 20px;
`
const Textos = styled.div`
    margin: 10px 20px;
    //color: #348ae3;
    p{
        font-weight: bold;
    }
`
const Cuenta = styled.div`
    display: flex;
    place-content: space-between;
`
const Parrafo = styled.p`
    margin: 0;
    font-size: 15px;    
`
const Eliminar = styled.a`
    padding: 0;
    color: #e90731;
    margin:0 0 0 5px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        background: white;
        font-weight: 700;
        color: #da552f;
    }
`
const DetalleReporteCategoria = ({pedido}) => {
     

//    console.log(porCategorias)
    
    return (
        <>
        <ContenedorProducto>                                
                <ul css={css`background-color: white;`}>
                    <div css={css``}>          
                        <div>
                            <Cuenta>
                                <h4 css={css`margin:0; padding:0;`}>PRODUCTO</h4>
                                <h4 css={css`margin:0; padding:0;`}>CANTIDAD</h4>
                            </Cuenta>
                                
                                {pedido.pedido.map((reporte, i)=>(
                                    <li
                                        key={`${reporte.usuarioId}-${i}`}
                                        css={css`border: 1px solid #e1e1e1; padding: 5px;`}
                                    >
                                        <Cuenta>
                                            <Parrafo>{reporte.nombre}</Parrafo>
                                            <Parrafo>{reporte.cantidad}</Parrafo>
                                        </Cuenta>                                       
                                    </li>
                                ))}                                                                     
                        </div>
                    </div>
                </ul>                            
        </ContenedorProducto>
    </>
    );
}
 
export default DetalleReporteCategoria;