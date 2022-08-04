import React, {useContext} from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';
import Image from "next/image";

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;
const Logo = styled.a`
    color: white;
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Header = () => { 
    
    const {usuario, firebase} = useContext(FirebaseContext);
    
    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
                background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
            `}     
        >
            <ContenedorHeader>
                <div css={css`
                        display: flex;
                        align-items: center; `}
                >
                    <Image
                            width={50}
                            height={40}
                            src="/img/logo3.png"
                            alt="imagen logotipo"
                    />
                    <Link href='/'>
                        
                        <Logo>FastFood</Logo>
                    </Link>

                    <Buscar />
                    <Navegacion />              
                </div>

                <div css={css`display: flex;align-items: center;`}>
                    {usuario ? (
                        <>
                            <p css={css`margin-right: 2rem;font-weight: bold;color: white;`}>
                                USUARIO : <span css={css`text-decoration: underline;`}>{usuario.displayName}</span>
                            </p>
                            <Boton
                                bgColor="true"
                                onClick={() => firebase.cerrarSesion() }
                            >
                                Cerrar Sesion
                            </Boton>                    
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Boton bgColor="true">Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton bgColor="true">Crear Cuenta</Boton>
                            </Link>
                        </>
                    )}                    
                </div>
            </ContenedorHeader>
        </header>
    );
}
 
export default Header;