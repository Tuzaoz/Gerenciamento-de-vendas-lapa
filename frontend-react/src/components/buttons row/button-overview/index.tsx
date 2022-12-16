import icon from '../../../assets/Calendar-Time 1.svg'
import './styles.css'

function ButtonOverview() {
    return(
        <>
        <div className="button-overview">
                <img className="icon" src={icon} alt="icon plus"/>
                <h2>Visão Geral</h2>
        </div>
        </>
    )
}
export default ButtonOverview