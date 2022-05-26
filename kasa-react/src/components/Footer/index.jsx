import logo from '../../assets/footer-logo.svg'
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
        <img src={ logo } alt='' className='footer__logo' />
        <span className="footer__text">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;