import React, {Component} from 'react';
import {connect} from "react-redux";

class Single extends Component {
    render(){
        return(
            <h1>Single</h1>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    site: state.site,
})

const mapDispatchToProps = dispatch => ({
    getSinglePost: (slug, token) => {
        dispatch (SiteActions.getPostBySlug(slug, token))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);