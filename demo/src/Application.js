import React, {Component} from "react";

class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState({count: this.state.count +1});
    }

    render(){
        let name = "Cristian";
        let {count} = this.state;
        return (    
            <div>
            <h1>Hello World!</h1>
            <p>This was created by: {name}</p>
            <h3>You Clicked the button {count} times</h3>
            <button onClick={(e)=> this.handleClick()}>Click Me</button>
            </div>
        );
    }

}

export default Application;