import React from 'react'
import "../trafficLight.css"

class TrafficLight extends React.Component {
    constructor() {
        super();
        this.state = {
            activeLight: ""
        }
        this.handleActive = this.handleActive.bind(this)
    }

    handleActive = (e) => {
        if (this.state.activeLight !== "") {
            let light = document.getElementById(this.state.activeLight)
            light.classList.remove("active" + this.state.activeLight)
        }
        this.setState({
            activeLight: e.target.id
        })
        setTimeout(() => {
            let light = document.getElementById(this.state.activeLight)
            light.classList.add('active' + this.state.activeLight)
        }, 1)
    }

    render() {
        return (
            <div>
                <div className="top-stick">
                    <h1>|</h1>
                </div>
                <div className="container">
                    <div className="red light"><i onClick={this.handleActive} id="red" className="fas fa-circle"></i></div>
                    <div className="yellow light"><i onClick={this.handleActive} id="yellow" className="fas fa-circle"></i></div>
                    <div className="green light"><i onClick={this.handleActive} id="green" className="fas fa-circle"></i></div>
                </div>
            </div>
        )
    }
}

export default TrafficLight