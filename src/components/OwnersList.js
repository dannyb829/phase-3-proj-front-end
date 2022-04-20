import { useEffect, useState } from "react";

function OwnersList({owners,setOwners}) {
    

    const itemToDisplay = owners.map(owner => <li key={owner.id} className='list-item'><b>Owner</b> {owner.name} <b>Address</b> {owner.address}</li>)
    

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