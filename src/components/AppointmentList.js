import AppointmentCard from "./MUI-Cards/AppointmentCard"


function AppointmentList({ appointments, doggos, lessons }) {

  
    return (
        <ul className='list-card'>
            {appointments.map((app) => <AppointmentCard key={app.id} date={app.date} lesson={lessons.find((l)=> l.id === app.lesson_id )} dogName={doggos.find((d)=> d.id === app.dog_id ).name} />)}
        </ul>
    )
}

export default AppointmentList

{/* <b>Dog</b> {doggos.find((d) => app.dog_id === d.id).name} */}
