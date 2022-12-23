import './styles2.css'
import React, { FC, useEffect, useState } from "react";
import axios from 'axios';
import { Venda } from '../../models/venda';
import { Total } from '../../models/total';

interface ModalProps {
    setAbrirOver: (open: boolean) => void;
}


const CardVendasOverview: FC<ModalProps> =({setAbrirOver})=> {
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
                        <div className="sales-head-overview">
                            <div className='sales-head-info-container'>
                                <div className="sales-head-info">
                                    <h2> Data de Início: </h2>
                                    <div>
                                        <h2 className='form-control'> {date}</h2>
                                    </div>
                                </div>
                                <div className="sales-head-info">
                                    <h2> Data de Final: </h2>
                                    <div>
                                        <h2 className='form-control'> {date}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='sales-head-info-container'>
                                <div className="sales-head-info">
                                    <h2> Total em Vendas: </h2>
                                    <h2 id="result"> R$ {total} </h2>
                                </div>
                                <div className="sales-head-info">
                                    <h2> Total em Contas: </h2>
                                    <h2 id="result"> R$ {total} </h2>
                                </div>
                                <div className="sales-head-info">
                                    <h2> Balanço Geral: </h2>
                                    <h2 id="result"> R$ {total} </h2>
                                </div>
                            </div>
                        </div>
                        <table className="sales-table">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Vendas Cartão</th>
                                    <th>Vendas Pix</th>
                                    <th>Vendas Dinheiro</th>
                                    <th>Pagamentos</th>
                                    <th>Total em Vendas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vendas.map(venda => {
                                    return( 
                                    <tr key={venda.id}>
                                        <td>{venda.nomeCliente}</td>
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
export default CardVendasOverview