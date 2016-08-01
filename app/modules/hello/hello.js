import React, { Component } from 'react';
import './hello.scss';

class Hello extends Component {
    render() {
        return ( <div className="helloStyle"> Hello!{ this.props.name } </div>
        );
    }
}

export default Hello;