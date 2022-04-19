import { useEffect, useState } from "react";

function OwnersList() {
    const [owners ,setOwners] = useState([]) 

    const itemToDisplay = owners.map(owner => <li key={owner.id} className='list-item'><b>Owner</b> {owner.name} <b>Address</b> {owner.address}</li>)
    useEffect(()=>{
        fetch('http://localhost:9292/owners')
        .then(resp => resp.json())
        .then(setOwners)
    },[])

    return (
        <>
        <h2>Owner list here</h2>
         <ul className='list-card'>
            {itemToDisplay}
        </ul>
        </>
    )
}

export default OwnersList