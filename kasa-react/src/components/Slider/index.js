import { useState } from "react";
import './styles.scss';

const Slider = (props) => {
    const images = props.images
    const [index, setIndex] = useState(0);
    const down = () => {
        if(index === 0){
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    const up = () => {
        if(index !== images.length - 1){
            setIndex(index + 1)
        } else if(index === images.length - 1){
            setIndex(0)
        } 
    }
    console.log('index', index)
    console.log('images.length', images.length)
    return (
        <div className="lodgingHero__slider-container">
            <i className="fas fa-angle-left lodgingHero__slider-left-item" onClick={down}></i>
            <img src={images[index]} alt="" className="lodgingHero__image" />
            <i className="fas fa-angle-right lodgingHero__slider-right-item" onClick={up}></i>
        </div>
    );
}

export default Slider;