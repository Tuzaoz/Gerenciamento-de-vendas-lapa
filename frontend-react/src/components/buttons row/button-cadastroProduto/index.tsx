import { FC, useState } from 'react'
import icon from '../../../assets/iconmonstr-product-3.svg'

import PopupVenda from '../../cadastro venda';
import './styles.css'
interface ButtonProdutoProps {
    //setAbrirCliente: (open: boolean) => void;
}

const ButtonProduto: FC<ButtonProdutoProps> =({})=>{
    return(
        <>
        <div className="button-produto" onClick={() => {
          //setAbrirCliente(true);
        }}>
                <img className="icon" src={icon} alt="icon produto"/>
                <h2>Produto</h2>
        </div>
        
        </>
    )
}
export default ButtonProduto