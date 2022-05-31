import './styles.scss';

const Host = (props) => {
    const nameValue = props.nameValue
    const imgValue = props.imgValue

    return (
        <div className="lodgingHero__username-container">
            <span>{nameValue}</span>
            <img src={imgValue} alt="" className="lodgingHero__username-image"/>
        </div>
    );
}

export default Host;