import React, {useContext, useState} from 'react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale'; 
import { css } from '@emotion/react';
import {useRouter} from 'next/router';

const Cliente = styled.li`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
    box-shadow: 0 12px 20px 0 rgb(80 85 223 / 37%);
    margin: 0 0 20px 0;
    background-color: #79bbff;
`; 
const DescripcionCliente = styled.div`
   //flex: 0 1 600px;
   //column-gap: 2rem;
    flex: 1 1 auto;
`;
const Titulo =styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: #0770db;

    :hover {
        cursor: pointer;
        color:#04519f;
    }
`;
const TextoDescripcion = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #464545;
    font-weight: bold;
`;
const Comentarios = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-bottom: 2rem;
    }
    img{
        width: 2rem;
        margin-right: 2rem;
    }
    p{
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type {
            margin: 0;
        }
    }
`;
const Botonera = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 100px;

    a {
        width: auto;
        margin: 5px auto;
    }
`;
const Cuenta = styled.div`
    display: flex;
    place-content: space-between;
`
const Parrafo = styled.p`
    margin: 0;
    font-size: 15px;    
`;

const DetalleCliente = ({pedido}) => {

    const router = useRouter();    

    return (
        <Cliente>
            <DescripcionCliente>
                <div>
                    <p css={css`font-weight: bold;color: #074cdb;margin: 5px 0;`}
                        >Pedido hace: { formatDistanceToNow(new Date(Number(pedido.fecha)), {locale: es})}
                    </p>
                    <TextoDescripcion>NOMBRE :{' '}<span css={css`color: black;`}>{pedido.nombre}</span></TextoDescripcion>
                    <TextoDescripcion>CELULAR :{' '}<span css={css`color: black;`}>{pedido.celular}</span></TextoDescripcion>
                    <TextoDescripcion>DIRECCION :{' '}<span css={css`color: black;`}>{pedido.direccion}</span></TextoDescripcion>
                    <TextoDescripcion>TOTAL :{' '}<span css={css`color: black;`}>{pedido.total}{' Bs'}</span></TextoDescripcion> 
                    <TextoDescripcion>PRODUCTOS :</TextoDescripcion>                  

                    <div css={css`
                                width: 80%;
                                margin: auto;
                            `}>
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
            </DescripcionCliente>

{/*         <Botonera>
                <Boton onClick={()=>router.push("{/pedido.id}")} key={pedido.id}>ver pedido</Boton>
                <Boton onClick={()=>pedidoCompletado()}>COMPLETADO</Boton>
            </Botonera>*/}
        </Cliente>    
    );
}
 
export default DetalleCliente;