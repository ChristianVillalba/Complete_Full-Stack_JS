import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import * as Yup from 'yup';
import { withFormik } from 'formik';

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

const mapStateToProps = state => ({
    auth: state.auth,
    admin: state.admin
});

const mapDispatchToProps = state => ({

});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: (props) => ({
        title: props.admin.post.title || '',
        slug: props.admin.post.slug || '',
        createdAt: props.admin.post.createdAt || '',
        status: props.admin.post.status || false,
        content: props.admin.post.content || ''
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Title is required'),
        slug: Yup.string().required(),
        content: Yup.string().required()
    }),
    handleSubmit: (values, {setSubmitting, props}) => {
        console.log("Saving", props.addPost);
        if(props.match.params.view === 'edit'){
            const post = {
                ...values,
                id: props.match.params.id
            }
            props.updatePost(post, props.auth.token);
        }else{
            props.addPost(values, props.auth.token);
        }
    }
})(withStyles(styles)(AddPost))));