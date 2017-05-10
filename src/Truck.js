import React, {Component} from 'react';

class Blinker extends Component {
    constructor(props) {
        super(props);
        this.toggleBlink = this.toggleBlink.bind(this);
        this.state = {
            blinking: this.props.blinking,
            blinkerClass: "blink-off",
        }
    }

    componentDidUpdate() {
        if (this.state.blinking) {
            if (this.state.blinkerClass === "blink-on") {
                setTimeout(
                    () => this.setState({blinkerClass: "blink-off"}),
                    500)
            } else {
                setTimeout(
                    () => this.setState({blinkerClass: "blink-on"}),
                    500)
            }
        } else if (this.state.blinkerClass === "blink-on") {
            this.setState({blinkerClass: "blink-off"});
        }
    }

    toggleBlink() {
        if (this.state.blinking) {
            this.setState({
                blinking: false,
                blinkerClass: "blink-off"
            });
        } else {
            this.setState({
                blinking: true,
                blinkerClass: "blink-on"
            });
        }
    }

    render() {
        var blinkerClass = this.state.blinkerClass;

        return (
            <div className={"blinker " + blinkerClass} id={this.props.side + 'Blinker'} onClick={this.toggleBlink}/>
        )
    }
}

class Wiper extends Component {
    render() {
        return (
            <div className="wiper">
                <svg width="216" height="77" viewBox="0 0 216 77">
                    <rect id="wiper-arm" className="wiperArm" width="75" height="3" x="31" y="74" rx="2" ry="2">
                        <animateTransform attributeName="transform"
                                          attributeType="XML"
                                          type="rotate"
                                          from="0 108 74"
                                          to="180 108 74"
                                          dur="1s"
                                          begin="click"
                                          repeatCount="1"
                                          id="first-wipe"/>
                        <animateTransform attributename="transform"
                                          attributeType="XML"
                                          type="rotate"
                                          from="180 108 74"
                                          to="0 108 74"
                                          dur="1s"
                                          begin="first-wipe.begin + 1s"
                                          repeatCount="1"
                                          additive="sum"/>
                    </rect>
                </svg>
            </div>
        )
    }
}

class Cabin extends Component {

    render() {
        return (
            <div className="cabin">
                <div className="cabinWindow"/>
                <Wiper />
                <div className="frontLight leftFrontLight"/>
                <Blinker side="left" blinking={false}/>

                <div className="frontLight rightFrontLight"/>
                <Blinker side="right" blinking={false}/>
            </div>


        )
    }
}

class Plate extends Component {
    render() {
        return (
            <div className="plate">
                <svg height="24" width="72" viewBox="0 0 72 24">
                    <text x="8" y="18" fill="black" fontSize="11pt">LOL-101</text>
                </svg>
            </div>
        )
    }
}

class Truck extends Component {

    bump() {
        document.getElementById('truck').style.margin = "40.5% 30% 25%";
        setTimeout(
            () => document.getElementById('truck').style.margin = "40% 30% 25%",
            100
        );
    };

    componentDidMount() {
        document.getElementById('truck').style.margin = "40% 30% 25%";

        this.truckInterval = setInterval(
            () => this.bump(),
            1000
        );
    }

    render() {
        return (
            <div id="truck" className="truck">
                <Cabin />
                <Plate />
                <div className="wheel leftWheel"/>
                <div className="wheel rightWheel"/>
            </div>

        )
    }
    ;
}
;

export default Truck;