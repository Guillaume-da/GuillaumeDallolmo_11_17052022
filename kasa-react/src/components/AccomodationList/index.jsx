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
                {datas?.map((data) => (
                    <AccommodationItem titleValue={data.title} id={data.id} key={`${data.id}`}  />
                ))}
            </div>
        </main>
    );
}

export default AccommodationList;