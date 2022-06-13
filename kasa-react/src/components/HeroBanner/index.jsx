import './styles.scss';

const HomeHero = (props) => {
  const idValue = props.idValue
  
  if (idValue === "home") {
    return (
      <div className="homeHero">
          <div className="homeHero__banner">
              <h1 className="homeHero__title">Chez vous, partout et ailleurs</h1>
          </div>
      </div>
    );
  } else if (idValue === "about") {
      return (
        <div className="aboutHero">
          <div className="aboutHero__banner"></div>
        </div>
      );
    }
}

export default HomeHero;