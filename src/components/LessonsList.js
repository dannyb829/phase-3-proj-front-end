import { Grid, Stack } from '@mui/material'
import LessonCard from './MUI-Cards/LessonCard'

function LessonList({ lessons, setLessons, user }) {

    const itemToDisplay = lessons.map(lesson => (
        <Grid item>
            <LessonCard key={lesson.id} user={user} setLessons={setLessons} id={lesson.id} title={lesson.title} content={lesson.content} structure={lesson.structure} />
        </Grid>
    ))

    return (
        <ul className="list-card">
            <h2>Available Lessons</h2>
            <Stack direction='row'>
                <Grid direction='row' container spacing={4}>
                    {itemToDisplay}
                </Grid>
            </Stack>
        </ul>
    )
}

export default LessonList