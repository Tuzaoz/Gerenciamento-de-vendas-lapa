import { FC } from 'react';
import icon from '../../../assets/Calendar-Time 1.svg'
import './styles.css'
interface ButtonHojeProps {
    setAbrirOver: (open: boolean) => void;
    setAbrirHoje: (open: boolean) => void;
}

const ButtonHoje: FC<ButtonHojeProps> =({setAbrirOver, setAbrirHoje})=>{
    function abrirHoje() {
        setAbrirHoje(true);
        setAbrirOver(false);
        console.log(setAbrirHoje,setAbrirOver)
    }
    return(
        <>
        <div className="button-hoje" onClick={abrirHoje}>
                <img className="icon" src={icon} alt="icon plus"/>
                <h2>Hoje</h2>
        </div>
        </>
    )
}
export default ButtonHoje