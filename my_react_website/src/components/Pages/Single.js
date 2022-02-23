import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "../Common/Header";
import API from "../../utils/api";

class Single extends Component {

    componentDidMount(){
        this.props.getSinglePost(this.props.match.params.slug, this.props.auth.token)
    }
    render(){
        return(
            <div>
                <Header
                    title=""
                    subtitle={this.props.site.post.title}
                    showButton={false}
                    image = {
                        this.props.site.post.PostImage ?
                        this.props.site.post.PostImage.length > 0 ?
                            API.makeFileURL(this.props.site.post.Postimage[0].url, this.props.auth.token)
                        :""
                        :""
                        }
               />
            </div>
            
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