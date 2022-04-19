import {useState} from 'react'
import DoggoList from './DoggoList';
import LessonList from './LessonList';
import TrainerList from './TrainerList';
import OwnersList from './OwnersList';

function InfoSection({userName}) {
    const [dataToDisplay ,setDataToDisplay] = useState('trainer') 

    function displayData() {
        switch (dataToDisplay) {
            case 'trainer' :
              return <TrainerList/>;
            break;  
            case 'lessons':
             return (<LessonList/>);
             break;
            case 'doggos':
             return (<DoggoList/>);
             break;
            case 'owners':
             return (<OwnersList/>);
             break;
            default : 
             return (<h1>Loading</h1>)

        } 

    }

    function changeDisplay(e) {
        setDataToDisplay(e.target.name)
    }

        return (
    <>
        <div id='info-page'>
       
            <h1>Hello {userName} THIS IS THE INFO PAGE!!!</h1>
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