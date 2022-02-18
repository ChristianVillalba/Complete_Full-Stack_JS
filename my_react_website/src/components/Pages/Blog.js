import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';

class Blog extends Component {
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

const mapStateToProps = state => {
    // return {
    //   auth: state.auth
    // }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
  
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog));