import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Imagebox extends Component {

    render() {
        return (
            <Col sm={6} md={3} className="image-box">
                <div className="wrapper">
                    <img src={this.props.source}
                         className="gallery-image"/>
                </div>

                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height="100%" width="100%"/>
                </svg>


            </Col>
        );
    }
}

export default Imagebox;