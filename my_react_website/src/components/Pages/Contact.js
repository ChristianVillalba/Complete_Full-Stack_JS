import React, {Component} from "react";
import Field from "../Common/Field";
import { withFormik} from "formik";
import * as Yup from "yup";

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

class Contact extends Component {

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
              <form onSubmit={this.props.handleSubmit}
              name="sentMessage" novalidate="novalidate">
                <div className="row">
                {fields.sections.map((section, sectionIndex) => {
                  return (
                    <div className="col-md-6" key={sectionIndex}>
                      {section.map((field, index) => {
                        return <Field 
                          {...field} 
                          key={index} 
                          value={this.props.values[field.name]}
                          name={field.name}
                          onChange={this.props.handleChange}
                          touched={(this.props.touched[field.name])}
                          errors={this.props.errors[field.name]}
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

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email:"",
    phone:"",
    message:"",
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().min(2,"Your name should be longer.").required("You must give us your name."),
    // String inside required() will be the error message displayed
    email: Yup.email("Please, introduce a valid email.").required("You must give us your name."),
    phone: Yup.string().
    min(5,"Phone number must be longer than 5 digits.").
    max(20,"Phone number must be shorter than 20 digits.").
    required("We need a phone number to reach you at"),
  }),
  
  handleSubmit: (values,{setSubmitting}) => {
    console.log("VALUES", values);
    alert("You have submitted the form!", JSON.stringify(values));
  }

})(Contact);
