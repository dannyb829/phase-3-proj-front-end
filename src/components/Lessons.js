import { useEffect, useState } from "react";
import AppointmentForm from "./AppointmentForm";
import LessonForm from "./LessonForm";
import LessonList from "./LessonsList";
import AppointmentList from "./AppointmentList";


function Lesson({doggos, setDoggos}) {
    const [lessons ,setLessons] = useState([]) 
    const [options ,setOptions] = useState([]) 
  
    const [appointments ,setAppointments] = useState([]) 



    useEffect(()=>{
        fetch('http://localhost:9292/lessons')
        .then(resp => resp.json())
        .then(data => setLessons(data))
        fetch('http://localhost:9292/trainers')
        .then(resp => resp.json())
        .then(data=> setOptions(data.map((t)=> <option key={t.id} value={t.name}>{t.name}</option>)))
        fetch('http://localhost:9292/upcoming-appointments')
        .then(resp => resp.json())
        .then(setAppointments)
    },[])

    

    return (
        <>

        <LessonList lessons={lessons}/>
        <LessonForm options={options} setLessons={setLessons}/>
        <AppointmentForm doggos={doggos} lessons={lessons}/>
        <AppointmentList doggos={doggos} lessons={lessons} appointments={appointments}/>
        </>
    )
}

export default Lesson