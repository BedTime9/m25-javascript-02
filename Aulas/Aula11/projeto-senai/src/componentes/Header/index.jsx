import MenuHamburger from './assets/menu.svg';
import LogoSenai from './assets/logo-senai.png';
import Login from './assets/login.svg';
import Search from './assets/search.svg';
import './style.css';

export default function Header() {
    return(
        <div className='cabecalho'>
            <img src={MenuHamburger} alt="Imagem do menu" />
            <img src={LogoSenai} alt="Logo do Senai" />
            <img src={Login} alt="Imagem do login" />
            <img src={Search} alt="Imagem de pesquisa" />
        </div>
    );
}