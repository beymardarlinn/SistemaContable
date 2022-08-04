import React, {useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

const Nav = styled.nav`
    padding-left: 1rem;

    a {
        font-size: 1.8rem;
        margin-left: 1rem;
        //color: var(--gris2);
        color: white;
        font-family: 'PT Sans', sans-serif;
        padding: 5px 10px;
        &:last-of-type {
            margin-right: 0;
        }
    }
    a:hover{
        color: var(--naranja);
        font-weight: bold;
        background: white;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0 20px 30px 0 rgb(0 0 0 / 20%);
    }
`;

const Navegacion = () => {
    
    const {usuario} = useContext(FirebaseContext);

    return (
        <Nav>
            {usuario && (
            <>
                <Link href="/"><a>Pedidos</a></Link>
                <Link href="/reportes">Reportes</Link>
            </>
            )}
            <Link href="/help">Help</Link>
            
        </Nav>
    );
}
 
export default Navegacion;