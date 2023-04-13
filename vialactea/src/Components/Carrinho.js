import React from 'react'
import styled from 'styled-components'
import cartIcon from './imagens/cartIcon.svg'


const CarrinhoContainer = styled.div`
    border: 0.25em solid transparent;
    background-image: linear-gradient(#000, #000),
    linear-gradient(#0000CD 70%, #00BFFF 100%, #0ff 50%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    display: flex;
    width:259px ;
    flex-direction: column;
    height:600px;
    border-radius: 15px;
    margin: 25px;
    padding: 8px;
    color: white;
    margin-top: 20px;

    p{
        text-align: center;
        padding: 10px;
    }

    button{
        margin-left: 15px;
        height:20px;
            &:hover{
            cursor: pointer;
            background-color: gray;
            color: white;
            }
    }   
`

function Carrinho(props) {
    return(
        <CarrinhoContainer>
            <h2>
                <img src={cartIcon} alt="Cart Icon" width ="30px" />
                Carrinho
            </h2>
            <p> {props.AddCarrinho} </p>
            <h3> Preço Total: R$ {props.total},00 </h3>
        </CarrinhoContainer>
    )
}

export default Carrinho;