import icon from '../../assets/plus-svgrepo-com white.svg'
import './styles.css'
import React, { FC, useState } from 'react';
import axios from 'axios';

interface ModalProps {
    setAbrirCliente
    : (open: boolean) => void;
}

const PopupCliente: FC<ModalProps> =({setAbrirCliente})=>{
    const [nomeCliente, setNomeCliente] = useState('');
    const [fone, setFone] = useState('');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const data = `${year}-${month}-${day}`;

    
    const handleSubmit = (event: { target: any; }) => {
        
        const response = axios.post('http://localhost:8080/cliente', {
        nome: nomeCliente,
        fone: fone,
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
    <div className="main-cliente">
        <div className="popup-cliente">
            <div className="popup-header">
                <h2 className='close' onClick={() => {
                    setAbrirCliente
                    (false);
            }}>X</h2>
            </div>
            <h2> Cadastro de Cliente

            </h2>
            <div className="popup-body-cliente">
                
                <form id='formCliente
                '>
                    <label>Nome do Cliente: </label>
                    <input className='input-cadastro-cliente
                    ' type="text" value= {nomeCliente} onChange={(event) => setNomeCliente(event.target.value)}/>
                    <label>Telefone: </label>
                    <input className='input-cadastro-cliente
                    ' type="text" name={fone} onChange={(event) => setFone(event.target.value)}/>
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
export default PopupCliente
