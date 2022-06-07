import useFetch from '../../useFetch'
import AccommodationItem from '../AccomodationItem'
import Loader from '../Loader'
import './styles.scss';

function AccommodationList() {
    const { loading, data: datas } = useFetch(`${process.env.REACT_APP_API}`)
    if(datas) console.log(datas)
    if (loading) return <Loader />
    return (
        <main>
            <div className="main">
                {datas?.map((item) => (
                    <AccommodationItem titleValue={item.title} id={item.id} key={`${item.id}`}  />
                ))}
            </div>
        </main>
    );
}

export default AccommodationList;