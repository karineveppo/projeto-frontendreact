import React from 'react'
import styled from 'styled-components'
import linkedinIcon from './imagens/linkedinIcon.svg'
import githubIcon from './imagens/githubIcon.svg'


const FooterContainer = styled.div`
    padding: 30px 30px;
    width: 100%;
    height: 10vh;
    background-color: rgb(47, 79, 79);
    align-items: center;

h2{
    color: black;
    text-align: center;
    font-size: large;
}
`

const ImagemRedes = styled.div`
    img{
        width: 15px;
        margin-right: 20px;
    }

    a{
        text-decoration: none;
    }
`


function Footer() {
    return(
        <FooterContainer>
            <h2>
                <ImagemRedes>
                    <a href="https://www.linkedin.com/in/karineveppo" target="_blank" rel='noreferrer' >
                    <img src={linkedinIcon} alt=" Icon Linkedin" /></a>

                    <a href="https://github.com/karineveppo" target="_blank" rel="noreferrer" > 
                    <img src={githubIcon} alt=" Icon Github" /></a>
                </ImagemRedes>
                Desenvolvido por Karine Veppo-2023.
            </h2>
        </FooterContainer>
    )
}

export default Footer;