import React, { useState } from 'react'
import Header from './Components/Header'
import Filtro from './Components/Filtro'
import { Section, Main, ProdutosContainer }from './Components/StyleComponents'
import { createGlobalStyle } from 'styled-components'
import kitRoboSolar from './Components/imagens/kitRoboSolar.png'
import estacaoLunar from './Components/imagens/estacaoLunar.png'
import astronautaMissaoMarte from './Components/imagens/astronautaMissaoMarte.png'
import conjuntoNaves from './Components/imagens/conjuntoNaves.png'
import kitAstronauta from './Components/imagens/kitAstronauta.png'
import naveEspacial from './Components/imagens/naveEspacial.png'
import legoDuplo from './Components/imagens/legoDuplo.png'
import naveEspacialLego from './Components/imagens/naveEspacialLego.png'
import CardProdutos from './Components/CardProdutos'
import Carrinho from './Components/Carrinho'
import Footer from './Components/Footer'


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }
`;

const listaDeBrinquedos = [
  {
    id: 1,
    name: "Kit Robô Solar",
    value: 120,
    img: kitRoboSolar,
  },

  {
    id: 2,
    name: "Estação Lunar",
    value: 150,
    img: estacaoLunar,
  },

  {
    id: 3,
    name: "Astronauta Missão Marte",
    value: 151,
    img: astronautaMissaoMarte,
  },

  {
    id: 4,
    name: "Conjunto de Naves",
    value: 175,
    img: conjuntoNaves,
  },

  {
    id: 5,
    name: "Kit Astronauta",
    value: 190,
    img: kitAstronauta,
  },

  {
    id: 6,
    name: "Nave Espacial",
    value: 250,
    img: naveEspacial,
  },

  {
    id: 7,
    name: "LEGO Duplo",
    value: 299,
    img: legoDuplo
  },

  {
    id: 8,
    name: "Nave Espacial LEGO",
    value: 575,
    img: naveEspacialLego,
  },
]
console.log(listaDeBrinquedos)


function App() {
  //filtro de busca:
  const [ valorMinimo, setValorMinimo ] = useState (-Infinity)
  const [ valorMaximo, setValorMaximo ] = useState (Infinity)
  const [ name, setName ] = useState ("")

  //adicionando ao carrinho:
  const [ AdicionaCarrinho, setAdicionaCarrinho ] = useState([])

  let [ ContadorCarrinho ] = useState(1)

  //ordenar crescente e decrescente:
  const [ ordenar, setOrdenar ] = useState("")
  const [ todosOsBrinquedos ] = useState(listaDeBrinquedos)

  const crescente = (a, b) => {return a.value - b.value}
  const decrescente = (a, b) => {return b.value - a.value}
  const ordenInicial = (a, b) => {return a.id - b.id}
    
    // eslint-disable-next-line default-case
    switch(ordenar) {
      case "crescente":
        todosOsBrinquedos.sort(crescente)
      break;
      case "decrescente":
        todosOsBrinquedos.sort(decrescente)
      break;
      case "":
        todosOsBrinquedos.sort(ordenInicial)
      break;
    }
  
  //Adicionar Produto no Carrinho:
  const AdicionarProdutoNoCarrinho = (itemAdd) => {
    if(AdicionaCarrinho.includes(itemAdd)) {
      return ContadorCarrinho ++
    }else{
      const produtosCarrinho = todosOsBrinquedos.filter((item) => { 
        return item.id === itemAdd
      })

    setAdicionaCarrinho([...AdicionaCarrinho, ...produtosCarrinho])
    localStorage.setItem("AdicionaCarrinho", JSON.stringify(AdicionaCarrinho))
    }
  }

  //Somar no Carrinho:
  let precoTotal = 0;
  AdicionaCarrinho.map((item) => (precoTotal= precoTotal + item.value));
  console.log(precoTotal)
  console.log(todosOsBrinquedos)

  //Remover do Carrinho:
  const RemoverProduto = (index) => {
    const NovoCarrinho = [...AdicionaCarrinho]

    const indexProcurar = NovoCarrinho.findIndex(
      (ProdutoNoCarrinho) => ProdutoNoCarrinho.id === index.id
    )
    NovoCarrinho.splice(indexProcurar,1)
    setAdicionaCarrinho(NovoCarrinho)
  }
  
  return (
    <>
      <GlobalStyle />
      <Header>

      </Header>
      <Section className= "geral">
        <Filtro valorMinimo={valorMinimo} 
                setValorMinimo={setValorMinimo} 
                valorMaximo={valorMaximo} 
                setValorMaximo={setValorMaximo} 
                name={name} 
                setName={setName}>
        </Filtro>

        <Main>
          <div className="textoquantidadeprodutos">
            <p>Quantidade de Brinquedos: {listaDeBrinquedos.length} </p>
            <label>
              Ordenar em:
              <select value={ordenar} onChange={(e) => setOrdenar(e.target.value)}>
              
              <option value=""></option>
              <option value= "crescente"> Crescente </option>
              <option value= "decrescente"> Decrescente </option>

              </select>
            </label>
          </div>


          <div>
            {listaDeBrinquedos.filter((listaDeBrinquedos) => {
              return listaDeBrinquedos.value >= valorMinimo || valorMinimo === ""
            })
            .filter((listaDeBrinquedos)=>{
              return listaDeBrinquedos.value <= valorMaximo || valorMaximo === ""
            })
            .filter((listaDeBrinquedos) => {
              return listaDeBrinquedos.name.toLowerCase().includes(name.toLowerCase());
            })
            .map((listaDeBrinquedos) => {
              return(
                <ProdutosContainer>

                  <CardProdutos
                  key={listaDeBrinquedos.id}
                  onClick={() => {AdicionarProdutoNoCarrinho(listaDeBrinquedos.id)}} 
                  listaDeBrinquedos = {listaDeBrinquedos}
                  imagem={listaDeBrinquedos.img}
                  titulo={listaDeBrinquedos.name}
                  valor={listaDeBrinquedos.value}
                  />
                </ProdutosContainer>
              )
            })}
          </div>
        </Main>

        <Carrinho
          total = {precoTotal}
            const AddCarrinho = {AdicionaCarrinho.map((item, id) => {
              return (
                <>
                  <p> {item.ContadorCarrinho}</p>
                  <p> {item.name} R$ {item.value},00 </p>
                  <button onClick= {() =>RemoverProduto(id)}> Remover </button>
                  
                </>
              )
            })}>

            </Carrinho>
      </Section>
      <Footer>

      </Footer>
      
    </>
    );
  }
  export default App;