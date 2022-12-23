import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import ButtonRow from './components/buttons row'
import CardVendas from './components/cardvenda-hoje'
import PopupVenda from './components/cadastro venda'
import CardVendasOverview from './components/cardvenda-overview'

function App() {
  const[abrirVenda, setAbrirVenda] = useState(false);
  const[abrirHoje, setAbrirHoje] = useState(false);
  const[abrirOver, setAbrirOver] = useState(false);
  return (
    <>
    {abrirVenda && <PopupVenda setAbrirVenda={setAbrirVenda} />}
    <Header/>
    <ButtonRow setAbrirVenda={setAbrirVenda} setAbrirOver={setAbrirOver} setAbrirHoje={setAbrirHoje}/>
    {abrirOver && <CardVendasOverview setAbrirOver={setAbrirOver}/>}
    {abrirHoje && <CardVendas setAbrirHoje={setAbrirHoje}/>}
    </>
  )
}

export default App
