import HeroBanner from '../components/HeroBanner';
import AccommodationList from '../components/AccomodationList';

function Home() {

    return (
        <div>
            <HeroBanner idValue="home" contentValue="Chez vous, partout et ailleurs"/>
            <AccommodationList />
        </div>
    );
};

export default Home;