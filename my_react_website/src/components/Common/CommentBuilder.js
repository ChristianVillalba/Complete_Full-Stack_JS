import React, {Component} from 'react';
import * as SiteActions from '../../store/actions/siteActions';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import * as Yup from 'yup';

class CommentBuilder extends Component {
    render(){
        return(
            <h1>Hi</h1>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    postComment: (comment, token) => {
        dispatch(SiteActions.postComment(comment, token));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        content: ''
    }),
    validationSchema: Yup.object().shape({
        content: Yup.string().required('Your comment needs to have text.')
    }),
    handleSubmit: (values, {setSubmitting}, login) => {
        //login(values.email, values.password);
    }
})(CommentBuilder));