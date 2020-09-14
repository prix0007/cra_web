import React from 'react';
import { Link } from 'react-router-dom'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Button from '@material-ui/core/Button';

import logo from '../assets/img/logo_small.png'

import DropMenu from "./Menu";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            padding: '0.7rem 1.5rem',
            justifyContent: 'space-between'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        buttonGroup: {
            display: 'flex',
            flexDirection: 'row'
        },
        button: {
            width: 'max-content'
        },
        link: {
            color: theme.palette.secondary.main,
            textDecoration: 'none'
        },
        image: {
            height: 30,
            margin: 10
        }
    }),
);

const Navbar = ({pageState, setPageState}) => {
    const classes = useStyles();

    return (
        <div >
            <AppBar position="fixed" className={classes.root}>
                <img src={logo} alt={"logo"} className={classes.image}/>
                <div className={classes.buttonGroup}>
                    <Button
                        color={"secondary"}
                        className={classes.button}>
                        <Link to={"/"} className={classes.link}>Home</Link>
                    </Button>
                    <DropMenu
                        color={"secondary"}
                        name={'Council'}
                        items={['Incharge', 'Council Work Report']}
                        to={"/council"}
                        pageState={pageState}
                        setPageState={setPageState}
                        type={"council"}
                    />
                    <Button
                        color={"secondary"}
                        className={classes.button}>
                        <Link to={"/highlights"} className={classes.link}>Highlights</Link>
                    </Button>
                    <DropMenu
                        color={"secondary"}
                        name={'Work'}
                        items={['Meetings', 'Emergencies', 'Matter of Concern', 'Work in Progress', 'Completed']}
                        to={"/work"}
                        pageState={pageState}
                        setPageState={setPageState}
                        type={"work"}
                    />
                    <Button
                        color={"secondary"}
                        className={classes.button}>
                        <Link to={"/speakout"} className={classes.link}>Speak Out</Link>
                    </Button>
                </div>
            </AppBar>
        </div>
    );
}

export default Navbar