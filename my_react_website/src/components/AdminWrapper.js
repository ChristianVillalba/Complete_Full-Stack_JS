import React, {Component} from "react";
import "./assets/css/admin.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//  Drawer imports
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import Divider from '@material-ui/core/Divider';

class AdminWrapper extends Component {
    render() {
        return (
            <div id="admin-page">
                <AppBar>
                    <Toolbar>
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
                <Drawer variant="permanent" open={true}>
                    <List>
                        <ListItem>Dashboard</ListItem>
                    </List>
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}

export default AdminWrapper;