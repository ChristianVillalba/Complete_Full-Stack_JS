import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Login extends Component {
    render(){
        return(
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12" >
                        <h3>Sign Up</h3>
                        <form 
                        onSubmit={e => {
                            e.preventDefault();
                            if (this.props.socket){
                                this.props.socket.send(JSON.stringify({
                                    type: "SIGNUP",
                                    data: {
                                        email: this.state.email,
                                        password: this.props.state.password
                                    }
                                }))
                            }
                        }} >
                            <div className="form-group" >
                                <label>Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                />
                            </div>
                            <div className="form-group" >
                                <label>Password</label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={e => this.setState({password : e.target.value})}
                                />
                            </div>
                            <button className="btn-btn-primary" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
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
  )(Login);