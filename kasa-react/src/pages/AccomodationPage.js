import { React, useEffect, useState } from "react";
import Location from '../components/Location';
import Slider from '../components/Slider';
import TagsList from '../components/TagsList';
import Host from '../components/Host';
import { useLocation } from 'react-router-dom';
import AccordionItem from "../components/AccordionItem";

function AccomodationPage() {
    const [datas, setData] = useState([]);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3000/accomodations.json')
        .then(response => response.json())
        .then(datas => setData(datas));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const slug = useLocation()
    const id = slug.pathname.replace('/accomodation/', '')
    const accomodation = datas.find((item) => item.id === id);

    if(accomodation !== undefined){
        console.log(accomodation)
        return (
            <main className="lodgingHero">
                <Slider images={accomodation.pictures}/>
                <div className="lodgingHero__container">
                    <div className="lodgingHero__title-container">
                        <Location title={accomodation.title} location={accomodation.location} />
                        <TagsList tags={accomodation.tags} />
                    </div>
                    <div className="lodgingHero__user-container">
                        <div className="lodgingHero__stars-container">
                            <i className="fas fa-star red"></i>
                            <i className="fas fa-star red"></i>
                            <i className="fas fa-star red"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <Host nameValue={accomodation.host.name} imgValue={accomodation.host.picture} />
                    </div>
                </div>

                <div className="accordion__lodging">
                    <div className="accordion__lodging-accordion-container">
                        <AccordionItem titleValue={''} contentValue={accomodation.description} idValue="description"/>
                    </div>
                    <AccordionItem titleValue={''} equipmentsValue={accomodation.equipments} idValue="equipement"/>
                </div>
            </main>
        );
    }
    
};

export default AccomodationPage;