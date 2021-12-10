import React, {Component} from "react";
import Header from "./Header";
import image from "../assets/img/header-bg.jpg";
import SingleService from "./SingleService";

const servicesOffered = [
    {title: "E-commerce", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-shopping-cart"},
    {title: "Responsive Design", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-laptop"},
    {title: "Web Security", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-shopping-cart"},
]

class Services extends Component {
  render (){
      return (
        <section id="services">
            <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Services</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row text-center">
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