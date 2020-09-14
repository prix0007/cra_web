import React from 'react';
import Banner from "../components/Banner";
import {Grid} from "@material-ui/core";

const speakout = () => {
    return (
        <Grid container>
            <Banner heading={"Speak out"} />
            <iframe
                src={"https://docs.google.com/forms/d/e/1FAIpQLSfcfSIQ8ta2hRQtqYcPVKY9FwHm3TM0MvvlWpIVfs16vJT3vQ/viewform"}
                height={'1000px'}
                width={"100%"}
            >
                Your Browser Doesn't Support Iframes
            </iframe>
        </Grid>
    )
}

export default speakout;