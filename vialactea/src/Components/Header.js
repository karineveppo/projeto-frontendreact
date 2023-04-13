import React from 'react'
import styled from 'styled-components'
import logo from './imagens/logo.svg'



const HeaderContainer = styled.div`
    display: flex;
    padding: 60px 50px;
    width: 100%;
    text-align: center;
    height: 60px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family:'Lucida Sans Unicode';
    background-color: rgb(47,79,79);

    img{
        justify-content:left;
    }
    
    p{
        font-size:15px;
        align-items: center;
        justify-content: center;
        color: black;
    }
`


function Header() {
    return(
        <HeaderContainer>
            <div>
                <img src= {logo} alt="imagem Logo" width= "150px" />   
                
                <h2>
                    <p>Via-Lactea Brinquedos - Um universo de diversão para toda família!</p>
                </h2>
            </div>
        </HeaderContainer>

    )
}

export default Header;