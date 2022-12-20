import { FC, useState } from 'react'
import icon from '../../../assets/plus-svgrepo-com.svg'
import PopupVenda from '../../cadastro venda';
import './styles.css'
interface ButtonVendaProps {
    setAbrirVenda: (open: boolean) => void;
}

const ButtonVenda: FC<ButtonVendaProps> =({setAbrirVenda})=>{
    return(
        <>
        <div className="button-venda" onClick={() => {
          setAbrirVenda(true);
        }}>
                <img className="icon" src={icon} alt="icon plus"/>
                <h2>Venda</h2>
        </div>
        
        </>
    )
}
export default ButtonVenda