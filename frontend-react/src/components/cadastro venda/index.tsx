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
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const data = `${year}-${month}-${day}`;
    const selectCategoria = React.useRef<HTMLSelectElement>(null);
    const selectPagamento = React.useRef<HTMLSelectElement>(null);
    
    const handleSubmit = (event: { target: any; }) => {
        const selectedValueCateg = selectCategoria.current!.value;
        const selectedValuePag = selectPagamento.current!.value;
        const response = axios.post('http://localhost:8080/vendas/hoje', {
        
        produto: produto,
        nomeCliente: nomeCliente,
        data: data,
        valor: valor,
        categoriaProduto: selectedValueCateg,
        metodoPagamento: selectedValuePag,

       })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
      console.log(response);
      const form = event.target;
      window.location.reload();
      form.submit();
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
                
                <form id='formVenda'>
                    <label>Nome do Cliente: </label>
                    <input className='input-cadastro-venda' type="text" value= {nomeCliente} onChange={(event) => setNomeCliente(event.target.value)}/>
                    <label>Produto Vendido: </label>
                    <input className='input-cadastro-venda' type="text" name={produto} onChange={(event) => setProduto(event.target.value)}/>
                    <label>Categoria de Produto: </label>
                    <select id="" ref={selectCategoria}>
                        <option value="Rações">Rações</option>
                        <option value="Granel">Granel</option>
                        <option value="Medicamentos">Medicamentos</option>
                        <option value="Acessórios">Acessórios</option>
                        <option value="Inseticidas">Inseticidas</option>
                    </select>
                    <label>Valor: </label>
                    <input className='input-cadastro-venda' type="text" name={valor} onChange={(event) => setValor(event.target.value)}/><br/>
                    <label>Método de Pagamento: </label>
                    <select id="" ref={selectPagamento}>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Pix">Pix</option>
                        <option value="Cartão">Cartão</option>
                    </select><br/>
                    <div className='button-cadastro-container'>
                        <div className="button-cadastro" onClick={handleSubmit}>
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