import { useState } from "react";
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import './styles.scss';

const Slider = (props) => {
    const images = props.images
    const [index, setIndex] = useState(0);
    console.log(images.length)
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
    
    if(images.length === 1) {
        return (
            <div className="lodgingHero__slider-container">
                <img src={images[index]} alt="" className="lodgingHero__image" />
            </div>
        );
    } else {
        return (
            <div className="lodgingHero__slider-container">
                <img src={arrowLeft} alt="" className="lodgingHero__slider-left-item" onClick={down} />
                <img src={images[index]} alt="" className="lodgingHero__image" />
                <img src={arrowRight} alt="" className="lodgingHero__slider-right-item" onClick={up} />
            </div>
        );
    }
    
}

export default Slider;