import React, { Component } from 'react';
import './hello.scss';
import helloImg from './img/hello.jpg';
import yilongImg from './img/yilong.png';

class Hello extends Component {
    constructor() {
        super()
        this.state = {
            inputText: 'sdfsdfsf'
        }
    }
    testClick = () => {
        debugger
        alert(this)
    }

    handleChange = (event) => {
        debugger
        this.setState({
            inputText: event.target.value.toUpperCase()
        })
    }

    render() {
        return (
            <div>
                <div onClick={this.testClick}
                    className="helloStyle">
                    Hello!{ this.props.name }
                    Hello!{ this.props.name }
                    <img src={yilongImg}/>
                </div>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleChange }
                    ref="changeInput"/>
            </div>


        );
    }
}

export default Hello;
