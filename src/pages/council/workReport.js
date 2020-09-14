import React from 'react';
import Grid from "@material-ui/core/Grid";
import Banner from "../../components/Banner";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.secondary.main,
        background: theme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '2rem 0rem'
    }
}))

const WorkReport = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Banner heading={"Work Report"} />
            <Typography variant={"h3"} gutterBottom align={"center"} className={classes.heading}>
                COUNCIL WORK REPORT 2019
            </Typography>
            <iframe
                title={"WorkReport"}
                src={"https://drive.google.com/open?authuser=0&id=1aa4W_S1unY9oLEQIkOSkOvq9JstFe9s_1zNExT9W368"}
                width={"100%"}
                height={"600px"}
            >
                Sorry Your Browser Doesn't Support Iframes
            </iframe>
        </Grid>
    )
}

export default WorkReport