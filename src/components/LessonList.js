import { useEffect, useState } from "react";

const emptyLesson = {
    title: "",
    content: '',
    structure: "",
    trainer: ""
}

const apptForm = {
    lesson: '',
    dog: '',
    date: ''
}


function LessonList({doggos, setDoggos}) {
    const [lessons ,setLessons] = useState([]) 
    const [newLesson, setNewLesson] = useState(emptyLesson)
    const [options ,setOptions] = useState([]) 
    const [newApptForm, setNewApptForm] = useState(apptForm) 
    const [appointments ,setAppointments] = useState([]) 


    const itemToDisplay = lessons.map(lesson => <li key={lesson.id}><b>LESSON</b> {lesson.title} <b>Objective</b> {lesson.content}</li>)

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

    function handleLessonForm(e) {
        setNewLesson({...newLesson, [e.target.name]: e.target.value })
    }

    function handleApptForm(e) {
        setNewApptForm({...newApptForm, [e.target.name]: e.target.value})
    }

    function handleLessonSubmit(e) {
        e.preventDefault()
       fetch('http://localhost:9292/lessons',{
           method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(newLesson)})
        .then(resp => resp.json())
        .then(lesson => setLessons(prev =>[...prev,lesson]))
        setNewLesson(emptyLesson)
        alert('lesson created!')
    }

    function handleSubmitAppt(e) {
        e.preventDefault()
        fetch('http://localhost:9292/appointments',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newApptForm)})
        .then(resp => resp.json())
        .then(console.log)
        e.target.reset()
    }

  

    return (
        <>

        <ul className="list-card">
        <h2>Available Lessons</h2>
        {itemToDisplay}
        </ul>
        <div className="list-card">
            <h3>Create a new lesson</h3>
            <form id='new-lesson-form' onSubmit={handleLessonSubmit}>
                <select name='trainer' onChange={handleLessonForm} defaultValue='DEFAULT' value={newLesson.trainer}>
                    <option value='DEFAULT'>Select trainer</option>
                    {options}
                </select>
                <input name='title' placeholder="title" onChange={handleLessonForm} value={newLesson.title}></input>
                <input name='content' placeholder="content" onChange={handleLessonForm} value={newLesson.content}></input>
                <input name='structure' placeholder="structure" onChange={handleLessonForm} value={newLesson.structure}></input> 
                <input type='submit' ></input>             
            </form>
        </div>
        <div className='list-card'>
            <form id='sign-up-lesson' onSubmit={handleSubmitAppt}>
                <h3>Sign up for a lesson</h3>
                <select defaultValue='DEFAULT' name='lesson' onChange={handleApptForm} value={newApptForm.lesson}>
                    <option value='DEFAULT'>Select Lesson</option>
                    {lessons.map((lesson)=> <option key={lesson.id} value={lesson.title}>{lesson.title}</option>)}
                </select>
                <select defaultValue='DEFAULT' name='dog' onChange={handleApptForm} value={newApptForm.dog}>
                    <option value='DEFAULT'>Select Dog</option>
                    {doggos.map((dog)=> <option key={dog.id} value={dog.name}>{dog.name}</option>)}
                </select>
                <input name='date' type='date' onChange={handleApptForm} value={newApptForm.date}></input>
                <input type='submit'></input>
            </form>
        </div>
        <ul className='list-card'>
            {appointments.map((app)=> <li><b>Date</b> {app.date}<b>Lesson</b> {lessons.find((l)=> app.lesson_id === l.id).title}<b>Dog</b> {doggos.find((d)=> app.dog_id === d.id).name}</li>)}
        </ul>
        </>
    )
}

export default LessonList