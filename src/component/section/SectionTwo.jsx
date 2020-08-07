import React, { Component } from "react";

class SectionTwo extends Component {
    render() {
      return (
    <div className="section-two-wrapper">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="section-two-left">
                    <div className="inner">
                        <h2>Software Development</h2>
                        <span>D7C builds reliable solutions on the basis of Customer’s business needs and objectives.</span>
                        <a className="rn-button-style--2" href="#contact">
                            <span>Contact Us_</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="section-two-right">
                    <div className="row">
                        <div className="col-12">
                            <img src={`/assets/images/service/service-04.png`} alt="Web Design" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default SectionTwo;