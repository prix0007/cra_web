import React from 'react';
import {Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        padding: '1rem 0.5rem',
        display: 'flex',
        flexDirection: 'column'
    },
    heading: {
        fontWeight: 700
    }
}))

const SimpleText = ({ name, text}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Typography
                variant={"h6"}
                gutterBottom
                className={classes.heading}
            >
                {name}
            </Typography>
            <Typography

            >
                {text}
            </Typography>
        </Grid>
    )
}

export default SimpleText