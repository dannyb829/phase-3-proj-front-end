import { useState } from 'react'

const emptyLesson = {
    title: "",
    content: '',
    structure: "",
    trainer: ""
}

function LessonForm({ options, setLessons }) {

    const [newLesson, setNewLesson] = useState(emptyLesson)

    function handleLessonForm(e) {
        setNewLesson({ ...newLesson, [e.target.name]: e.target.value })
    }



    function handleLessonSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/lessons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLesson)
        })
            .then(resp => resp.json())
            .then(lesson => setLessons(prev => [...prev, lesson]))
        setNewLesson(emptyLesson)
        alert('lesson created!')
    }


    return (
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
    )
}

export default LessonForm