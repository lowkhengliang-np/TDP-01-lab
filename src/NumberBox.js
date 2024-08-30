import React from 'react'

export default class NumberBox extends React.Component {
    state = {
        count: this.props.initialValue
    }

    // Event Handler
    increaseCount = () => {
        if (this.state.count < 10) {
            this.setState({ count: this.state.count + 1 })
        };
    }
    decreaseCount = () => {
        if (this.state.count > -10){
            this.setState({ count: this.state.count - 1 })
        };
    }
    resetCount = () => {
        this.setState({ count: 0})
    }

    render() {
        return (
            <div>
                <div style={{
                    border: "1px solid black",
                    padding: "10px",
                    width: "20px",
                    margin: "0 auto",
                }}>{this.state.count}</div>

                <button onClick={this.increaseCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
                <button onClick={this.resetCount}>Reset to 0</button>
            </div>
        )
    }
}