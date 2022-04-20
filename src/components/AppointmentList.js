function AppointmentList({ appointments, doggos, lessons }) {
    return (
        <ul className='list-card'>
            {appointments.map((app) => <li><b>Date</b> {app.date}<b>Lesson</b> {lessons.find((l) => app.lesson_id === l.id).title}<b>Dog</b> {doggos.find((d) => app.dog_id === d.id).name}</li>)}
        </ul>
    )
}

export default AppointmentList