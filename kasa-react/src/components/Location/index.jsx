import './styles.scss';

const Location = (props) => {
    const title = props.title;
    const location = props.location;
    return (
        <div>
            <h1 className="lodgingHero__title">{title}</h1>
            <span className="lodgingHero__location">{location}</span>
        </div>
    );
}

export default Location;