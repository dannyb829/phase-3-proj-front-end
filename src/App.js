
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/welcome';
import { useState, useEffect } from 'react'
import InfoSection from './components/info';
import About from './components/about';

function App() {

  const [user ,setUser] = useState({category:'',name:''}) 
  const [trainers, setTrainers] = useState([])
  const [owners ,setOwners] = useState([]) 

  useEffect(() => {
    fetch('http://localhost:9292/trainers')
        .then(resp => resp.json())
        .then(data => setTrainers(data))
}, [])

  useEffect(()=>{
    fetch('http://localhost:9292/owners')
        .then(resp => resp.json())
        .then(setOwners)
},[])

  return (
    <Routes>
      <Route path='/' element={<Welcome user={user} setUser={setUser} trainers={trainers} setTrainers={setTrainers} owners={owners} setOwners={setOwners}/>}>Here goes the welcome page component</Route>
      <Route path='/info' element={<InfoSection user={user} trainers={trainers} setTrainers={setTrainers} owners={owners} setOwners={setOwners}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>

  );
}

export default App;
