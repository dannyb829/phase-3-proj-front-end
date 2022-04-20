import { useEffect, useState } from "react";

function TrainerList({ user, trainers }) {
    
    useEffect(()=>{
        fetch(user.category === 'owner' ? `http://localhost:9292/trainers/${user.name}` : 'http://localhost:9292/trainers/')
        .then(resp => resp.json())
        .then(console.log)
    },[])

    const itemToDisplay = trainers.map(trainer => <li key={trainer.id} className='list-item'><b>TRAINER</b> {trainer.name} <b>SERVICE</b> {trainer.service}</li>)

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

