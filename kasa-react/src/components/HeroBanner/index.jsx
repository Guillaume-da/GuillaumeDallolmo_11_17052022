import './styles.scss';

const HomeHero = (props) => {
  const idValue = props.idValue
  const contentValue = props.contentValue
  
  if (idValue === "home") {
    return (
      <div className="homeHero">
          <div className="homeHero__banner">
              <h1 className="homeHero__title">{contentValue}</h1>
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