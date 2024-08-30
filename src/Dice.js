import React from 'react'

export default class Dice extends React.Component {
    generateNum = () => {
        return Math.floor(Math.random() * 6) + 1 
    }

    state = {
        value: this.generateNum()
    }

    roll = () => {
        this.setState({ value: this.generateNum()})
    }

    render() {
        return (<div>
            <div
                style={{
                    border: "4px solid black",
                    padding: "10px",
                }}>{this.state.value}

                <button onClick={this.roll}>Roll Dice</button>
            </div>
            
        </div>
        )
    }
}