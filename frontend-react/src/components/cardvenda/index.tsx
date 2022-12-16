import './styles.css'

function CardVendas() {
    return (
        <>
            <section id="sales">
                <div className="sales-container">
                    <div className="sales-card">
                        <div className="sales-head">
                            <div className="sales-head-info">
                                <h2> Vendas do dia: </h2>
                                <input className="form-control" type="text" name="" id="" placeholder="13/12/2022"/>
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