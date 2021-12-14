import React, {Component} from "react";
import SingleService from "./SingleService";

const servicesOffered = [
    {title: "Assassin", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-crosshairs"},
    {title: "Spy", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-binoculars"},
    {title: "Safeguard", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-shield-alt"},
]

class Services extends Component {
  render (){
      return (
        <section id="services">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row text-center">
            {/* Maping SingleService Components */}
            {servicesOffered.map((service,index)=>{
                return <SingleService 
                            {...service} key={index}
                            // equals to:
                            // title={servicesOffered.title} 
                            // description={servicesOffered.description}
                            // icon={servicesOffered.icon} 
                        />
            } ) }              
            </div>
            </div>
        </section>
      )
  }
}

export default Services;