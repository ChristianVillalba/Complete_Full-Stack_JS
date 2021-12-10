import React, {Component} from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg"

// Re-usable Components
import Services  from "../Common/Services";


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
            <Services />
          </div>
      )
  }
}

export default Home;
