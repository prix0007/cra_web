import React from 'react';

import { roleData } from './tempData/home'
import SimpleText from "../components/SimpleText";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Banner from '../components/Banner';

const styles = (theme) => ({
    blue: {
        color: '#283593',
        margin: '1rem'
    }
})

const home = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Grid container>
                <Banner heading={"CRA"} />
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Typography
                        align={"center"}
                        variant={"h3"}
                        guttterBottom
                        className={classes.blue}
                    >
                        About Us
                    </Typography>
                    <Typography
                        gutterBottom
                    >
                        A Hostel Council is a body of elected and non-elected student representatives residing in the Hostel.
                    </Typography>
                    <Typography
                        gutterBottom
                    >
                        The First CRA or <strong>The Foundation day</strong> of CRA is <strong>14th August</strong>
                    </Typography>
                    <Typography
                        gutterBottom
                    >
                        Details about Hostel Council Body is as follows :
                    </Typography>
                    {
                        roleData.map((role, index) => {
                            return (
                                <SimpleText name={role.name} text={role.text} />
                            );
                        })
                    }
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </React.Fragment>
    )
}

export default withStyles(styles)(home)