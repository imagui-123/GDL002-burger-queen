import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className="center">
                <p>{this.state.count}</p>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        );
    };
};

export default Counter