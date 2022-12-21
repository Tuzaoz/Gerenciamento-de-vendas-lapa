import icon from '../../assets/plus-svgrepo-com white.svg'
import './styles.css'
import React, { FC, useState } from 'react';
import axios from 'axios';

interface ModalProps {
    setAbrirVenda: (open: boolean) => void;
}

const PopupVenda: FC<ModalProps> =({setAbrirVenda})=>{
    const [nomeCliente, setNomeCliente] = useState('');
    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState('');
    const current = new Date();
    const data = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const venda = { produto,nomeCliente,data,valor };
       const response = await axios.post('http://localhost:8080/vendas/hoje', {
        produto: produto,
        nomeCliente: nomeCliente,
        data: data,
        valor: valor,
       })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
      console.log(response);
      };

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
                
                <form id='formVenda' onSubmit={handleSubmit}>
                    <label>Nome do Cliente: </label>
                    <input type="text" value= {nomeCliente} onChange={(event) => setNomeCliente(event.target.value)}/>
                    <label>Produto Vendido: </label>
                    <input type="text" name={produto} onChange={(event) => setProduto(event.target.value)}/>
                    
                    <label>Valor: </label>
                    <input type="text" name={valor} onChange={(event) => setValor(event.target.value)}/>
                    <button type="submit">Submit</button>
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