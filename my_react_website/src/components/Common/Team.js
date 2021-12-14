import React, {Component} from "react";
import TeamMember from "./TeamMember";

// Profile Images:
import team04 from "../assets/img/team/4.jpg";
import team05 from "../assets/img/team/5.jpg";
import team06 from "../assets/img/team/6.jpg";

const members = [
    {name: "Pain", power:"Rinnengan", image: team04},
    {name: "Konan", power:"Paper Ninjutsu", image: team05},
    {name: "Zetsu", power:"Absorption", image: team06},
]

class Team extends Component {
  render (){
      return (
        <section className="bg-light" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
          {members.map((member, index)=>{
              return <TeamMember {...member} key={index} />
          })}

            
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default Team;
