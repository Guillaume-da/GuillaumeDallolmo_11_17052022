import HeroBanner from '../components/HeroBanner';
import AccommodationList from '../components/AccomodationList';

function Home() {

    return (
        <div>
            <HeroBanner idValue="home"/>
            <AccommodationList />
        </div>
    );
};

export default Home;