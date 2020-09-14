import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import Banner from "../../components/Banner";

const concerns = [
    "COVID-19",
    "Hygiene in Hostel",
    "Release of Hostel Website"
]

const MatterOfConcern = () => {

    const handleClick = () => {
        window.open("http://localhost:3000/speakout")
    }

    return (
        <Grid container>
            <Banner heading={"Matter of Concern"} />
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10} >
                    <br />
                    <Typography align={"center"} variant={"h4"}>
                        TOP THREE CONCERNS
                    </Typography>
                    {
                        concerns.map((concern) => {
                            return (
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                >
                                    {concern}
                                </Typography>
                            )
                        })
                    }
                    <br/><br/>
                    <br/><br/><br/>
                    <Typography variant={"h6"}>
                        Want us to look in any other matter with serious concerns, fill out the form below with tag as suggestion
                    </Typography>
                    <br/>
                    <Button variant={"contained"} onClick={handleClick}>
                        Fill Me
                    </Button>
                    <br/><br/>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Grid>
    );
}

export default MatterOfConcern