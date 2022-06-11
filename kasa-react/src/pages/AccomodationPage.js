import { React } from "react";
import Loader from '../components/Loader'
import Error from '../components/Error'
import Location from '../components/Location';
import Slider from '../components/Slider';
import TagsList from '../components/TagsList';
import Stars from '../components/Stars'
import Host from '../components/Host';
import { useLocation } from 'react-router-dom';
import AccordionItem from "../components/AccordionItem";
import useFetch from '../useFetch'

function AccomodationPage() {
    const { loading, data: datas } = useFetch(`${process.env.REACT_APP_API}`)
    const slug = useLocation()
    const id = slug.pathname.replace('/accomodation/', '')
    const accomodation = datas?.find((item) => item.id === id);
    
    if (loading) return <Loader />

    if( datas && accomodation !== undefined){
        return (
            <main className="lodgingHero">
                <Slider images={accomodation.pictures}/>
                <div className="lodgingHero__container">
                    <div className="lodgingHero__title-container">
                        <Location title={accomodation.title} location={accomodation.location} />
                        <TagsList tags={accomodation.tags} />
                    </div>
                    <div className="lodgingHero__user-container">
                        <Stars rating={accomodation.rating} />
                        <Host nameValue={accomodation.host.name} imgValue={accomodation.host.picture} />
                    </div>
                </div>

                <div className="accordion__lodging">
                    <div className="accordion__lodging-accordion-container half-width">
                        <AccordionItem titleValue={''} contentValue={accomodation.description} idValue="description"/>
                    </div>
                    <div className="accordion__lodging-accordion-container half-width">
                        <AccordionItem titleValue={''} equipmentsValue={accomodation.equipments} idValue="equipment"/>
                    </div>
                    
                </div>
            </main>
        );
    } else if(!loading && datas && accomodation === undefined){
        return <Error />
    }
    
};

export default AccomodationPage;