function LessonList({ lessons }) {

    const itemToDisplay = lessons.map(lesson => <li key={lesson.id}><b>LESSON</b> {lesson.title} <b>Objective</b> {lesson.content}</li>)

    return (
        <ul className="list-card">
            <h2>Available Lessons</h2>
            {itemToDisplay}
        </ul>
    )
}

export default LessonList