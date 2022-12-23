import { FC } from 'react'
import ButtonConta from './button-conta'
import ButtonHoje from './button-hoje'
import ButtonOverview from './button-overview'
import ButtonVenda from './button-venda'
import './styles.css'
interface ButtonRowProps {
    setAbrirVenda: (open: boolean) => void;
    setAbrirOver: (open: boolean) => void;
    setAbrirHoje: (open: boolean) => void;
}

const ButtonRow: FC<ButtonRowProps> =({setAbrirVenda, setAbrirOver, setAbrirHoje})=>{
    return(
        <>
        <section id="buttons">
        <div className="buttons-container">
            <ButtonVenda setAbrirVenda={setAbrirVenda} />
            <ButtonConta/>
            <ButtonHoje setAbrirHoje={setAbrirHoje} setAbrirOver={setAbrirOver}/>
            <ButtonOverview setAbrirOver={setAbrirOver} setAbrirHoje={setAbrirHoje}/>
        </div>
        </section>
        </>
    )
}
export default ButtonRow