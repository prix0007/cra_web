import React from 'react';
import Banner from "../components/Banner";
import Grid from "@material-ui/core/Grid";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import clsx from 'clsx'

const tempData = [
    {
        text: "Concluding the CRA 1.0, certification and final report and formation of CRA 2.0 is in Progress (Will be done by 14th August)"
    },
    {
        text: "Council Meeting with Warden related to Preventive Measures on 15-Feb-2020"
    },
    {
        text: "Medical Checkup of Hostlers on 16 Feb 2020"
    },
    {
        text: "Movie Night scheduled after Inter IIIT Sports Events"
    },
    {
        text: "Girls Night scheduled in April 2020"
    },
    {
        text: "Fun Events planned after Sessionals 2"
    }
]

const useStyles = makeStyles((theme) => createStyles({
    dark : {
        background: theme.palette.primary.light
    },
    light: {

    },
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

    },
    item: {
        padding: '2rem 0rem',
        paddingLeft: '6rem',
    }
}))

const Highlight = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Banner heading={"Highlights"} />
            <div className={classes.contentRoot}>
            {
                tempData.map((data, index) => {
                    return (
                        <div className={clsx(index%2 === 0 ? classes.dark : classes.light, classes.item)}>
                            <Typography variant={"body1"} color={index%2 === 0 ? "secondary" : "primary"}>
                                { data.text }
                            </Typography>
                        </div>
                    )
                })
            }
            </div>
        </Grid>
    )
}

export default Highlight;