import icon from '../../assets/plus-svgrepo-com white.svg'
import './styles.css'
import React, { FC } from 'react';

interface ModalProps {
    setAbrirVenda: (open: boolean) => void;
}

const PopupVenda: FC<ModalProps> =({setAbrirVenda})=>{
    return(
    <>
    <div className="main">
        <div className="popup">
            <div className="popup-header">
                <h2 className='close' onClick={() => {
                    setAbrirVenda(false);
            }}>X</h2>
            </div>
            <h2> Cadastro de Venda</h2>
            <div className="popup-body">
                <form action="">
                    <label>Nome do Cliente: </label>
                    <input type="text" />
                    <label>Produto Vendido: </label>
                    <input type="text" />
                    <label>Categoria do Produto: </label>
                    <input type="text" />
                    <label>Método de Pagamento: </label>
                    <input type="text" />
                    <label>Valor: </label>
                    <input type="text" />
                    <div className='button-cadastro-container'>
                        <div className="button-cadastro">
                            <img className="icon" src={icon} alt="icon plus"/>
                            <h2>Cadastrar</h2>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}
export default PopupVenda