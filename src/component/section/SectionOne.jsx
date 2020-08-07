import React, { Component } from "react";
import TextLoop from "react-text-loop";

class SectionOne extends Component {
    render() {
      return (
    <div className="section-one-wrapper">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="section-one-left">
                    <div className="row">
                        <div className="col-12">
                            <img src={`/assets/images/service/service-03.png`} alt="Web Design" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="section-one-right">
                    <div className="inner">
                        <h2>
                        <TextLoop>
                        <h2>Web</h2>
                        <h2>Graphic</h2>
                        </TextLoop>{" "} Design & <br/>Development</h2>
                        <span>We provide a comprehensive range of web services, including design and development.</span>
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
export default SectionOne;