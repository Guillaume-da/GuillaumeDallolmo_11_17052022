import { useState, useEffect, useRef } from 'react';
import './styles.scss';

const AccordionItem = (props) => {
    const titleValue = props.titleValue
    const contentValue = props.contentValue
    const equipmentsValue = props.equipmentsValue
    const idValue = props.idValue

    const [descriptionToggle, setDescriptionToggle] = useState(false)
    const [equipmentsToggle, setEquipmentsToggle] = useState(false)
    
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef()

    const descriptionClassToggle = () => {
        setDescriptionToggle(!descriptionToggle)
    }
    const equipmentsClassToggle = () => {
        setEquipmentsToggle(!equipmentsToggle)
    }

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])
    
    if (idValue === "description") {
        return (
            <div>
                <div 
                className="accordion__item" 
                onClick={descriptionClassToggle}
                >
                    <h2>{titleValue ? titleValue : 'Description'}</h2>
                    {descriptionToggle ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                </div>
                <div 
                className={descriptionToggle ? "accordion__lodging-accordion-container animated" : "accordion__lodging-accordion-container unvisible"}
                style={{height: descriptionToggle ? `${heightEl}` : "0px"}}
                ref={refHeight}
                >
                    <div className="accordion__item-content">
                        <p>{contentValue}</p>
                    </div>
                </div>
            </div>
        );
    } 
    else if (idValue === "equipment") {
        return (
            <div>
                <div 
                className="accordion__lodging-item" 
                onClick={equipmentsClassToggle}
                >
                    <h2>Equipements</h2>
                    {equipmentsToggle ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                </div>
                <div 
                className={equipmentsToggle ? "accordion__lodging-item-content animated" : "accordion__lodging-item-content unvisible"}
                style={{height: equipmentsToggle ? `${heightEl}` : "0px"}}
                ref={refHeight}
                >
                    <ul>
                        {equipmentsValue.map((equipment, index) => (
                            <li key={`${equipment}-${index}`}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default AccordionItem;