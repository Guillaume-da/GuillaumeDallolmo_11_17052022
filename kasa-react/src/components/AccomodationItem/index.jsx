import { Link } from 'react-router-dom';
import './styles.scss';

const AccommodationItem = (props) => {
    const {titleValue, id} = props
    return (
        <Link to={'accomodation/' + id}>
            <article className="homeCard">
                <h2 className="homeCard__title">{titleValue}</h2>
            </article>
        </Link>
    );
}

export default AccommodationItem;