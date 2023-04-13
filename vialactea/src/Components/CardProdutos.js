import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.section`
    border: 0.25em solid transparent;
    background-image: linear-gradient(#000, #000),
    linear-gradient(#0000CD 70%, #00BFFF 100%, #0ff 50%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: 20px ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 400px;
    padding-bottom: 50px;
    border-radius: 20px;
    margin: 10px; 

    img{
        padding: 20px;
        width: 250px;
        height: 250px;
        border-radius: 30px;
    }
    
    p{
        padding: 5px;
        color:white
    }

    button{
    &:hover{
        cursor: pointer; 
            background-color: gray;
            color: white;
    }
    }
`

const Button = styled.button`
    padding: 4px;
    margin: 20px;
    border-radius: 15px;
    color: black;
    /* background: linear-gradient(to bottom, white, purple); */
`

function CardProduto(props) {
    return(
        <CardContainer>
            <img src={props.imagem} alt="Imagem brinquedo" />
            <p>{props.titulo}</p>
            <p>R$ {props.valor},00 </p>
            <Button onClick= {props.onClick}> Comprar </Button>
        </CardContainer>
    )
}

export default CardProduto;