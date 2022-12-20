import { FC } from 'react'
import ButtonConta from './button-conta'
import ButtonHoje from './button-hoje'
import ButtonOverview from './button-overview'
import ButtonVenda from './button-venda'
import './styles.css'
interface ButtonRowProps {
    setAbrirVenda: (open: boolean) => void;
}

const ButtonRow: FC<ButtonRowProps> =({setAbrirVenda})=>{
    return(
        <>
        <section id="buttons">
        <div className="buttons-container">
            <ButtonVenda setAbrirVenda={setAbrirVenda} />
            <ButtonConta/>
            <ButtonHoje/>
            <ButtonOverview/>
        </div>
        </section>
        </>
    )
}
export default ButtonRow