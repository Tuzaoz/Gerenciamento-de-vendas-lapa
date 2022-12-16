import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import ButtonRow from './components/buttons row'
import CardVendas from './components/cardvenda'

function App() {
  
  return (
    <>
    <Header/>
    <ButtonRow/>
    <CardVendas/>
    </>
  )
}

export default App
