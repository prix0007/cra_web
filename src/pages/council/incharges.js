import React from 'react';
import Banner from "../../components/Banner";
import Grid from '@material-ui/core/Grid';

import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { incharges } from '../tempData/council';
import ImageCard from "../../components/ImageCard";

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

const Incharges = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Banner heading={"Incharges"} />
            <Grid container>
                {
                    incharges.map((incharge, index) => {
                        return (
                            <Grid container className={classes.section}>
                                <Typography
                                    variant={"h3"}
                                    color={"secondary"}
                                    align={"center"}
                                    className={classes.heading}
                                >
                                    {incharge.name}
                                </Typography>
                                {
                                    <Grid container>
                                        <Grid item xs={2} />
                                        <Grid item xs={8} className={classes.imageContainer}>
                                            {
                                                incharge.members.map((member, index) => {
                                                    return (
                                                        <ImageCard
                                                            name={member.name}
                                                            post={member.tenure}
                                                            email={member.email}
                                                            mobile={member.number}
                                                            img={member.image}
                                                        />
                                                    )
                                                })
                                            }
                                        </Grid>
                                        <Grid item xs={2} />
                                    </Grid>
                                }
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default Incharges