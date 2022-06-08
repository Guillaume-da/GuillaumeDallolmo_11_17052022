import logo from '../../assets/logo.svg'
import { useLocation, Link } from 'react-router-dom'
import './styles.scss';

const Header = () => {
  const slug = useLocation()
  console.log(slug.pathname)
  return (
    <header className="header">
        <Link to='/'><img src={ logo } alt='' className='header__logo' /></Link>
        <nav className="header__menu">
            <ul className="header__menu-list">
                <Link to='/' className="header__menu-link">
                  <li className={slug.pathname === '/' ? "header__menu-item active" : "header__menu-item"}>Accueil</li>
                </Link>
                <Link to='/about' className="header__menu-link">
                  <li className={slug.pathname === '/about' ? "header__menu-item active" : "header__menu-item"}>A propos</li>
                </Link>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
