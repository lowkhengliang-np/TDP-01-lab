import React from 'react'

export default class AlertBox extends React.Component {
    state = {
        message: this.props.message
    }

    render() {
        return (
            <div style={{
                border: "4px solid black",
                padding: "10px",
                
            }}>{this.state.message}</div>
        )
    }
}