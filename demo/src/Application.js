import React, {Component} from "react";
import HighScore from "./HighScore";

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
    componentDidUpdate(props, state){
        if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
            this.state({overTen:true})
        }
    }

    resetCount = (e) => {
        this.setState({
            count:0,
            overTen: false
        });
        
    }

    render(){
        let name = "Cristian";
        let {count} = this.state;
        return (    
            <div>
            <h1>Hello World!</h1>
            <p>This was created by: {name}</p>
            <HighScore 
                overTen={this.state.overTen}
                onReset={(e)=> this.resetCount(e)}
            />
            <h3>You Clicked the button {count} times</h3>
            <button onClick={(e)=> this.handleClick()}>Click Me</button>
            </div>
        );
    }

}

export default Application;