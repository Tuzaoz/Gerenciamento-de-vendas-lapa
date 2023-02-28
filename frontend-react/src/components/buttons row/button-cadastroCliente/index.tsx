import { FC, useState } from 'react'
import icon from '../../../assets/add-user-icon.svg'
import PopupVenda from '../../cadastro venda';
import './styles.css'
interface ButtonClienteProps {
    //setAbrirCliente: (open: boolean) => void;
}

const ButtonCliente: FC<ButtonClienteProps> =({})=>{
    return(
        <>
        <div className="button-cliente" onClick={() => {
          //setAbrirCliente(true);
        }}>
                <img className="icon" src={icon} alt="icon plus"/>
                <h2>Cliente</h2>
        </div>
        
        </>
    )
}
export default ButtonCliente