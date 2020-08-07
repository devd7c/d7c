import React, { Component } from "react";

class SectionThree extends Component {
    render() {
      return (
    <div className="section-three-wrapper">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="section-three-left">
                    <div className="row">
                        <div className="col-12">
                            <img src={`/assets/images/service/service-05.png`} alt="Web Design" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="section-three-right">
                    <div className="inner">
                        <h2>E-COMMERCE</h2>
                        <span>We focus uncovering opportunities to increase efficiency, reach new audiences, and maximize conversions.</span>
                        <a className="rn-button-style--2" href="#contact">
                            <span>Contact Us_</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default SectionThree;