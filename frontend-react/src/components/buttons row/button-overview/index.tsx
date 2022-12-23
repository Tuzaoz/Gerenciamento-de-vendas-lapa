import { FC } from 'react';
import icon from '../../../assets/Calendar-Time 1.svg'
import './styles.css'
interface ButtonOverProps {
    setAbrirOver: (open: boolean) => void;
    setAbrirHoje: (open: boolean) => void;
}


const ButtonOverview: FC<ButtonOverProps> =({setAbrirOver, setAbrirHoje})=>{
    function abrirOver() {
        setAbrirOver(true);
        setAbrirHoje(false);
        console.log(setAbrirHoje,setAbrirOver)
    }
    return(
        <>
        <div className="button-overview"onClick={abrirOver}>
                <img className="icon" src={icon} alt="icon plus"/>
                <h2>Visão Geral</h2>
        </div>
        </>
    )
}
export default ButtonOverview