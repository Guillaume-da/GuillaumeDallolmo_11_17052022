import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.scss';

const AccordionItem = (props) => {
    const titleValue = props.titleValue
    const contentValue = props.contentValue
    const equipmentsValue = props.equipmentsValue
    const idValue = props.idValue

    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [equipmentsToggle, setEquipmentsToggle] = useState(false)
    
    const slug = useLocation()
    const descriptionClassToggle = () => {
        setDescriptionToggle(!descriptionToggle)
    }
    const equipmentsClassToggle = () => {
        setEquipmentsToggle(!equipmentsToggle)
    }
    
    if(slug.pathname === '/about'){
        return (
            <div>
                <div className="accordion__item" onClick={descriptionClassToggle}>
                    <h2>{titleValue}</h2>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div>
                    <div className={`accordion__item-content ${descriptionToggle ? "visible" : ""}`}>
                        <p>{contentValue}</p>
                    </div>
                </div>
            </div>
        );
    } 
    else if (idValue === "description") {
        return (
            <div>
                <div className="accordion__item" onClick={descriptionClassToggle}>
                    <h2>Description</h2>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="accordion__lodging-accordion-container">
                    <div className={`accordion__item-content ${descriptionToggle ? "visible" : ""}`}>
                        <p>{contentValue}</p>
                    </div>
                </div>
            </div>
        );
    } 
    else if (idValue === "equipement") {
        return (
            <div>
                <div className="accordion__lodging-item" onClick={equipmentsClassToggle}>
                <h2>Equipements</h2>
                <i className="fas fa-angle-down"></i>
                </div>
                <div className={`accordion__lodging-item-content ${equipmentsToggle ? "visible" : ""}`}>
                    <ul>
                        {equipmentsValue.map((equipment, index) => (
                            <li key={`${equipment}-${index}`}>{ equipment }</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default AccordionItem;