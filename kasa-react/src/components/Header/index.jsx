import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
  return (
    <header className="header">
        <img src={ logo } alt='' className='header__logo' />
        <nav className="header__menu">
            <ul className="header__menu-list">
                <Link to='/' className="header__menu-link"><li className="header__menu-item active">Accueil</li></Link>
                <a href="http://localhost/kasa/integration/src/pages/a-propos.html" className="header__menu-link"><li className="header__menu-item">A propos</li></a>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
