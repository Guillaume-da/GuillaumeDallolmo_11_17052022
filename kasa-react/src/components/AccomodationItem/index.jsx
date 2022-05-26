import { Link } from 'react-router-dom';
import './styles.scss';

function AccommodationItem(props) {
    const titleValue = props.titleValue
    return (
        <Link to='/'>
            <article className="homeCard">
                <h2 className="homeCard__title">{titleValue}</h2>
            </article>
        </Link>
    );
}

export default AccommodationItem;