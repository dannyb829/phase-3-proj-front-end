import { Link } from 'react-router-dom'
import { Typography, Box, Tab, Tabs } from "@mui/material"
import { useState, useEffect } from 'react'
import DoggoList from './DoggoList';
import LessonList from './LessonList';
import TrainerList from './TrainerList';
import OwnersList from './OwnersList';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function InfoSection({ userName }) {
    const [dataToDisplay, setDataToDisplay] = useState('trainer')
    const [doggos, setDoggos] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/dogs')
            .then(resp => resp.json())
            .then(setDoggos)
    }, [])

    function displayData() {
        switch (dataToDisplay) {
            case 'trainer':
                return <TrainerList />;
            case 'lessons':
                return (<LessonList doggos={doggos} setDoggos={setDoggos} />);
            case 'doggos':
                return (<DoggoList doggos={doggos} setDoggos={setDoggos} />);
            case 'owners':
                return (<OwnersList />);
            default:
                return (<h1>Loading</h1>)

        }

    }

    function changeDisplay(e) {
        setDataToDisplay(e.target.name)
    }

    return (
        <Stack direction="row">
            <Box id='info-page' sx={{ bgcolor: 'white', ml: 2, pr: 2, width: 'fit-content', borderRadius: 2 }}>
                <Box component={Link} label="Home" to="/" style={{ height: '50px' }}>
                    <Typography
                        noWrap
                        sx={{ height: 1, pr: 2 }}
                    >
                        <h1>Hello {userName}</h1>
                    </Typography>
                </Box>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='trainer' onClick={changeDisplay}>Trainer</Button>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='lessons' onClick={changeDisplay}>Lessons</Button>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='doggos' onClick={changeDisplay}>Doggos</Button>
                <Button variant="contained" style={{ backgroundColor: "#4CB944" }} name='owners' onClick={changeDisplay}>Owners</Button>
                {displayData()}
            </Box>
        </Stack>
    );
}