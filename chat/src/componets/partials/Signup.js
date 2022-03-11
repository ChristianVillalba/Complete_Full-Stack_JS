import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordAgain:"",
            name:"",
            username:"",
        }
    }

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
                                        password: this.props.state.password,
                                    }
                                }))
                            }
                        }} >

                            <p>Already have an account? <Link to="/login">Login</Link></p>

                            <div className="row" >
                                <div className="col-md-6" >
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
                                </div>
                            </div>

                            <div className="row" >
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                    <label>Name</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={e => this.setState({name: e.target.value})}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="row" >
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                    <label>Userame</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Userame"
                                        value={this.state.username}
                                        onChange={e => this.setState({username: e.target.value})}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="row" >
                                <div className="col-md-6" >
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
                                </div>
                            </div>

                            <div className="row" >
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                    <label>Confirm Password</label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={this.state.passwordAgain}
                                        onChange={e => this.setState({passwordAgain : e.target.value})}
                                    />
                                    </div>
                                </div>
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
  )(Signup);