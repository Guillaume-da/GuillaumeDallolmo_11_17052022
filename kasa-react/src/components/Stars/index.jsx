import './styles.scss';

const Stars = (props) => {
    const rating = props.rating
    console.log('Rating:',rating)
    return (
        <div className="lodgingHero__stars-container">
            <i className={rating >= 1 ? "fas fa-star red" : "fas fa-star"}></i>
            <i className={rating >= 2 ? "fas fa-star red" : "fas fa-star"}></i>
            <i className={rating >= 3 ? "fas fa-star red" : "fas fa-star"}></i>
            <i className={rating >= 4 ? "fas fa-star red" : "fas fa-star"}></i>
            <i className={rating > 4 ? "fas fa-star red" : "fas fa-star"}></i>
        </div>
    );
}

export default Stars;