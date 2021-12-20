import React, {Component} from "react";
import Field from "../Common/Field";
import { withFormik} from "formik";

const fields = {
  sections: [
    [
      {name: "name", 
      elementName: "input",
      type:"text", 
      placeholder:"Your Name", },
      {name: "email", 
      elementName: "input",
      type:"email", 
      placeholder:"Your email", },
      {name: "phone", 
      elementName: "input",
      type:"text", 
      placeholder:"Your phone", },
    ],
    [
      {name: "message", 
      elementName: "textarea",
      type:"text", 
      placeholder:"Type your message", },  
    ]
  ],
  } 

class Contatc extends Component {

  submitForm = (e) => {alert("Form Submitted. Thank You")}

  render (){
      return (
        <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onClick={e => this.submitForm(e)}
              name="sentMessage" novalidate="novalidate">
                <div className="row">
                {fields.sections.map((section, sectionIndex) => {
                  return (
                    <div className="col-md-6" key={sectionIndex}>
                      {section.map((field, index) => {
                        return <Field 
                          {...field} 
                          key={index} 
                          />
                      })}

                    </div> 
                  )
                })}

                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button 
                    // id="sendMessageButton" 
                    className="btn btn-primary btn-xl text-uppercase" 
                    type="submit"
                    
                    
                    >Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    
          
      )
  }
}



})(Contatc);
