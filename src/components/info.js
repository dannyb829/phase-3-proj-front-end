import {useState, useEffect} from 'react'
import DoggoList from './DoggoList';
import LessonList from './LessonList';
import TrainerList from './TrainerList';
import OwnersList from './OwnersList';

function InfoSection({userName}) {
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
              return <TrainerList/>;
            case 'lessons':
             return (<LessonList doggos={doggos} setDoggos={setDoggos}/>);
            case 'doggos':
             return (<DoggoList doggos={doggos} setDoggos={setDoggos}/>);
            case 'owners':
             return (<OwnersList/>);
            default : 
             return (<h1>Loading</h1>)

        } 

    }

    function changeDisplay(e) {
        setDataToDisplay(e.target.name)
    }

        return (
    <>
            <h1>Hello {userName} THIS IS THE INFO PAGE!!!</h1>
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