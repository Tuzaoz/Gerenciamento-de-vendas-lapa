import './styles.css'
import React, { FC, useEffect, useState } from "react";
import axios from 'axios';
import { Venda } from '../../models/venda';
import { Total } from '../../models/total';

interface ModalProps {
    setAbrirHoje: (open: boolean) => void;
}


const CardVendas: FC<ModalProps> =({setAbrirHoje})=>{
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const[vendas, setVendas] = useState<Venda[]>([]);
    const[total, setTotals] = useState(0);
    
    useEffect(()=>{
        axios.get("http://localhost:8080/vendas/hoje")
            .then(response =>{
                console.log(response.data)
                setVendas(response.data.vendas.content)
                setTotals(response.data.valorTotal)
            })

    },[])
    
    return (
        <>
            <section id="sales">
                <div className="sales-container">
                    <div className="sales-card">
                        <div className="sales-head">
                            <div className="sales-head-info">
                                <h2> Vendas do dia: </h2>
                                <div>
                                    <h2 className='form-control'> {date}</h2>
                                </div>
                            </div>
                            <div className="sales-head-info">
                                <h2> Total em Vendas: </h2>
                                <h2 id="result"> R$ {total} </h2>
                            </div>
                        </div>
                        <table className="sales-table">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Produto</th>
                                    <th>Tipo de Produto</th>
                                    <th>Pagamento</th>
                                    <th>Valor</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {vendas.map(venda => {
                                    return( 
                                    <tr key={venda.id}>
                                        <td>{venda.nomeCliente.nome}</td>
                                        <td>{venda.produto}</td>
                                        <td>{venda.categoriaProduto}</td>
                                        <td>{venda.metodoPagamento}</td>
                                        <td>R$ {venda.valor}</td>
                                        <td>imagem</td>
                                    </tr>
                                    )
                                })}
                            
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CardVendas