import styled from '@emotion/styled';


export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 2rem auto 3rem auto;
    background: #5cb8ff;
    padding: 30px 30px 30px 30px;
    box-shadow: 0 12px 20px 0 rgb(80 85 223 / 37%);
    border-radius: 5px;

    fieldset {
        margin: 0 auto 2rem auto;
        border: 1px solid #e1e1e1;
        font-size: 2rem;
        padding: 2rem;
    }
`;

export const Campo = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input, textarea {
        flex: 1;
        padding: 3px;
    }

    textarea {
        height: 80px;
    }
`;

export const InputSubmit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    align-items: center;
    margin: auto;
    padding: 1.5rem;
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    border-radius: 5px;
    display: block;
    

    &:hover {
        cursor: pointer;
        background : #f15e34e0;
        box-shadow: 0 12px 20px 0 rgb(80 85 223 / 37%);
    }
`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;

