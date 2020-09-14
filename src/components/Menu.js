import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    link: {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    },
    linkPrimary: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    }
}));

const DropMenu = ({name, items, color, to, pageState, setPageState, type}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);

    };
    const handleBaseClick = () => {
        if(type === "council"){
            setPageState({
                ...pageState,
                council: 0
            })
        } else if ( type === "work") {
            setPageState({
                ...pageState,
                work: 0
            })
        }

    }

    const handleClose = (event, index) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        console.log(event.target.getAttribute('name'))

        setOpen(false);
    };

    const handleItemClick = (event, index) => {
        if(type === "council"){
            setPageState({
                ...pageState,
                council: index+1
            });
        } else if(type === "work"){
            setPageState({
                ...pageState,
                work: index+1
            });
        }

        setOpen(false);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color={color ? color : "primary"}
            >
                <Link to={to ? to : "/"} className={classes.link} onClick={handleBaseClick}>{name}</Link>
                <ExpandMoreIcon />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper style={{zIndex: 20}}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {
                                        items.map((item, index) => {
                                            return (
                                                <MenuItem
                                                    name={item}
                                                    onClick={(event) => handleItemClick(event, index)}>
                                                   {item}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default DropMenu