import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import DetalleCliente from '../components/layout/DetalleCliente';
import useClientes from '../hooks/useClientes';

const Contenedor = styled.div`
  max-width: 1200px;
  width: 60%;
  padding: 5rem 0;
  margin: 0 auto;
`; 

const Buscar = () => {
  
  const router = useRouter();
  const { query: {q}} = router;

  ///todos  los clientes
  const {clientes} = useClientes('creado');
  const [resultado, guardarResultado] = useState([]);

  useEffect(() => {
    const busqueda = q.toLowerCase();
    const filtro = clientes.filter(cliente => {
      return (
        cliente.nombre.toLowerCase().includes(busqueda) || 
        cliente.empresa.toLowerCase().includes(busqueda)
      )
    });

    guardarResultado(filtro);
  
  }, [q,clientes]);

  return (
    <div>
      <Layout>
        <div css={css`background-color: #f3f3f3;`}>
          <Contenedor>
            <ul css={css` background-color: #FFF; `}>
              {resultado.map(cliente => (
                <DetalleCliente
                  key={cliente.id}
                  cliente={cliente}
                />
              ))}
            </ul>
          </Contenedor>
        </div>
      </Layout>
    </div>
    );
}
 
export default Buscar;