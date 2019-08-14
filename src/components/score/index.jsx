import React, { Component } from 'react'
import './style.css'
import KeyHandler, { KEYPRESS } from 'react-key-handler'

class Score extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
		this.state = {
			scoreA: 0,
			scoreB: 0
        };

        this.scoreB = 0
    }

    scoreAddA() {
        this.setState({
            scoreA: this.state.scoreA + 1,
        })
    }

    scoreRemoveA() {
        if (this.state.scoreA == 0 ) {
            this.setState({
                scoreA: this.state.scoreA - 0,
            })
		} else {
            this.setState({
                scoreA: this.state.scoreA - 1,
            })
        }
    }

    scoreAddB() {
        this.setState({
            scoreB: this.state.scoreB + 1
        })
    }

    scoreRemoveB() {
        if (this.state.scoreB == 0 ) {
            this.setState({
                scoreB: this.state.scoreB - 0,
            })
		} else {
            this.setState({
                scoreB: this.state.scoreB - 1,
            })
        }
    }

	render() {
		return (
			<div>
                <div className="scoreA">
                    <div className="team-name">{this.props.teamNameA}</div>
                    <h1 className="point">{this.state.scoreA}</h1>
                </div>

                <div className="scoreB">
                    <div className="team-name">{this.props.teamNameB}</div>
                    <h1 className="point">{this.state.scoreB}</h1>
                </div>

                <KeyHandler
					keyEventName={KEYPRESS}
					keyValue={this.props.addA}
					onKeyHandle={() => this.scoreAddA()}
				/>

                <KeyHandler
					keyEventName={KEYPRESS}
					keyValue={this.props.removeA}
					onKeyHandle={() => this.scoreRemoveA()}
				/>

                <KeyHandler
					keyEventName={KEYPRESS}
					keyValue={this.props.addB}
					onKeyHandle={() => this.scoreAddB()}
				/>

                <KeyHandler
					keyEventName={KEYPRESS}
					keyValue={this.props.removeB}
					onKeyHandle={() => this.scoreRemoveB()}
				/>
			</div>
		);
	}
}

export default Score;
