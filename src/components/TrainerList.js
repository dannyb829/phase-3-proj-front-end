import { useEffect, useState } from "react";

function TrainerList() {
    const [trainers ,setTrainers] = useState([]) 

    const itemToDisplay = trainers.map(trainer => <li key={trainer.id} className='list-item'><b>TRAINER</b> {trainer.name} <b>SERVICE</b> {trainer.service}</li>)
    useEffect(()=>{
        fetch('http://localhost:9292/trainers')
        .then(resp => resp.json())
        .then(data => setTrainers(data))
    },[])

    return (
        <>
        <h2>Trainer list here</h2>
        <ul className='list-card'>
            {itemToDisplay}
        </ul>
        </>
    )
}

export default TrainerList

