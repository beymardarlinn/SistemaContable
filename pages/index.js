import React, {useEffect, useState, useContext} from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';
import DetalleCliente from '../components/layout/DetalleCliente';
import { css } from '@emotion/react';
import { PrismaClient } from '@prisma/client'
import axios from 'axios';

const Contenedor = styled.div`
  max-width: 1200px;
  width: 50%;
  margin: 0 auto;
`;
const Text = styled.h1`
  color: #535a6d;
  font-weight: bold;
  margin-top: 50px;
  width: 300px;
  margin: 50px auto;
`

export default function Home() {

  const {firebase, usuario} = useContext(FirebaseContext);
  const [pedidos, setPedidos] = useState([]);

  const obtenerPedidos = async () => {
    const { data } = await axios('/api/obtenerOrdenes')
    setPedidos(data)
  }

  useEffect(() => {
      obtenerPedidos()
  }, [])

  return (
    <div>
      <Layout>
        <div>
          <h2
            css={css`
              margin: 0 0 10px 50px;
              padding: 20px 0 0 0;
              color: #0a69df;
              font-weight: bold;
            `}
          >LISTA DE PEDIDOS : </h2>
            {usuario ? (
            <Contenedor>  
              <ul>                
                {pedidos.map((pedido) => (
                  <DetalleCliente
                    key={pedido.id}
                    pedido={pedido}
                  />
                ))}
              </ul>
            </Contenedor>
            ) : (
              <Text>LOGIN ACCESS..</Text>
            )}
        </div>
      </Layout>
    </div>
  )
}
