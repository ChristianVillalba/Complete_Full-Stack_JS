import React, {Component} from "react";
import "./assets/css/admin.css";

import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//  Drawer imports
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const styles = theme => ({
    toolbar: {
        paddingRight: 24
    },
    appBar: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px`
        // zIndex: theme.zIndex.drawer + 1,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: 'noWrap',
        width: drawerWidth,
    }

})

class AdminWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: true
        }
    }

    handleDrawerOpen = (e) => {
        this.setState({open: true});
    }
    handleDrawerClose = (e) => {
        this.setState({open: false});
    }

    render() {
        const {classes} = this.props;
        return (
            <div id="admin-page">
                <AppBar classNmae={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                    <IconButton >
                            <MenuIcon />
                    </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            >Admin</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer classNames={classes.drawerPaper} variant="permanent" open={true}>
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <List>
                        <ListItem>Dashboard</ListItem>
                    </List>
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(AdminWrapper);