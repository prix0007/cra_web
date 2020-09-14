import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: "#fff",
        margin: '1rem 0rem'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    heading: {
        color: 'blue',
        borderBottom: '1px solid #000'
    },
    text: {
        fontSize: '2rem',
    }
}));

const ExpandableView = ({ heading, additionalText, items}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            className={classes.root}
        >
            <ListItem button className={classes.heading} component="h4" onClick={handleClick}>
                <ListItemText primary={heading} className={classes.text}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        additionalText ?
                        <ListItem>
                            <ListItemText primary={additionalText}/>
                        </ListItem> : null
                    }
                    {
                        items.map((item, index) => {
                            return (
                                <ListItem button className={classes.nested} key={index}>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Collapse>
        </List>
    );
}

export default ExpandableView