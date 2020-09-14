import React from 'react';

import Grid from '@material-ui/core/Grid';
import Banner from "../../components/Banner";
import {Typography} from "@material-ui/core";
import ExpandableView from "../../components/ExpandableView";
import {makeStyles} from "@material-ui/core/styles";

const completedData = [
    {
        name: "Events",
        items: [
            "Holi Event on 6 Mar 2020",
           " Chess Being fun (February 2020)",
            "PUBG (Total 3 times from January)",
            "Gaming Night including FIFA, CS GO, Fortnite, PUBG(February 2020)",
            "Movie Night (January 2020)",
            "Gaming Night including CS GO, PUBG(November 2019)",
            "15 August Evening Fun (August 2019)"
        ]
    },
    {
        name: "Welfare Works",
        items: [
            "Arrange Medical Checkups in concern to COVID-19",
            "Created Hostel Website",
            "Created CRA Council Website",
            "Created Instagram Page for Collection of Memories (Hostel-Vibes)",
            "Made arrangements of Backup in case of Water Shortage",
            "Worked on Hostel Feedback System, in every 45 days",
            "Worked on Water Cooler Cleaning ,in every 15 days",
            "Removed the in- timings differences of Hostel for Girls and Boys",
            "Extended the Sports Timings",
            "Drafted a Hostel Constitution",
            "Connected each and every Hostler via Floor Group and started online information exchange"
        ]
    },
]

const useStyles  = makeStyles((theme) => ({
    heading:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.main,
        background: theme.palette.primary.light,
        padding: '2rem 0rem'
    }
}))

const Completed = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Banner heading={"Completed"} />
            <Typography variant={"h3"} align={"center"} className={classes.heading}>
                Here are the works done by your council
            </Typography>
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10} >
                {
                    completedData.map((item) => {
                        return (
                            <ExpandableView
                                heading={item.name}
                                items={item.items}
                                />
                        )
                    })
                }
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Grid>
    );
}

export default Completed