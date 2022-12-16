import icon from '../../../assets/Calendar-Time 1.svg'
import './styles.css'

function ButtonHoje() {
    return(
        <>
        <div className="button-hoje">
                <img className="icon" src={icon} alt="icon plus"/>
                <h2>Hoje</h2>
        </div>
        </>
    )
}
export default ButtonHoje