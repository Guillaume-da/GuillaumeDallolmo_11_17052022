import { useLocation } from 'react-router-dom';
import './styles.scss';

const HomeHero = () => {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return (
      <div className="homeHero">
          <div className="homeHero__banner">
              <h1 className="homeHero__title">Chez vous, partout et ailleurs</h1>
          </div>
      </div>
    );
  } else if (location.pathname === '/about') {
      return (
        <div className="aboutHero">
          <div className="aboutHero__banner"></div>
        </div>
      );
    }
}

export default HomeHero;