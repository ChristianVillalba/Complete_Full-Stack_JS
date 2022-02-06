import React, {Component} from 'react';
// import {Link as RouterLink} from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Dashboard from '@material-ui/icons/Dashboard';
// import FileCopyIcon from '@material-ui/icons/FileCopy';

class Sidebar extends Component {
    render(){
        return (
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/> 
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Posts"/> 
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <FaceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users"/> 
                </ListItem>

            </List>
        )
    }
}

export default Sidebar;