import icon from '../../../assets/plus-svgrepo-com.svg'
import './styles.css'

function ButtonVenda() {
    return(
        <>
        <div className="button-venda">
                <img className="icon" src={icon} alt="icon plus"/>
                <h2>Venda</h2>
        </div>
        </>
    )
}
export default ButtonVenda