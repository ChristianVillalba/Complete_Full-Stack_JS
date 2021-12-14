import React, {Component} from "react";
import TeamMember from "./TeamMember";

// Profile Images:
import team04 from "../assets/img/team/4.jpg";
import team05 from "../assets/img/team/5.jpg";
import team06 from "../assets/img/team/6.jpg";
import team07 from "../assets/img/team/7.jpg";
import team08 from "../assets/img/team/8.jpg";
import team09 from "../assets/img/team/9.jpg";
import team10 from "../assets/img/team/10.jpg";
import team11 from "../assets/img/team/11.jpg";
import team12 from "../assets/img/team/12.jpg";

const members = [
    {name: "Pain", power:"Rinnengan", image: team04},
    {name: "Konan", power:"Paper Ninjutsu", image: team05},
    {name: "Zetsu", power:"Absorption", image: team06},
    {name: "Itachi", power:"Sharingan", image: team07},
    {name: "Sasori", power:"Weaponized Puppets", image: team08},
    {name: "Deidara", power:"Explosive Puppets", image: team09},
    {name: "Kisame", power:"Swordman", image: team10},
    {name: "Hidan", power:"Blood Rituals", image: team11},
    {name: "Tobi", power:"Explosives", image: team12},
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
