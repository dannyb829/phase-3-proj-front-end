import { useNavigate } from 'react-router-dom'

function Welcome({ user, setUser, trainers, setTrainers, owners, setOwners }) {

    const { category, name } = user
    const trainerNames = trainers.map((t) => <option key={t.id} value={t.name}>{t.name}</option>)
    const ownerNames = owners.map((o) => <option key={o.id} value={o.name}>{o.name}</option>)
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
        <div id='welcome-page'>
            <img id='home-logo' style={{ width: '40em' }} src='/images/Puppy.png' alt='Dog 101' />
            <form onSubmit={handleUserSubmit}>
                <select name='category' onChange={handleUserChange} value={category} defaultValue='DEFAULT'>
                    <option value='DEFAULT'>Select category</option>
                    <option value='Owner'>Owner</option>
                    <option value='Trainer'>Trainer</option>
                </select>
                <select name='name' onChange={handleUserChange} defaultValue='DEFAULT' value={name}>
                    <option value='DEFAULT'>Select name</option>
                    {category === 'Trainer' ? trainerNames : ownerNames}
                </select>
                <input type='submit'></input>
            </form>
            <button id='nav-to-about' onClick={() => navigate('/about')}>About Us</button>
        </div>
    )
}

export default Welcome




{/* <form>
    <select onChange={e=> setUser(e.target.value)} value={category} defaultValue='DEFAULT'>
        <option value='DEFAULT' disabled>Select category</option>
        <option value='owner'>Owner</option>
        <option value='trainer'>Trainer</option>
    </select>
    {category === 'owner' ? <select>{trainerNames}</select> :
    <select>{ownerNames}</select>}
</form>  */}