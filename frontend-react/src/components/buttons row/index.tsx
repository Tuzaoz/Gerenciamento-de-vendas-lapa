import ButtonConta from './button-conta'
import ButtonHoje from './button-hoje'
import ButtonOverview from './button-overview'
import ButtonVenda from './button-venda'
import './styles.css'
function ButtonRow() {
    return(
        <>
        <section id="buttons">
        <div className="buttons-container">
            <ButtonVenda/>
            <ButtonConta/>
            <ButtonHoje/>
            <ButtonOverview/>
        </div>
        </section>
        </>
    )
}
export default ButtonRow