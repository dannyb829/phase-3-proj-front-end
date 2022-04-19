import { useEffect, useState } from "react";

const emptyLesson = {
    title: "",
    content: '',
    structure: "",
    trainer: ""
}


function LessonList() {
    const [lessons ,setLessons] = useState([]) 
    const [newLesson, setNewLesson] = useState(emptyLesson)
    const [options ,setOptions] = useState([]) 


    const itemToDisplay = lessons.map(lesson => <li key={lesson.id}><b>LESSON</b> {lesson.title} <b>Objective</b> {lesson.content}</li>)

    useEffect(()=>{
        fetch('http://localhost:9292/lessons')
        .then(resp => resp.json())
        .then(data => setLessons(data))
        fetch('http://localhost:9292/trainers')
        .then(resp => resp.json())
        .then(data=> setOptions(data.map((t)=> <option key={t.id} value={t.name}>{t.name}</option>)))
    },[])

    function handleLessonForm(e) {
        setNewLesson({...newLesson, [e.target.name]: e.target.value })
    }

    function handleLessonSubmit(e) {
        e.preventDefault()
       fetch('http://localhost:9292/lessons',{
           method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(newLesson)
       })
    }

  

    return (
        <>

        <h2>Lesson list here</h2>
        <ul className="list-card">
        {itemToDisplay}
        </ul>
        <div className="list-card">
            <h3>Create a new lesson</h3>
            <form id='new-lesson-form' onSubmit={handleLessonSubmit}>
                <select name='trainer' onChange={handleLessonForm} value={newLesson.trainer}>
                    <option selected>Select trainer</option>
                    {options}
                </select>
                <input name='title' placeholder="title" onChange={handleLessonForm} value={newLesson.title}></input>
                <input name='content' placeholder="content" onChange={handleLessonForm} value={newLesson.content}></input>
                <input name='structure' placeholder="structure" onChange={handleLessonForm} value={newLesson.structure}></input> 
                <input type='submit' ></input>             
            </form>
        </div>
        </>
    )
}

export default LessonList