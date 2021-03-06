import { Link, useNavigate } from 'react-router-dom'
import { Typography, Box, Tab, Tabs } from "@mui/material"
import { useState, useEffect } from 'react'
import DoggoList from './DoggoList';
import Lesson from './Lessons';
import TrainerList from './TrainerList';
import OwnersList from './OwnersList';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function InfoSection({ user, trainers, setTrainers, owners, setOwners }) {
    const [dataToDisplay ,setDataToDisplay] = useState('trainer') 
    const [doggos ,setDoggos] = useState([]) 

    const navigate = useNavigate()


    useEffect(() => {
        if (!user.name) navigate('/')
        fetch(`http://localhost:9292/dogs/${user.category}/${user.name}`)
            .then(resp => resp.json())
            .then(setDoggos)
    }, [])

    function displayData() {
        switch (dataToDisplay) {
            case 'trainer' :
                return <TrainerList user={user} trainers={trainers} setTrainers={setTrainers} />;
            case 'lessons':
                return (<Lesson doggos={doggos} setDoggos={setDoggos} user={user}/>);
            case 'doggos':
                return (<DoggoList trainers={trainers} doggos={doggos} setDoggos={setDoggos}/>);
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
        <Button component={Link} label="Home" to="/" variant='outlined' style={{float:'right', top:'2em', right:'2em'}}>Logout</Button>
        <Stack direction="row">
            <Box id='info-page' sx={{ ml: 2, pr: 2, width: 'fit-content', borderRadius: 2}}>
                <Box component={Link} label="Home" to="/" style={{ height: '50px' }}>
                        <h1>Hello {user.name}</h1>
                </Box>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='trainer' onClick={changeDisplay}>Trainer</Button>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='lessons' onClick={changeDisplay}>Lessons</Button>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='doggos' onClick={changeDisplay}>Doggos</Button>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='owners' onClick={changeDisplay}>Owners</Button>
                {displayData()}
            </Box>
        </Stack>
        </>
    );
}

export default InfoSection
