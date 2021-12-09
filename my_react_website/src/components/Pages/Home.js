import React, {Component} from "react";
import Header from "../Common/Header";

class Home extends Component {
  render (){
      return (
          <div>
            <Header 
              title="It's nice to meet you, warrior"
              subtitle="Welcome To Our Gym"
              buttonText="Tell me more"
              link="/services"
              showButton={true}
            />
          </div>
      )
  }
}

export default Home;
