import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Design & Creativity</title>
                    <meta name="description" content="D7C – Builds reliable solutions on the basis of Customer’s business needs and objectives. D7C We provide a comprehensive range of web services,
                    including design and development." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
