import HeroBanner from '../components/HeroBanner';
import AccordionItem from '../components/AccordionItem';
import data from '../data/about-page.json';

function About() {

    return (
        <div>
            <HeroBanner idValue="about"/>
            <main className="accordion">
                {data.map((item, index) => (
                    <div key={`${index}-${index}`} >
                        <AccordionItem titleValue={item.title} contentValue={item.content} key={`${item.id}`} idValue="description"/>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default About;