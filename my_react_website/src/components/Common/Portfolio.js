import React, {Component} from "react";
import PorfolioItem from "./PortfolioItem";

const portfolio = [
  {title:"Threads", subtitle:"Illustration", image:""},
  {title:"Explore", subtitle:"Graphic Design", image:""},
  {title:"Finish", subtitle:"Identity", image:""},
  {title:"Lines", subtitle:"Website Design", image:""},
  {title:"Southwest", subtitle:"Branding", image:""},
  {title:"Window", subtitle:"Phtography", image:""},
];

class Portfolio extends Component {
  render (){
      return (
  <section className="bg-light" id="portfolio">
  <div className="container">

    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Portfolio</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
    </div>

    <div className="row">
    {portfolio.map((item, index)=> {
      return <PorfolioItem {...item} key={index} />
    })}

    </div>
  </div>
</section>

      )
  }
}

export default Portfolio;