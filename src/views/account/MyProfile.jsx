import axios from "../../helpers/axios"
import React, { lazy, Component } from "react";
const ProfileForm = lazy(() => import("../../components/account/ProfileForm"));

const ChangePasswordForm = lazy(() =>
  import("../../components/account/ChangePasswordForm")
);
const SettingForm = lazy(() => import("../../components/account/SettingForm"));
const CardListForm = lazy(() =>
  import("../../components/account/CardListForm") 
);

const KiidadAmount = lazy(()=> import("./KiidadAmount"));

class MyProfileView extends Component {
  state = { imagePreview: "", isDeleting: false, UserDetails:[] };

  componentDidMount(){
    axios.get('get_user').then(res=>{
      const uselval = res.data;
      console.log(uselval);
      this.setState({UserDetails: uselval.user});
      // console.log(this.state.UserDetails);
    });
  
  }
  
  
  onSubmitProfile = async (values) => {
    alert(JSON.stringify(values));
    
  };

  onSubmitChangePassword = async (values) => {
    alert(JSON.stringify(values));
  };


  

  onImageChange = async (obj) => {
    if (obj) {
      const val = await this.getBase64(obj);
      this.setState({ imagePreview: val });
    } else {
      this.setState({ imagePreview: "" });
    }
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
    });
  };
  render() {
    return (

      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-4">
           {/* <h1>{this.state.UserDetails.email}</h1> */}
            <ProfileForm
              onSubmit={this.onSubmitProfile}
              onImageChange={this.onImageChange}
              imagePreview={this.state.imagePreview}
              userEmail={this.state.UserDetails.email}
              userName = {this.state.UserDetails.name}
            />
          </div>
          <div className="col-md-8">
           <KiidadAmount />
            <ChangePasswordForm onSubmit={this.onSubmitChangePassword} />
            <br></br>
            {/* <SettingForm /> */}
            <br></br>
            {/* <CardListForm /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfileView;
