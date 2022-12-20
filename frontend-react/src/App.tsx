import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import ButtonRow from './components/buttons row'
import CardVendas from './components/cardvenda-hoje'
import PopupVenda from './components/cadastro venda'

function App() {
  const[abrirVenda, setAbrirVenda] = useState(false);
  return (
    <>
    {abrirVenda && <PopupVenda setAbrirVenda={setAbrirVenda} />}
    <Header/>
    <ButtonRow setAbrirVenda={setAbrirVenda}/>
    <CardVendas/>
    </>
  )
}

export default App
