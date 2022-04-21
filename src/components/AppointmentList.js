import AppointmentCard from "./MUI-Cards/AppointmentCard"
import {Grid, Stack} from '@mui/material'


function AppointmentList({ setAppointments, appointments, doggos, lessons, user }) {

  
    return (
        <Stack direction='row'>
        <Grid direction='row' container spacing={3}>
            {appointments.map((app) => (
                <Grid item >
                <AppointmentCard user={user} setAppointments={setAppointments} key={app.id} id={app.id} date={app.date} lesson={lessons.find((l)=> l.id === app.lesson_id )} dogName={doggos.find((d)=> d.id === app.dog_id ).name} />
                </Grid>
                ))}
        </Grid>
        </Stack>
    )
}

export default AppointmentList

{/* <b>Dog</b> {doggos.find((d) => app.dog_id === d.id).name} */}
