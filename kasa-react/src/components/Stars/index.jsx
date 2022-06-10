import star from '../../assets/star.svg'
import redStar from '../../assets/red-star.svg'
import './styles.scss';

const Stars = (props) => {
    const rating = props.rating
    return (
        <div className="lodgingHero__stars-container">
            {rating >= 1 ? <img src={ redStar } alt='' className="lodgingHero__star-img" /> : <img src={ star } alt='' className="lodgingHero__star-img" />}
            {rating >= 2 ? <img src={ redStar } alt='' className="lodgingHero__star-img" /> : <img src={ star } alt='' className="lodgingHero__star-img" />}
            {rating >= 3 ? <img src={ redStar } alt='' className="lodgingHero__star-img" /> : <img src={ star } alt='' className="lodgingHero__star-img" />}
            {rating >= 4 ? <img src={ redStar } alt='' className="lodgingHero__star-img" /> : <img src={ star } alt='' className="lodgingHero__star-img" />}
            {rating > 4 ? <img src={ redStar } alt='' className="lodgingHero__star-img" /> : <img src={ star } alt='' className="lodgingHero__star-img" />}
        </div>
    );
}

export default Stars;