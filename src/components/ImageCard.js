import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import noFace from '../assets/img/noface.png'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        minWidth: 400,
        margin: '1rem'
    },
    media: {
       height: 250
    },
}));

export default function ImageCard({ name, post, email, img, mobile}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img ? img : noFace}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h4">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h5">
                        {post}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {mobile}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}