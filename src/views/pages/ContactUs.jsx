import React, { lazy, Component } from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/envelope-fill.svg";
import { ReactComponent as IconHouseFill } from "bootstrap-icons/icons/house-fill.svg";
import { ReactComponent as IconTelephoneFill } from "bootstrap-icons/icons/telephone-fill.svg";

const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

class ContactUsView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <div className="container my-3">
        <div className="row g-3">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <IconEnvelopeFill className="i-va" /> Send Message
              </div>
              <div className="card-body">
                <ContactUsForm onSubmit={this.onSubmit} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-header">
                <IconHouseFill className="i-va" /> Address
              </div>
              <div className="card-body">
                <h6 className="card-title border-bottom border-dark pb-2">Head Office</h6>
                <address>
                <strong>KIIDAD Warehouse</strong>
                <br />
                Jayasewana 
                <br />
                Arandara
                <br />
                Atala
                <br />
              </address>
                
                
              </div>
            </div>
            <div className="card">
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31670.061591748276!2d80.28020661846554!3d7.153989369399266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30fe14919ba7b%3A0xedb8e1b4fd235699!2sAtala!5e0!3m2!1sen!2slk!4v1643977084811!5m2!1sen!2slk"
                  width={400}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsView;
