import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import UpdateLessonForm from './UpdateLessonForm';


const LessonCard = ({id, title, content, structure, setLessons }) => {

    return (
        <Card variant="outlined" sx={{ maxWidth: "auto" }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Content {content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        structure {structure}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Edit Lesson
                </Button> */}
                <UpdateLessonForm id={id} title={title} setLessons={setLessons}/>
            </CardActions>
        </Card>
    );
}


export default LessonCard