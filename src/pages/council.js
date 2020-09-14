import React from 'react';

import Incharges from './council/incharges';
import WorkReport from './council/workReport';
import Banner from "../components/Banner";
import Grid from "@material-ui/core/Grid";

import { committeeData } from "./tempData/council";
import {Typography} from "@material-ui/core";

import ImageCard from "../components/ImageCard";
import {makeStyles, createStyles}  from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => createStyles({
    section: {
        display: 'flex',
        flexDirection: 'column'
    },
    heading: {
        height: '5rem',
        background: theme.palette.primary.light,
        justifyContent: 'center',
        alignItems: "center",
        verticalAlign: 'middle',
        paddingTop: '1.5rem'
    },
    imageContainer: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center'
    }
}))

const Council = ({ pageState }) => {

    const classes = useStyles();

    const getContent = () => {
        switch (pageState.council) {
            case 1: return <Incharges />
            case 2: return <WorkReport />
            default: return <h1>Something Went Wrong. Please Refresh Your Page</h1>
        }
    }

    return (
        <React.Fragment>
        {
            (pageState.council === 0) ?
                <Grid container>
                    <Banner heading={"Council"} />
                    <Grid container>
                    {
                        committeeData && committeeData.map((data, index) => {
                            console.log(data.members)
                            return (
                                <Grid container className={classes.section}>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant={"h3"}
                                            color={"secondary"}
                                            align={"center"}
                                            className={classes.heading}>
                                            {data.name}
                                        </Typography>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={2} />
                                        <Grid item xs={8} className={classes.imageContainer}>
                                        {
                                            data.members.map((member, index) => {
                                                return (
                                                    <ImageCard
                                                        name={member.name}
                                                        post={member.post}
                                                        email={member.email}
                                                        mobile={member.mobile}
                                                        img={member.image}
                                                    />
                                                )
                                            })
                                        }
                                        </Grid>
                                        <Grid item xs={2} />
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </Grid>
                :
                getContent()
        }
        </React.Fragment>
    )
}

export default Council;