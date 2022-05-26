import { React, useEffect, useState } from "react";
import AccommodationItem from '../AccomodationItem';
import './styles.scss';

function AccommodationList() {
    const [datas, setData] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://172.22.134.190:3000/accomodations.json')
        .then(response => response.json())
        .then(datas => setData(datas));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    console.log(datas)

  return (
    <main>
        <div className="main">
            {datas.map((data) => (
                <AccommodationItem titleValue={data.title} key={`${data.id}`}/>
            ))}
            
        </div>
    </main>
  );
}

export default AccommodationList;