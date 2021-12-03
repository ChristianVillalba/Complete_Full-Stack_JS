import React, {Component} from "react";

class Application extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let name = "Cristian";
        return (    
            <div>
            <h1>Hello World!</h1>
            <p>This was created by: {name}</p>
            </div>
        );
    }

}

export default Application;