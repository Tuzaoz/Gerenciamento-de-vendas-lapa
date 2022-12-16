import './styles.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Venda } from '../../models/venda';



function CardVendas() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const[vendas, setVendas] = useState<Venda[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/vendas/hoje")
            .then(response =>{
                setVendas(response.data.content)
                
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
                                <h2 id="result"> R$ 1000.00 </h2>
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
                                        <td>{venda.nomeCliente}</td>
                                        <td>{venda.produto}</td>
                                        <td>Granel</td>
                                        <td>Cartão</td>
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