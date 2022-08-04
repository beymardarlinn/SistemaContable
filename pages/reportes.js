import React, {useEffect, useState, useContext} from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';
import { PrismaClient } from '@prisma/client'
import axios from 'axios';
import DetalleReporte from '../components/layout/DetalleReporte'
import Boton from '../components/ui/Boton';
import { useRouter } from 'next/router'
import { css } from '@emotion/react';

const Contenedor = styled.div`
  max-width: 1200px;
  width: 60%;
  margin: 0 auto;
`;
const Text = styled.h1`
  color: #535a6d;
  font-weight: bold;
  margin-top: 50px;
  width: 300px;
  margin: 50px auto;
`

export default function reportes () {

    const {firebase, usuario} = useContext(FirebaseContext);
    const [pedidos, setPedidos] = useState([]);

    const [verXCategoria, cambiarVerXCategoria] = useState(false);
    const router = useRouter()

    const obtenerPedidos = async () => {
      const { data } = await axios('/api/obtenerOrdenes');
      setPedidos(data);
    }
  
    useEffect(() => {
        obtenerPedidos()
    }, [])


  return (
    <div>
      <Layout>
        {usuario && (
          <div css={css`display: flex;;`}>  
            <div css={css`margin: 80px 0 0 40px;`}>
              <Boton onClick={()=>{router.push('/reporteCategoria')}}>Reporte por Categoria</Boton>
            </div>

            <Contenedor>  
              <ul>
                {pedidos.map((pedido) => (
                  <DetalleReporte
                    key={pedido.id}
                    pedido={pedido}
                  />
                ))}                  
              </ul>
            </Contenedor>
          </div>
        )}
      </Layout>
    </div>
  )
}
