import {useNavigate} from 'react-router-dom'

function Welcome({userName, setUserName}) {

    const navigate = useNavigate()
    return (
        <div id='welcome-page'>
            <img id='home-logo' style={{width:'40em'}} src='/images/Puppy.png' alt='WTF'/>
            <form >
                <input id='user-name'type='text' placeholder='enter your name' onChange={e => setUserName(e.target.value)} value={userName}></input>
                <button type='submit' onClick={() => navigate('/info')}>➡️</button>
            </form>
            <button id='nav-to-about' onClick={() => navigate('/about')}>About Us</button>
        </div>
    )
}

export default Welcome