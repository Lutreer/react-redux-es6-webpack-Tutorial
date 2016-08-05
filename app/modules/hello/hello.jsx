import React, { Component } from 'react';
import './hello.scss';
import helloImg from './img/hello.jpg';
import yilongImg from './img/yilong.png';

class Hello extends Component {
    constructor() {
        super()
    }
    testClick(e) {
        debugger
        alert(this)
    }
    render() {
        return (
            <div onClick={this.testClick}
                className="helloStyle">
                Hello!{ this.props.name }
                Hello!{ this.props.name }
                <img src={yilongImg}/>
            </div>

        );
    }
}

export default Hello;