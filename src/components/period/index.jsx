import React, { Component } from 'react'
import './style.css'
import KeyHandler, { KEYPRESS } from 'react-key-handler'

class Period extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
		this.state = {
			period: 1,
        };
    }

    periodAdd() {
        if (this.state.period >= 1 && this.state.period < 4) {
            this.setState({
                period: this.state.period + 1,
            })
		} else {
            this.setState({
                period: this.state.period + 0,
            })
        }
    }

    periodRemove() {
        if (this.state.period > 1 && this.state.period <= 4) {
            this.setState({
                period: this.state.period - 1,
            })
		} else {
            this.setState({
                period: this.state.period - 0,
            })
        }
    }

	render() {
		return (
			<div>
                <div className="period">
                    <span className="text">Período</span>
                    <div className="num">{this.state.period}</div>
                </div>

                <KeyHandler
					keyEventName={KEYPRESS}
					keyValue={this.props.addPeriod}
					onKeyHandle={() => this.periodAdd()}
				/>

                <KeyHandler
					keyEventName={KEYPRESS}
					keyValue={this.props.removePeriod}
					onKeyHandle={() => this.periodRemove()}
				/>
			</div>
		);
	}
}

export default Period;
