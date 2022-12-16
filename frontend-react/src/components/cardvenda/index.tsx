import './styles.css'
import React from "react";



function CardVendas() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            
    
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
                                <tr>
                                    <td>João da Silva</td>
                                    <td>CatChow</td>
                                    <td>Granel</td>
                                    <td>Cartão</td>
                                    <td>R$ 10.00</td>
                                    <td>imagem</td>
                                </tr>
                                <tr>
                                    <td>João da Silva</td>
                                    <td>CatChow</td>
                                    <td>Granel</td>
                                    <td>Cartão</td>
                                    <td>R$ 10.00</td>
                                    <td>imagem</td>
                                </tr>
                                <tr>
                                    <td>João da Silva</td>
                                    <td>CatChow</td>
                                    <td>Granel</td>
                                    <td>Cartão</td>
                                    <td>R$ 10.00</td>
                                    <td>imagem</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CardVendas