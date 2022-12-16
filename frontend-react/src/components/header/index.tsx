import './index.css'
import icon from '../../assets/image 1.svg'
function Header() {
    return(
        <>
        <header>
        <div className="logo-container">
            <img className="logo" src={icon} alt="logo lapa" />
            <div className="logo-text-container">
                <h1 className="title-head">Acompanhamento de Vendas</h1>
                <p className="signature">Desenvolvido por @tuzaodantas</p>
            </div>
        </div>
        </header>
        </>
    )
}

export default Header