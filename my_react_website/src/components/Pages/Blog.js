import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import * as SiteActions from '../../store/actions/siteActions';
import BlogItem from '../Common/BlogItem';

class Blog extends Component {
    componentDidMount(){
        this.props.getPosts(0);
        this.props.getPostCount();
    }
    render(){
        return (
            <div>
                <Header 
                    title="Blog"
                    subtitle="Read all of our stories"
                    showButton={false}
                    image={image}

                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    getPosts: (skip) => {
        dispatch(SiteActions.getPosts(skip));
    },
    getPostCount: () => {
        dispatch(SiteActions.getPostCount());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog));