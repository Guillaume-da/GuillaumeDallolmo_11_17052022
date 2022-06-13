import { Link } from 'react-router-dom';
import './styles.scss';

const AccommodationItem = (props) => {
    const {titleValue, id, cover} = props
    return (
        <Link to={'accomodation/' + id}>
            <article className="homeCard">
            <img src={cover} alt="" className="homeCard__img" />
                <h2 className="homeCard__title">{titleValue}</h2>
            </article>
        </Link>
    );
}

export default AccommodationItem;