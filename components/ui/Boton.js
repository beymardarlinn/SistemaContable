import styled from "@emotion/styled";

const Boton = styled.a`
    font-weight: 700;
    text-transform: uppercase;
    padding: .4rem 1.5rem;
    margin-right: 1rem;
    font-size: 14px;
    color: white;
    border-radius: 5px;
    box-shadow: 0 20px 30px 0 rgb(0 0 0 / 20%);
    background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
    border: 1px solid #79bbff;
    width: max-content;

    &:last-of-type {
        //margin-right: 0; 
    }
    &:hover {
        cursor: pointer;
        background: white;
        font-weight: 700;
        color: #da552f;
    }
`;

export default Boton;