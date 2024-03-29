import axios from "../../helpers/axios";
import React, {lazy, Component} from "react";
import toast from "react-hot-toast";
import { Link, Route } from "react-router-dom";

const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));
// const SignInView = lazy(() => import("SingIn"));


class SignUpView extends Component {

  onSubmit = async (values) => {
  
    try {
      const result = {
        email : values.email,
        password : values.password,
        name : values.firstName,
        // name : values.firstName + values.lastName
      };
      axios.post('register',  result )
      .then(response => {
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })
      toast.success("Register successful");
      <Route exact path="account/signin" />
    } catch (error) {
      alert("error register");
    }



  };
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                src="../../images/banner/Dell.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
            <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign Up</h4>
            <SingUpForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
