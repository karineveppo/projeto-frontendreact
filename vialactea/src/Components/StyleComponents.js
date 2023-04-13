import styled from 'styled-components'

export const ProdutosContainer = styled.div`
    
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    text-align: center;
    justify-content: space-between;
    background-image: url(https://usagif.com/wp-content/uploads/gif/outerspace-53.gif);
    background-size:cover;
    padding: 20px;
`

export const Main = styled.main`
    div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 20px;
    }
  
.textoquantidadeprodutos{
color: white;
font-size: 20px; }
`

export const DivCarrinho = styled.div`
    margin-top: 50px;
    margin-block-end: 50px;
    color: white;
`