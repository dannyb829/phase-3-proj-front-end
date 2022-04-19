import { useNavigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate()

  return ( <div id='about-page'>
        <h1>THIS IS THE ABOUT PAGE, IT IS IMPORT TO HAVE AN ABOUT</h1>
        <button id='nav-to-about' onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default About