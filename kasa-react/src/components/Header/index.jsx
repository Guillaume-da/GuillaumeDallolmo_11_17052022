import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
        <Link to='/'><img src={ logo } alt='' className='header__logo' /></Link>
        <nav className="header__menu">
            <ul className="header__menu-list">
                <Link to='/' className="header__menu-link"><li className="header__menu-item active">Accueil</li></Link>
                <Link to='/about' className="header__menu-link"><li className="header__menu-item">A propos</li></Link>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
