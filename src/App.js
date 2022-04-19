
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/welcome';
import { useState } from 'react'
import InfoSection from './components/info';
import About from './components/about';

function App() {

  const [userName ,setUserName] = useState('') 

  return (
    <Routes>
      <Route path='/' element={<Welcome userName={userName} setUserName={setUserName}/>}>Here goes the welcome page component</Route>
      <Route path='/info' element={<InfoSection userName={userName}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>

  );
}

export default App;
