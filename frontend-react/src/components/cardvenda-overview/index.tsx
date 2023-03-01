import './styles2.css'
import React, { FC, useEffect, useState } from "react";
import axios from 'axios';
import { Venda } from '../../models/venda';
import { Total } from '../../models/total';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dia } from '../../models/dia';

interface ModalProps {
    setAbrirOver: (open: boolean) => void;
}


const CardVendasOverview: FC<ModalProps> =({setAbrirOver})=> {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const[vendas, setVendas] = useState<Venda[]>([]);
    let conta= 0;
    let balanco= 0;
    
    const min = new Date(new Date().setDate(new Date().getDate() - 7));
    const max = new Date();

    const [minDate, SetMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [dias, setDias] = useState<Dia[]>([]);
    
    const day = date.slice(8,10)
    function parseDate(date: string) {
        const month = date.slice(5,7);
        const year = date.slice(0,4);
      
        return `${day}/${month}/${year}`;
      }
      
    
    useEffect(() => {

        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        axios.get(`http://localhost:8080/vendas/visaogeral?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                console.log(response)
                setDias(response.data);
            })
            const total = dias.map(obj => obj.totalVendas).reduce((total, num) => total + num, 0)    
        
    }, [minDate, maxDate])
    const total = dias.map(obj => obj.totalVendas).reduce((total, num) => total + num, 0)    
    return (
        <>
            <section id="sales">
                <div className="sales-container">
                    <div className="sales-card">
                        <div className="sales-head-overview">
                            <div className='sales-head-info-container'>
                                <div className="sales-head-info">
                                    <h2> Data de Início: </h2>
                                    <div className="form-control-container">
                                        <DatePicker
                                        selected={minDate}
                                        onChange={(date: Date) => SetMinDate(date)}
                                        className="form-control"
                                        dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                </div>
                                <div className="sales-head-info">
                                    <h2> Data de Final: </h2>
                                    <div className="form-control-container">
                                        <DatePicker
                                        selected={maxDate}
                                        onChange={(date: Date) => setMaxDate(date)}
                                        className="form-control"
                                        dateFormat="dd/MM/yyyy"
                                    />
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
                                    <h2 id="result"> R$ {} </h2>
                                </div>
                                <div className="sales-head-info">
                                    <h2> Balanço Geral: </h2>
                                    <h2 id="result"> R$ {} </h2>
                                </div>
                            </div>
                        </div>
                        <table className="sales-table">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Vendas Cartão</th>
                                    <th>Vendas Dinheiro e Pix</th>
                                    <th>Pagamentos</th>
                                    <th>Total em Vendas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dias.map(dias => {
                                    return( 
                                    <tr key={dias.id}>
                                        <td>{parseDate(dias.data)}</td>
                                        <td>R$ {dias.totalVendasCartao}</td>
                                        <td>R$ {dias.totalVendasDinheiroPix}</td>
                                        <td>carregando</td>
                                        <td>R$ {dias.totalVendas}</td>
                                    
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