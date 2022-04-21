import { Grid, Stack } from '@mui/material'
import LessonCard from './MUI-Cards/LessonCard'

function LessonList({ lessons, setLessons }) {

    const itemToDisplay = lessons.map(lesson => (
        <Grid item xs={4}>
            <LessonCard key={lesson.id} setLessons={setLessons} id={lesson.id} title={lesson.title} content={lesson.content} structure={lesson.structure} />
        </Grid>
    ))

    return (
        <Grid>
            <h2>Available Lessons</h2>
            <Stack direction='row' className="list-card">
                <Grid direction='row' container spacing={4}>
                    {itemToDisplay}
                </Grid>
            </Stack>

        </Grid>
    )
}

export default LessonList