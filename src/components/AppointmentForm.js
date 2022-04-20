import {useState} from 'react'

const apptForm = {
    lesson: '',
    dog: '',
    date: ''
}


function AppointmentForm({ doggos, lessons }) {
    const [newApptForm, setNewApptForm] = useState(apptForm) 

    function handleApptForm(e) {
        setNewApptForm({...newApptForm, [e.target.name]: e.target.value})
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
    )
}

export default AppointmentForm