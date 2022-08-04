import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { css } from '@emotion/react';

const Cuadro = styled.div`
  margin: 30px;

`


const Help = () => {
    return (
    <div>
        <Layout>
          <Cuadro>
            <h1>HELP</h1>
            <p>Deve iniciar session para poder acceder a todas las demas funciones del sistema.</p>
            <p>Solo los usuarios logueados podran acceder a todas las funcionalidades del sistema.</p>
            <p>Contactese con el administrador del sistema si no tiene una cuenta.</p>
          </Cuadro>
        </Layout>
    </div>
    );
}
 
export default Help;