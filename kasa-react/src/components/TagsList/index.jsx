import Tag from '../Tag';
import './styles.scss';

const TagsList = (props) => {
    const tags = props.tags;
    return (
        <div className="lodgingHero__filter-container">
            {tags.map((tag, index) => (
                <Tag tagValue={tag} key={index}/>
            ))}
        </div>
    );
}

export default TagsList;