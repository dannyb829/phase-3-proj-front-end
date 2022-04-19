import { useEffect, useState } from "react";

function DoggoList() {
    const [doggos ,setDoggos] = useState([]) 

    const itemToDisplay = doggos.map(doggo => <li key={doggo.id} className='list-item'><b>Dog Name</b> {doggo.name} <b>Age</b> {doggo.age} <b>BREED</b> {doggo.breed}</li>)

    useEffect(()=>{
        fetch('http://localhost:9292/dogs')
        .then(resp => resp.json())
        .then(setDoggos)
    },[])
    
    return (
        
        <>
        <h2>Doggo list here</h2>
        <ul className='list-card'>
            {itemToDisplay}
        </ul>
        </>
    )
}

export default DoggoList