import icon from '../../assets/plus-svgrepo-com white.svg'
import './styles.css'
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Cliente } from '../../models/venda';

interface ModalProps {
    setAbrirVenda: (open: boolean) => void;
}

interface SaleForm {
    customerName: string;
    produto: string;
    value: number;
    paymentMethod: string;
  }


const PopupVenda: FC<ModalProps> =({setAbrirVenda})=>{
    
    const [cliente, setCliente] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>();
    const [formData, setFormData] = useState<SaleForm>({
        customerName: '',
        produto: '',
        value: 0,
        paymentMethod: '',
      });
    
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const data = `${year}-${month}-${day}`;
    const selectCategoria = React.useRef<HTMLSelectElement>(null);
    const selectPagamento = React.useRef<HTMLSelectElement>(null);
    useEffect(() => {
        
        axios.get(`http://localhost:8080/cliente`)
          .then(response => {
            console.log(response);
            const nomesArray = response.data.map((obj: Cliente) => obj.nome);
            console.log(nomesArray)
            setCliente(nomesArray);
            console.log(cliente)})
          .catch(error => console.log(error));
     
    }, []);
    const nomesContatos = cliente.map(cliente => cliente);
    const opcoesSelect = nomesContatos.map((nome) => ({ value: nome, label: nome }));
    console.log(opcoesSelect)

    const handleSubmit = (event: { target: any; }) => {
        const selectedValueCateg = selectCategoria.current!.value;
        const selectedValuePag = selectPagamento.current!.value;
        const response = axios.post('http://localhost:8080/vendas/hoje', {
        
        produto: formData.produto,
        nomeCliente: formData.customerName,
        data: data,
        valor: formData.value,
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
                    <Select options={opcoesSelect} className='input-cadastro-venda'/>
                    
                    <label>Produto Vendido: </label>
                    <input className='input-cadastro-venda' type="text" value={formData.produto} onChange={(event) => setFormData({ ...formData, produto: event.target.value })}/>
                    
                    <label>Categoria de Produto: </label>
                    <select id="" ref={selectCategoria}>
                        <option value="Rações">Rações</option>
                        <option value="Granel">Granel</option>
                        <option value="Medicamentos">Medicamentos</option>
                        <option value="Acessórios">Acessórios</option>
                        <option value="Inseticidas">Inseticidas</option>
                    </select>
                    
                    <label>Valor: </label>
                    <input className='input-cadastro-venda' type="number" value={formData.value} onChange={(event) => setFormData({ ...formData, value: Number(event.target.value) })}/><br/>
                    
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