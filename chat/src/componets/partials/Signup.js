import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Signup extends Component {
    render(){
        return(
            <div className="form-wrapper" >
                <h3>Sign Up</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
  })
  
  
  const mapDispatchToProps = dispatch => ({
    // setupSocket: () => {
    //   dispatch(ChatActions.setupSocket());
    // }
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup);