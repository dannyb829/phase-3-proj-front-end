import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Welcome({ user, setUser, trainers, setTrainers, owners, setOwners }) {

    const { category, name } = user
    const trainerNames = trainers.map((t) => <MenuItem key={t.id} value={t.name}>{t.name}</MenuItem>)
    const ownerNames = owners.map((o) => <MenuItem key={o.id} value={o.name}>{o.name}</MenuItem>)
    const navigate = useNavigate()

    
    
    function handleUserChange(e) {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
    function handleUserSubmit(e) {
        e.preventDefault()
        if (!user.name && !user.category) alert('please select a category and user!')
        else navigate('/info')
    }
    
    return (
        <div >
            <Card sx={{ margin: 'auto', position: 'relative', top: '3em', maxWidth: 800, minHeight: 700 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image='/images/Puppy.png'
                    alt="Dog 101 logo"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography sx={{ margin: '1em', color: '#2f2f2f' }} gutterBottom variant="h5" component="div">
                        <b>Welcome Back!</b>
                    </Typography>
                    <form onSubmit={handleUserSubmit}>
                        <FormControl sx={{ m: 1, minWidth: 120, display: 'inline' }}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                sx={{ width: '15em' }}
                                id="demo-simple-select"
                                value={category}
                                labelId='demo-simple-select-label'
                                label="category"
                                name='category'
                                onChange={handleUserChange}
                                defaultValue='DEFAULT'
                            >
                                <MenuItem value='Owner'>Owner</MenuItem>
                                <MenuItem value='Trainer'>Trainer</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120, display: 'inline' }}>
                            <InputLabel id="simple-select">User</InputLabel>
                            <Select
                                sx={{ width: '15em' }}
                                id="simple-select"
                                value={name}
                                labelId='simple-select'
                                label="name"
                                name='name'
                                onChange={handleUserChange}
                            >
                                {category === 'Trainer' ? trainerNames : ownerNames}
                            </Select>
                        </FormControl>
                        <Button type='submit' variant='contained' sx={{ height: '4em' }}>submit</Button>
                    </form>
                </CardContent>
                <CardActions>
                    <Button sx={{ bottom: '1em', position: 'absolute' }} size="small" onClick={() => navigate('/about')}>About Us</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Welcome



// const trainerNames = trainers.map((t) => <option key={t.id} value={t.name}>{t.name}</option>)
// const ownerNames = owners.map((o) => <option key={o.id} value={o.name}>{o.name}</option>)
{/* <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Category</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="category"
    name='category'
    onChange={handleUserChange}
  >
    <MenuItem value='DEFAULT'>Select category</MenuItem>
    <MenuItem value='Owner'>Owner</MenuItem>
    <MenuItem value='Trainer'>Trainer</MenuItem>
  </Select>
</FormControl>

<select name='category' onChange={handleUserChange} value={category} defaultValue='DEFAULT'>
                            <option value='DEFAULT'>Select category</option>
                            <option value='Owner'>Owner</option>
                            <option value='Trainer'>Trainer</option>
                        </select> */}


//   <InputLabel id="demo-simple-select-label">Category</InputLabel>
//   <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value={category}
//     label="category"
//     name='category'
//     onChange={handleUserChange}
//   >
//    {category === 'Trainer' ? trainerNames : ownerNames}
//   </Select>

// const trainerNames = trainers.map((t) => <MenuItem key={t.id} value={t.name}>{t.name}</MenuItem>)