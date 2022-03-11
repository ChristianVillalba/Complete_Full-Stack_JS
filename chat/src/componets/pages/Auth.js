import { connect } from "formik";
import React, {Component} from "react";
import {Connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as AuthActions from "../../store/actions/authActions";
import Login from "../partials/Login";
import Signup from "../partials/Signup"; 


class Auth extends Component {
    render(){
        return (
            <div className="auth-row">
                {this.props.match.path === "/signup" 
                ? 
                    <Signup />
                :
                    <Login />
                }
            </div>
        )

    }
}

const mapStateToProps = state => ({
    ...state.auth
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Auth));