import React, { Component } from 'react'
import './style.css'
import EndTime from '../../audio/buzzer-sound.mp3'
import KeyHandler, { KEYPRESS } from 'react-key-handler'

class Period extends Component {
	constructor() {
		super();
		this.state = {
			time: {},
			seconds: 30,
			timePeriod: {},
			secondsPeriod: 720
		};
		this.timer = 0;
		this.timerPeriod = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
		this.countDownPeriod = this.countDownPeriod.bind(this);
	}

	endTime() {
		this.endtime.play()
	}

	secondsToTime(secs) {
		let divisor_for_minutes = secs % (60 * 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			"s": seconds
		};
		return obj;
	}

	secondsToTimePeriod(secs) {
		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let objPeriod = {
			"min": minutes,
			"sec": seconds
		};
		return objPeriod;
	}

	componentDidMount() {
		let timeLeftVarPeriod = this.secondsToTime(this.state.secondsPeriod)
		this.setState({ timePeriod: timeLeftVarPeriod })
		let timeLeftVar = this.secondsToTime(this.state.seconds)
		this.setState({ time: timeLeftVar })
	}

	startTimer() {
		if (this.timerPeriod == 0 && this.state.secondsPeriod > 0) {
			this.timerPeriod = setInterval(this.countDownPeriod, 1000)
		}
		if (this.timer == 0 && this.state.seconds > 0) {
			this.timer = setInterval(this.countDown, 1000)
		}
	}

	stopTimer() {
		clearInterval(this.timerPeriod)
		this.timerPeriod = 0
		clearInterval(this.timer)
		this.timer = 0
	}

	resetTimer() {
		let seconds = 30
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: 30
		})
	}

	resetGame() {
		clearInterval(this.timerPeriod)
		this.timerPeriod = 0
		let secondsPeriod = 720
		this.setState({
			timePeriod: this.secondsToTime(secondsPeriod),
			secondsPeriod: 720
		})
		clearInterval(this.timer)
		this.timer = 0
		this.resetTimer()
	}

	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds,
		});

		if (seconds == 0) {
			this.endTime()
			clearInterval(this.timer)
			this.resetTimer()
			clearInterval(this.timerPeriod)
			this.timerPeriod = 0
			clearInterval(this.timer)
			this.timer = 0
		}
	}

	countDownPeriod() {
		// Remove one second, set state so a re-render happens.
		let secondsPeriod = this.state.secondsPeriod - 1;
		this.setState({
			timePeriod: this.secondsToTimePeriod(secondsPeriod),
			secondsPeriod: secondsPeriod,
		});

		// Check if we're at zero.
		if (secondsPeriod == 0) {
			clearInterval(this.timerPeriod)
		}
	}

	render() {
		return (
			<div>
				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue={this.props.start}
					onKeyHandle={this.startTimer}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="b"
					onKeyHandle={this.stopTimer.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="z"
					onKeyHandle={this.resetGame.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue=" "
					onKeyHandle={this.resetTimer.bind(this)}
				/>
				<audio ref={(endtime) => { this.endtime = endtime; }}>
					<source src={EndTime} type="audio/mpeg" >
					</source>
				</audio>

				<h1 className="short-time">
					{this.state.time.s}
				</h1>

				<h1 className="period-time">
					{this.state.timePeriod.min}:{this.state.timePeriod.sec}
				</h1>
			</div>
		);
	}
}

export default Period;
