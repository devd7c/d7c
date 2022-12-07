import React, { Component , Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import { FiChevronUp , FiX , FiMenu, FiShoppingCart, FiLayers, FiDatabase } from "react-icons/fi";
import FooterTwo from "../component/footer/FooterTwo";
import SectionOne from "../component/section/SectionOne";
import SectionTwo from "../component/section/SectionTwo";
import SectionThree from "../component/section/SectionThree";
import CallActionOne from "../elements/callActions/CallActionOne";
import CallActionTwo from "../elements/callActions/CallActionTwo";
import ContactThree from "../elements/contact/ContactThree";
import { Parallax } from "react-parallax";
import TextLoop from "react-text-loop";

import Helmet from "../component/common/Helmet";

const image3 = "/assets/images/bg/parallax/bg-image-67.jpg";
const ServiceList = [
    {
        icon: <FiLayers />,
        title: 'Web & Graphic Design',
        description: 'Coming soon'
    },
    {
        icon: <FiDatabase />,
        title: 'Software Development',
        description: 'Coming soon'
    },
    {
        icon: <FiShoppingCart />,
        title: 'E-commerce',
        description: 'Coming soon'
    },
]

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: '',
        description: '',
        buttonText: '> E N T E R_',
        buttonLink: '#service'
    }
]

class InteriorLanding extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        let elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        return(
            <Fragment>
                <Helmet pageTitle="D7C" />
                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left mt--15">
                            <div className="inner">
                                <a href="/">
                                    <TextLoop>
                                        <h3 className="theme-gradient">D7C</h3>
                                        <h3 className="theme-gradient">Design</h3>
                                        <h3 className="theme-gradient">D7C</h3>
                                        <h3 className="theme-gradient">Creativity</h3>
                                        <h3 className="theme-gradient">D7C</h3>
                                        <h3 className="theme-gradient">Development</h3>
                                    </TextLoop>{" "}
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service','portfolio','contact']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#service">Services</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </Scrollspy>
                            </nav>
                            {/*<div className="header-btn">
                                <a className="rn-btn" href="https://d7c.info/25457315?license=regular">
                                    <span>buy now</span>
                                </a>
                            </div>*/}
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles
                            params={{ "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }}
                        />
                    </div>
                    <div className="fullscreen d-flex align-items-center justify-content-center bg_image bg_image--33">
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? '' : <img className="logo-1" src="/assets/images/logo/logo-lg.png" alt="d7c logo xl"/>}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper bg_color--1" id="service">
                    <SectionOne />
                    <CallActionOne />
                    <SectionTwo />
                    <CallActionTwo />
                    <SectionThree />
                </div>
                {/* End Service Area  */} 

                {/* Start Portfolio Area  */}
                <div className="portfolio-area creative-service-portfolio-wrapper ptb--120 bg_color--1" id="portfolio">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <h2>Our work</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row creative-service">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <a className="text-center" href="#portfolio">
                                            <div className="service service__style--2">
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area  */}

                {/* Start Contact Area */}
                <div className="contact-area bg_color--1" id="contact">
                <Parallax className="brand-separation" bgImage={image3} strength={500}>
                    <ContactThree />
                </Parallax>

                </div>
                {/* End Contact Area */}

                {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}
            </Fragment>
        )
    }
}

export default InteriorLanding;