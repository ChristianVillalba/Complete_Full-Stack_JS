import React, {Component} from "react";
import Header from "../Common/Header";
import Timeline from "../Common/Timeline";
import image from "../assets/img/about.jpg";


class About extends Component {
  render (){
      return (
          <div>
            <Header 
              title="About Us"
              subtitle="We are Akatsuki"
              showButton={false}
              image={image}
            />
            <Timeline />
          </div>
          )
  }
}

export default About;