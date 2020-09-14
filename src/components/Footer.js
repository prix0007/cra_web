import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        background: theme.palette.primary.main,
        padding: '0.7rem 0rem'
    }
}))

const Footer = () => {
    const  classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={1} />
            <Grid item xs={5}>
                <Typography
                    color={"secondary"}
                >
                    Copyright 2020 &copy; CRA, IIITN
                </Typography>
                <Typography
                    color={"secondary"}
                    variant={"caption"}
                    gutterBottom
                >
                    Grievance Department mail : <a href = "mailto: grievance.cra@gmail.com">grievance.cra@gmail.com</a>
                </Typography>
                <Typography
                    color={"secondary"}
                    variant={"body2"}
                >
                    <i>Website Managed by : General Secretary and Technical Council CRA</i>
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <iframe
                    src={"https://maps.google.com/maps?ll=21.164554,79.054663&z=16&t=m&hl=en&gl=US&mapclient=embed&q=Near%20TV%20Tower%2C%20Seminary%20Hills%2C%20Nagpur%2C%20Maharashtra%20440006%2C%20India"}
                    width={"100%"}
                >

                </iframe>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}

export  default Footer