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
    testClick(e) {
        debugger
        alert(this)
    }

    handleChange(event) {
        this.refs.changeInput
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
                    onChange={this.handleChange.bind(this) }
                    ref="changeInput"/>
            </div>


        );
    }
}

export default Hello;