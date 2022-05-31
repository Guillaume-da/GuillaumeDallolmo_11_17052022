import './styles.scss';

const Tag = (props) => {
    const tag = props.tagValue
    return (
        <span className="lodgingHero__filter">{tag}</span>
    );
}

export default Tag;