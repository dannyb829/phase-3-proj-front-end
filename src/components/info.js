import {useState, useEffect} from 'react'
import DoggoList from './DoggoList';
import Lesson from './Lessons';
import TrainerList from './TrainerList';
import OwnersList from './OwnersList';

function InfoSection({user, trainers, setTrainers, owners, setOwners}) {
    const [dataToDisplay ,setDataToDisplay] = useState('trainer') 
    const [doggos ,setDoggos] = useState([]) 

    useEffect(()=>{
        fetch('http://localhost:9292/dogs')
        .then(resp => resp.json())
        .then(setDoggos)
    },[])

    function displayData() {
        switch (dataToDisplay) {
            case 'trainer' :
                return <TrainerList user={user} trainers={trainers} setTrainers={setTrainers} />;
            case 'lessons':
                return (<Lesson doggos={doggos} setDoggos={setDoggos}/>);
            case 'doggos':
                return (<DoggoList doggos={doggos} setDoggos={setDoggos}/>);
            case 'owners':
                return (<OwnersList owners={owners} setOwners={setOwners}/>);
            default : 
                return (<h1>Loading</h1>)

        } 

    }

    function changeDisplay(e) {
        setDataToDisplay(e.target.name)
    }

        return (
    <>
            <h1>Hello {user.name} THIS IS THE INFO PAGE!!!</h1>
        <div id='info-page'>

            <nav>
                <button name='trainer' onClick={changeDisplay}>Trainer</button>
                <button name='lessons' onClick={changeDisplay}>Lessons</button>
                <button name='doggos' onClick={changeDisplay}>Doggos</button>
                <button name='owners' onClick={changeDisplay}>Owners</button>
            </nav>
            {displayData()}
        </div>
        </>
    )
}

export default InfoSection

