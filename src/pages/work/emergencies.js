import React from 'react';

import Grid from '@material-ui/core/Grid';
import Banner from "../../components/Banner";

import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center",
        justifyContent: 'center'
    }
}))

const Emergencies = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Banner heading={"Emergencies"} />
            <Grid container className={classes.contentRoot}>
                <br />
                <Typography align={"center"} variant={"h3"} gutterBottom>
                    Medical Checkup in Hostel Scheduled
                </Typography>
                <iframe
                    src={"https://drive.google.com/open?authuser=0&id=1ylD1io8rbMjfJJRo3Iw2SCgJrmkuncx6KCEnY6iNpZM"}
                    height={'500px'}
                    width={"80%"}
                >
                    Sorry Your Browser Doesn't Support Iframes
                </iframe>
                <br />
                <br />
                <Typography align={"center"} variant={"h3"} gutterBottom>
                    Posts sent on Floor Groups
                </Typography>
                <iframe
                    src={"https://docs.google.com/presentation/d/11yE8azkbVc_ByeseDhScKlxpQc8Vh2NQQePtxZty9RM/present"}
                    height={'500px'}
                    width={"80%"}
                >
                    Sorry Your Browser Doesn't Support Iframes
                </iframe>
                <br />
                <br />
            </Grid>
        </Grid>
    );
}

export default Emergencies