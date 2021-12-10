import React, {Component} from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg"

class Home extends Component {
  render (){
      return (
          <div>
            <Header 
              title="It's nice to meet you, warrior!"
              subtitle="Welcome To Our Gym"
              buttonText="Tell me more"
              link="/services"
              showButton={true}
              image={image}
            />
          </div>
      )
  }
}

export default Home;
