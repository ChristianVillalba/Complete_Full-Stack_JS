import React, {Component} from "react";

class HighScore extends Component {
    render(){
        if (this.props.overTen){
            return (
                <h3>You did It!</h3>
            )
        } else {
            return <h3>Do Not Beat high Score of 10 or the App will disappear!
            <button onClick={(e) => this.props.onReset(e) }>Reset</button>
            
            </h3>;
        }
       
    }

}

export default HighScore;