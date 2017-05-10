import React, {Component} from 'react';

class Road extends Component {

    constructor(props) {
        super(props);
        this.state = {content: 0};
    };

    updateContent() {
        if (this.state.content < 2) {
            this.setState({
                content: this.state.content + 1,
            });
        } else {
            this.setState({
                content: 0,
            });
        }
    }

    componentDidMount() {
        this.roadIntervalID = setInterval(
            () => this.updateContent(),
            300
        );
    }

    render() {
        return (
            <div className="road">
                <svg className="roadSvg" height="180" width="600">
                    <polygon className="road" points="100,0 510,0 550,180 50,180"/>
                    <rect className="line" width="10" height="100" x="300" y="" rx="3" ry="3">
                        <animateTransform attributeName="transform"
                                          attributeType="x"
                                          type="translate"
                                          from="0 250"
                                          to="0 -70"
                                          dur="1s"
                                          repeatCount="indefinite"/>
                    </rect>
                </svg>
            </div>
        )
    };
}

export default Road;