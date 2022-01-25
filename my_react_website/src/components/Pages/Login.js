import React, {Component} from "react";
import Field from "../Common/Field";
import {withFormik} from "formik";
import * as Yup from "yup";

const fields = [
    {name: "email", 
      elementName: "input",
      type:"email", 
      placeholder:"Your email", },
    {name: "password", 
      elementName: "input",
      type:"password", 
      placeholder:"Your password", },
]

class Login extends Component {
    render() {
        return (
            <h1>Login</h1>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email("Email is valid").required("You need to login with email address"),
        password: Yup.string().required("You need to enter your password")
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("Login attempt", values);
    }
}) (Login);