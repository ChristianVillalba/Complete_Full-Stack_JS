import React, {Component} from "react";

class Timeline extends Component {
  render (){
      return (
        <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Konan, Yahiko and Nagato were childhood friends who had been orphaned by the Second Shinobi World War.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 className="subheading">An Akatsuki is Born</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Akatsuki was created as a way to bring peace to their home country, which too often got caught in the crossfire of the many conflicts of the other nations.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 className="subheading">Desire for an end to war</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Akatsuki's early fame was owed largely to Yahiko's leadership and his natural charisma, which kept the group united and motivated despite the difficulties of their goal. Yahiko, however, viewed himself as merely a facilitator for Nagato, who would ultimately be the actual source of world peace.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 className="subheading">Same objective, New Approach</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Akatsuki's previously pacifist approaches were futile. After Yahiko's death, Akatsuki's new objective is obtaining power, then monopolizing war altogether to create peace.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>New Goal:
                      <br/>World
                      <br/>Domination!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default Timeline;