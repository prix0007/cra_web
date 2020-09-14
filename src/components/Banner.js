import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        background: theme.palette.primary.main,
    },
    contentRoot: {
        minHeight: '80vh',
        paddingBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        border: `0.5rem solid ${theme.palette.secondary.main}`,
        margin: '2rem 0rem',
        padding: '3rem 0rem',
        minWidth: '100%',
    }
}))

const Banner = ({heading}) => {
    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={2} />
            <Grid itemn xs={8} className={classes.contentRoot}>
               <div className={classes.heading}>
                   <Typography variant={"h3"} color={"secondary"} align={"center"}>
                       { heading }
                   </Typography>
               </div>
                <Typography color={"secondary"} align={"center"} gutterBottom>
                    Indian Institute of Information Technology, Nagpur
                </Typography>
                <Typography variant={"h4"} color={"secondary"} align={"center"} gutterBottom>
                    COUNCIL OF RESIDENTIAL AFFAIRS
                </Typography>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    )
}

export default Banner