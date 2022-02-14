import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import * as Yup from 'yup';

const styles = theme => ({
    container: {
        margin: theme.spacing.unit * 3,
        display: 'flex',
        flexDirection: 'row wrap',
        width: '100%'
    },
})


class AddPost extends Component {
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <h1>Add Post</h1>
            </div>
        )
    }
}

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(Users);