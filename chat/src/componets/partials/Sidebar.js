import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";


class Sidebar extends Component {
    state = {
        search: ""
    }

    search = () => {
        this.props.socket.send(JSON.stringify({
            type: "SEARCH",
            data: this.state.search
        }))
    }

    findOrCreateThread = (id) => {
        this.props.socket.send(JSON.stringify({
            type: "FIND_THREAD",
            data: [this.props.user.id, id]
        }))
    }

    render(){
        return(
            <div className="sidebar">
                <div className="serach-container">

                    <input 
                    className="form-control" 
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={e => {
                        this.setState({search: e.target.value});
                    }}
                    />

                    <button 
                    className="btn btn-primary" 
                    onClick={e => this.search(this.state.search)}>
                    Search
                    </button>

                </div>
                {this.state.search 
                ?
                    <ul className="thread-list">
                        <label>Results</label>
                        {this.props.users 
                        && 
                        this.props.users.filter(u => u.id !==this.props.user.id).map((users, ui) => {
                            return (
                                <li key={ui}>
                                    <a onClick={ e => {
                                        e.preventDefault();
                                        this.findOrCreateThread(user.id);
                                    }}>
                                    <i className="zmdi zmdi-account-circle" />
                                    <h5>{users.name}</h5>
                                    <p>{users.email}</p>
                                    </a>
                                </li>
                            )

                        })}
                    </ul>
                :
                    <ul className="thread-list">
                        <label>Messages</label>
                        <li>
                            <Link to="/thread">
                                <i className="zmdi zmdi-account-circle" />
                                <h5>Name</h5>
                                <p>This is the last message</p>
                            </Link>
                        </li>
                    </ul>
                }
            </div>
        )
    }
}



const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
  })
  
  
  const mapDispatchToProps = dispatch => ({
   
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Sidebar));