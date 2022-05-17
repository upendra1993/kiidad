import React, {lazy, Component} from "react";
import {Link, useHistory} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../../helpers/axios";

const SignInForm = lazy(() => import("../../components/account/SignInForm"));


class SignInView extends Component {

    
    onSubmit = async (values) => {
        try {
            let result = await axios.post('login', values);
            // console.log(result);
            if(result.data.success) {
                let token = result.data.token;
                localStorage.setItem('token', token);
                toast.success("login successful !");
                this.props.history.push('/');
                window.location.reload(false);
            } else {
                alert("authentication failed try again");
            }
        } catch (e) {
            console.log("login request failed with exception", e);
        }

    };

    async componentDidMount() {
        let token = localStorage.getItem('token')
        if (token === null)
            return
        try {
            let res = await axios.get('get_user');
            toast.success('you are already logged in !');
            if('user' in res.data) this.props.history.push('/');
        } catch (e) {
            console.log('token not valid', e);
            localStorage.removeItem('token');
        }
    }

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
                        <h4 className="text-center">Sign In </h4>
                        <SignInForm onSubmit={this.onSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInView;
