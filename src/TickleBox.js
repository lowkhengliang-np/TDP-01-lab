import React from 'react'

export default class TickleBox extends React.Component {
    state = {
        message: this.props.initialMessage
    }

    // Event Handler
    hover = () => {
        this.setState({message: "That Tickles!"})
        }
    
    exit = () => {
        this.setState({message: "Dont Tickle Me!"})
        }

    render() {
        return (
            <div onMouseEnter={this.hover}
            style={{
                border: "1px solid black",
                padding: "10px",
                width: "100%"
            }}>{this.state.message}
            
            {/* onMouseLeave={this.exit} */}
            
            </div>
            
        )
    }
}